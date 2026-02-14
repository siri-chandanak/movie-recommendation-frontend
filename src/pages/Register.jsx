import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";

export default function Register()
{
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        country: "",
        language: "",
        genres: []
    });
    const genresList = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance"];
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handleGenreChange = (genre) => {
        if (form.genres.includes(genre)) {
            setForm({
                ...form,
                genres: form.genres.filter(g => g !== genre)
            });
        } 
        else {
            setForm({
                ...form,
                genres: [...form.genres, genre]
            });
        }
    };
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(form);
        navigate("/dashboard");
    };
    return(
        <Container maxWidth = "sm">
            <Box mt = {8} p={4} boxShadow={3} borderRadius={3} bgcolor="#ffffff" sx ={{ color: "black"}}>
                <Typography variant="h4" align="center" gutterBottom>
                    Register
                </Typography>
                <form onSubmit={handleRegister}>
                    <TextField 
                        fullWidth 
                        label="Full Name" 
                        name="name"
                        margin="normal" 
                        value={form.name}
                        onChange={handleChange}
                        required
                    /> 
                    <TextField
                        fullWidth 
                        label="Email" 
                        name="email"
                        margin="normal" 
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        margin="normal"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Age"
                        name="age"
                        type="number"
                        margin="normal"
                        value={form.age}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        label="Country"
                        name="country"
                        margin="normal"
                        value={form.country}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        label="Preferred Language"
                        name="language"
                        margin="normal"
                        value={form.language}
                        onChange={handleChange}
                    />
                    <Typography variant="h6" mt={2}>
                        Favorite Genres
                    </Typography>
                    <FormGroup row>
                        {genresList.map((genre) => (
                        <FormControlLabel
                            key={genre}
                            control={
                            <Checkbox
                                checked={form.genres.includes(genre)}
                                onChange={() => handleGenreChange(genre)}
                            />
                            }
                            label={genre}
                        />
                        ))}
                    </FormGroup>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt:3 }}
                        type="submit"
                    >
                        Register
                    </Button>
                </form>
                <Typography align="center" sx={{ mt: 2 }} >
                    Already have an account? <Link to="/login">Login</Link>
                </Typography>
            </Box>
        </Container>
    );
}