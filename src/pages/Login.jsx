import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Login()
{
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        
        if (email.trim() === "" || password.trim() === "") {
            alert("Please enter email and password");
            return;
        }
        console.log("Login: ", email, password);
        navigate("/dashboard");
    };
    return(
        <Container maxWidth = "sm">
            <Box mt = {8} p={4} boxShadow={3} borderRadius={3} bgcolor="#ffffff" sx ={{ color: "black"}}>
                <Typography variant="h4" align="center" gutterBottom>
                    Login
                </Typography> 
                <form onSubmit={handleLogin}>
                    <TextField 
                        fullWidth 
                        label="Email" 
                        margin="normal" 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        name="password"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt:3 }}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
                <Typography align="center" sx={{ mt: 2 }}>
                    Don't have an account? <Link to="/register">Register</Link>
                </Typography>
            </Box>
        </Container>
    );
}