import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from "@mui/material";


export default function Home()
{
    const navigate = useNavigate();
    return(
        <Container maxWidth="md">
            {/* Top bar*/}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={3}
                sx ={{ color: "White"}}
            >
                <Typography variant="h5" fontWeight="bold">
                    🎬 Movie Recommendation System
                </Typography>
                <Box>
                    <Button
                        variant="outlined"
                        sx={{ mr: 2 }}
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{ mr: 2 }}
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </Button>
                </Box>
            </Box>
            {/*Welcome Section*/}
            <Box mt={10} textAlign="center" sx ={{ color: "white"}}>
                <Typography variant="h3" gutterBottom>
                     Welcome 🎥
                </Typography>
                <Typography variant="h6" color="text.secondary" sx ={{ color: "white"}}>
                    Discover movies you’ll love based on your taste.
                </Typography>
            </Box>
        </Container>
    );
}