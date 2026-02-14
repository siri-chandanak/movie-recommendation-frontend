import { useLocation } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";
import MovieCard from "../components/MovieCard";

export default function Movies() {
    const location = useLocation();

    // Get search query from URL
    const query = new URLSearchParams(location.search);
    const search = query.get("search")?.toLowerCase() || "";

    // Dummy movie data
    const movies = [
            { id: 1, title: "Inception", poster: "https://via.placeholder.com/200x300" },
            { id: 2, title: "Interstellar", poster: "https://via.placeholder.com/200x300" },
            { id: 3, title: "Tenet", poster: "https://via.placeholder.com/200x300" },
            { id: 4, title: "Avengers", poster: "https://via.placeholder.com/200x300" },
            { id: 5, title: "Batman", poster: "https://via.placeholder.com/200x300" },
            { id: 6, title: "Joker", poster: "https://via.placeholder.com/200x300" },
            { id: 7, title: "Titanic", poster: "https://via.placeholder.com/200x300" },
            { id: 8, title: "Gladiator", poster: "https://via.placeholder.com/200x300" }
    ];

    // Filter movies based on search
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search)
    );

    return (
        <Box p={4}>
        <Typography variant="h4" gutterBottom>
            {search ? `Search Results for "${search}"` : "All Movies"}
        </Typography>

        {filteredMovies.length === 0 ? (
            <Typography>No movies found</Typography>
        ) : (
            <Grid container spacing={2}>
            {filteredMovies.map((movie) => (
                <Grid item key={movie.id}>
                <MovieCard movie={movie} />
                </Grid>
            ))}
            </Grid>
        )}
        </Box>
    );
}
