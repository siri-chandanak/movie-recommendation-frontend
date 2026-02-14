import { useParams } from "react-router-dom";
import { Box, Typography, Button, Grid } from "@mui/material"; 
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { useHistory } from "../routes/HistoryContext";

export default function MovieDetails()
{
    const { id } = useParams();
    const [rating, setRating] = useState(0);
    const { addToHistory } = useHistory();
    const movies = [
        {
        id: "1",
        title: "Inception",
        description: "A mind-bending thriller about dreams within dreams.",
        genre: "Sci-Fi",
        poster: "https://via.placeholder.com/300x450"
        },
        {
        id: "2",
        title: "Interstellar",
        description: "A journey beyond the stars to save humanity.",
        genre: "Sci-Fi",
        poster: "https://via.placeholder.com/300x450"
        },
        {
        id: "3",
        title: "Batman Begins",
        description: "The origin story of the Dark Knight.",
        genre: "Action",
        poster: "https://via.placeholder.com/300x450"
        }
    ];
    const movie = movies.find((m) => m.id === id);
    if(!movie){
        return <Typography p={4}>Movie not found</Typography>;
    }
    const handleLike = () => {
        console.log("Liked movie: ", movie.title);
    };
    const handleWatch= () => {
        addToHistory({
            id: movie.id,
            title: movie.title,
            poster: movie.poster
        });
        console.log("Watched Movie: ", movie.title);
    };
    return (
        <Box p={4}>
            <Grid container spacing={4}>
                
                {/* Poster */}
                <Grid item>
                    <img
                        src={movie.poster}
                        alt={movie.title}
                        style={{ width: 300, borderRadius: 8 }}
                    />
                </Grid>

                {/* Details */}
                <Grid item xs>
                    <Typography variant="h3" gutterBottom>
                        {movie.title}
                    </Typography>

                    <Typography variant="h6" color="gray" gutterBottom>
                        Genre: {movie.genre}
                    </Typography>

                    <Typography variant="body1" mt={2}>
                        {movie.description}
                    </Typography>
                    <Box mt={3}>
                        <Typography variant="h6">Rate this movie:</Typography>
                        <Rating
                            name="movie-rating"
                            value={rating}
                            onChange={(event, newValue) => {
                            setRating(newValue);
                            console.log("Rated:", newValue);
                            }}
                            size="large"
                        />
                    </Box>

                    {/* Buttons */}
                    <Box mt={4} display="flex" gap={2}>
                        <Button variant="contained" color="primary" onClick={handleWatch}>
                        ▶ Watch
                        </Button>

                        <Button variant="outlined" color="secondary" onClick={handleLike}>
                        ❤️ Like
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}