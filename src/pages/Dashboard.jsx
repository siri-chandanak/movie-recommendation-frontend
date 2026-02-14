import MovieCard from "../components/MovieCard";
import { Box, Typography, Grid } from "@mui/material";

export default function Dashboard()
{
    const recommended = [
        { id: 1, title: "Inception", poster: "https://via.placeholder.com/200x300" },
        { id: 2, title: "Interstellar", poster: "https://via.placeholder.com/200x300" },
        { id: 3, title: "Tenet", poster: "https://via.placeholder.com/200x300" }
    ];
    const trending = [
        { id: 4, title: "Avengers", poster: "https://via.placeholder.com/200x300" },
        { id: 5, title: "Batman", poster: "https://via.placeholder.com/200x300" },
        { id: 6, title: "Joker", poster: "https://via.placeholder.com/200x300" }
    ];

    const history = [
        { id: 7, title: "Titanic", poster: "https://via.placeholder.com/200x300" },
        { id: 8, title: "Gladiator", poster: "https://via.placeholder.com/200x300" }
    ];
    return (
        <Box p={4}>
        <Typography variant="h4" gutterBottom>
            Welcome 👋
        </Typography>

        {/* Recommended */}
        <Typography variant="h5" mt={3} mb={2}>
            Recommended for You
        </Typography>
        <Grid container spacing={2}>
            {recommended.map((movie) => (
            <Grid item key={movie.id}>
                <MovieCard movie={movie} />
            </Grid>
            ))}
        </Grid>

        {/* Trending */}
        <Typography variant="h5" mt={4} mb={2}>
            Trending Now
        </Typography>
        <Grid container spacing={2}>
            {trending.map((movie) => (
            <Grid item key={movie.id}>
                <MovieCard movie={movie} />
            </Grid>
            ))}
        </Grid>

        {/* History */}
        <Typography variant="h5" mt={4} mb={2}>
            Recently Watched
        </Typography>
        <Grid container spacing={2}>
            {history.map((movie) => (
            <Grid item key={movie.id}>
                <MovieCard movie={movie} />
            </Grid>
            ))}
        </Grid>
        </Box>
    );
}