import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { useHistory } from "../routes/HistoryContext";


export default function History()
{
    const { history } = useHistory();
    return (
        <Box p={4}>
            <Typography variant="h4" gutterBottom>
                Recently Watched
            </Typography>

            {history.length === 0 ? (
                <Typography>
                    No watch history yet. Watch a movie to see it here 🎬
                </Typography>
            ) : (
                <Grid container spacing = {2}>
                    {history.map((movie) => (
                        <Grid item key={movie.id}>
                            <Card sx={{ width: 220 }}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={movie.poster}
                                    alt={movie.title}
                                />
                                <CardContent>
                                    <Typography variant="subtitle1">{movie.title}</Typography>
                                    <Typography variant="body2" color="gray">
                                        Watched: {new Date(movie.watchedAt).toLocaleString()}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}

        </Box>
    );
}