const OpenAI = require('openai');

const PROMPT_TEMPLATE = `You are a movie recommendation assistant. Given a user's natural language description of what they want to watch, extract structured search parameters for The Movie Database (TMDB).

Available movie genres with their IDs:
Action: 28, Adventure: 12, Animation: 16, Comedy: 35, Crime: 80, Documentary: 99, Drama: 18, Family: 10751, Fantasy: 14, History: 36, Horror: 27, Music: 10402, Mystery: 9648, Romance: 10749, Science Fiction: 878, TV Movie: 10770, Thriller: 53, War: 10752, Western: 37

User query: "{query}"

Return ONLY valid JSON with these fields (include only relevant fields, use null for unknowns):
{
  "genres": ["array of genre names that match the description"],
  "search_query": "a concise 3-6 word TMDB search string using specific plot/thematic keywords",
  "year_start": null,
  "year_end": null
}

CRITICAL rules for search_query:
- Use specific plot keywords that TMDB would recognize: settings, character types, central themes
- AVOID generic single words like "love", "funny", "scary" on their own — pair them with context
- Examples of good search_query: "class divide romance", "prince pauper love", "superhero alien invasion", "haunted mansion mystery", "teen summer camp slasher"

Examples:
- Query: "i want to watch a movie where a strong man saves a damsel in distress"
  Response: {"genres": ["Action", "Adventure"], "search_query": "hero rescues damsel", "year_start": null, "year_end": null}
- Query: "something funny from the 90s"
  Response: {"genres": ["Comedy"], "search_query": "90s comedy", "year_start": 1990, "year_end": 1999}
- Query: "a scary horror movie from last year"
  Response: {"genres": ["Horror"], "search_query": "scary horror", "year_start": 2025, "year_end": 2025}
- Query: "a movie about a rich guy falling in love with a poor girl"
  Response: {"genres": ["Romance", "Drama"], "search_query": "rich poor romance class differences", "year_start": null, "year_end": null}`;

const GENRE_MAP = {
  'action': 28,
  'adventure': 12,
  'animation': 16,
  'comedy': 35,
  'crime': 80,
  'documentary': 99,
  'drama': 18,
  'family': 10751,
  'fantasy': 14,
  'history': 36,
  'horror': 27,
  'music': 10402,
  'mystery': 9648,
  'romance': 10749,
  'science fiction': 878,
  'tv movie': 10770,
  'thriller': 53,
  'war': 10752,
  'western': 37,
};

function parseLLMResponse(text) {
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('No JSON found in response');
  return JSON.parse(jsonMatch[0]);
}

function mapGenresToIds(genreNames) {
  if (!genreNames || !Array.isArray(genreNames)) return '';
  const ids = genreNames
    .map(name => GENRE_MAP[name.toLowerCase().trim()])
    .filter(id => id !== undefined);
  return [...new Set(ids)].join('|');
}

async function interpretQuery(query) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error('GROQ_API_KEY not configured');

  const groq = new OpenAI({
    baseURL: 'https://api.groq.com/openai/v1',
    apiKey,
  });

  const prompt = PROMPT_TEMPLATE.replace('{query}', query);

  const completion = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.1,
  });

  const text = completion.choices[0]?.message?.content || '';
  const parsed = parseLLMResponse(text);

  return {
    genres: mapGenresToIds(parsed.genres),
    searchQuery: parsed.search_query || '',
    yearStart: parsed.year_start || null,
    yearEnd: parsed.year_end || null,
  };
}

module.exports = { interpretQuery };
