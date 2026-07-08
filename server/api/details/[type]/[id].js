const axios = require('axios');
const withCors = require('../../../lib/cors');

async function handler(req, res) {
  const { type, id } = req.query;
  const apiKey = process.env.TMDB_API_KEY;

  if (!['movie', 'tv'].includes(type)) {
    return res.status(400).json({ success: false, message: 'Type must be movie or tv' });
  }

  try {
    const [detailRes, creditsRes, videosRes] = await Promise.all([
      axios.get(`https://api.themoviedb.org/3/${type}/${id}`, {
        params: { api_key: apiKey },
      }),
      axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits`, {
        params: { api_key: apiKey },
      }),
      axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos`, {
        params: { api_key: apiKey },
      }),
    ]);

    const trailer = (videosRes.data.results || []).find(
      (v) => v.type === 'Trailer' && v.site === 'YouTube'
    );

    res.status(200).json({
      success: true,
      data: {
        ...detailRes.data,
        credits: creditsRes.data,
        trailer: trailer || null,
      },
    });
  } catch (error) {
    console.error('Error fetching media details:', error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch details' });
  }
}

module.exports = withCors(handler);
