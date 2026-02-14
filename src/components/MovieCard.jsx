import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }){
    const navigate = useNavigate();

    return(
        <Card
            sx={{ width: 200, cursor: "pointer"}}
            onClick={() => navigate("/movies/${movie.id}")}
        >
            <CardMedia
                component="img"
                image={movie.poster}
                alt={movie.title}
                sx={{ height: 300 }}
            />
            <CardContent>
                <Typography variant="subtitle1">
                    {movie.title}
                </Typography>
            </CardContent>
        </Card>
    );
}