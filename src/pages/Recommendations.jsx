import { Box, Typography, Grid } from "@mui/material";
import MovieCard from "../components/MovieCard";
import { useHistory } from "../routes/HistoryContext";

export default function Recommendations() {
  const { history } = useHistory();

  // Dummy full movie catalog
  const allMovies = [
    { id: "1", title: "Inception", genre: "Sci-Fi", poster: "https://via.placeholder.com/200x300" },
    { id: "2", title: "Interstellar", genre: "Sci-Fi", poster: "https://via.placeholder.com/200x300" },
    { id: "3", title: "Tenet", genre: "Sci-Fi", poster: "https://via.placeholder.com/200x300" },
    { id: "4", title: "Avengers", genre: "Action", poster: "https://via.placeholder.com/200x300" },
    { id: "5", title: "Batman Begins", genre: "Action", poster: "https://via.placeholder.com/200x300" },
    { id: "6", title: "Joker", genre: "Drama", poster: "https://via.placeholder.com/200x300" },
    { id: "7", title: "Titanic", genre: "Romance", poster: "https://via.placeholder.com/200x300" }
  ];

  // Get genres from watch history
  const watchedGenres = history.map((movie) => movie.genre);

  // Recommend movies with same genre
  const recommendations = allMovies.filter(
    (movie) =>
      watchedGenres.includes(movie.genre) &&
      !history.find((h) => h.id === movie.id)
  );

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Recommended for You
      </Typography>

      {history.length === 0 ? (
        <Typography>
          Watch some movies to get recommendations 🎬
        </Typography>
      ) : recommendations.length === 0 ? (
        <Typography>No new recommendations yet.</Typography>
      ) : (
        <Grid container spacing={2}>
          {recommendations.map((movie) => (
            <Grid item key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
