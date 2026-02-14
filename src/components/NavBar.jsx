import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { useState } from "react";
import { AppBar, Toolbar, Typography, InputBase, Button, Box } from "@mui/material";

function NavBar(){
    const [search, setSearch]=useState("");
    const navigate=useNavigate();
    const handleSearch = () => {
        const q = search.trim();
        if (q) {
          navigate(`/movies?search=${encodeURIComponent(q)}`);
          setSearch("");
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };
    return (
        <AppBar position="static" sx={{ backgroundColor: "#111" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* Logo */}
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                <Link to="/" className="navbar-logo" style={{ color: "#fff", textDecoration: "none" }}>
                    🎞️ Cinefy
                </Link>
                </Typography>

                {/* Search */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <InputBase
                    placeholder="Search movies..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown = {handleKeyPress}
                    className="search-input"
                    sx={{
                    background: "#222",
                    color: "#fff",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    width: 260
                    }}
                />
                </Box>

                {/* Links */}
                <Box sx={{ display: "flex", gap: 3 }}>
                <Link to="/movies" className="nav-link" style={{ color: "#ddd", textDecoration: "none" }}>
                    Movies
                </Link>
                <Link to="/recommend" className="nav-link" style={{ color: "#ddd", textDecoration: "none" }}>
                    Recommendations
                </Link>
                <Link to="/history" className="nav-link" style={{ color: "#ddd", textDecoration: "none" }}>
                    History
                </Link>
                <Link to="/login" className="nav-link" style={{ color: "#ddd", textDecoration: "none" }}>
                    Login
                </Link>
                <Link to="/register" className="nav-link" style={{ color: "#ddd", textDecoration: "none" }}>
                    Register
                </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;