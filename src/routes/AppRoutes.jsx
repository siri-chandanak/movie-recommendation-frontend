import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from "../components/NavBar";

import Login from "../pages/login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AdminAddMovie from "../pages/AdminAddMovie";
import Dashboard from "../pages/Dashboard";
import History from "../pages/History";
import MovieDetails from "../pages/MovieDetails";
import Movies from "../pages/Movies";
import Profile from "../pages/Profile";
import Recommendations from "../pages/Recommendations";

export default function AppRoutes()
{
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Navigate to='/' replace />} />
                <Route path="/dashboard" element={<Dashboard /> } />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<MovieDetails />} />
                <Route path="/recommend" element={<Recommendations />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/history" element={<History />} />
                <Route path="/admin/add" element={<AdminAddMovie />} />
            </Routes>
        </BrowserRouter>
    );
}