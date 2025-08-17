import api from "./api";
// Get Popular Movies
export const getPopularMovies = async () => {
  try {
    const response = await api.get("/popular");
    return response.data;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};
// Get Top Movies
export const getTopMovies = async () => {
  try {
    const response = await api.get("/popular");
    return response.data;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};