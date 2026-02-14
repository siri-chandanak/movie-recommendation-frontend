import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  MenuItem
} from "@mui/material";

export default function AdminAddMovie() {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    genre: "",
    year: "",
    language: "",
    posterFile: null,
    posterPreview: ""
  });

  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Sci-Fi",
    "Romance"
  ];

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setMovie({
        ...movie,
        posterFile: file,
        posterPreview: URL.createObjectURL(file)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Movie Data:", movie);

    // Later this will be sent to backend using FormData
    // Example:
    // const formData = new FormData();
    // formData.append("title", movie.title);
    // formData.append("description", movie.description);
    // formData.append("genre", movie.genre);
    // formData.append("year", movie.year);
    // formData.append("language", movie.language);
    // formData.append("poster", movie.posterFile);
  };

  return (
    <Container maxWidth="sm">
      <Box
        mt={6}
        p={4}
        boxShadow={3}
        borderRadius={3}
        bgcolor="#ffffff"
        sx={{ color: "black" }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Add New Movie
        </Typography>

        <TextField
          fullWidth
          label="Movie Title"
          name="title"
          margin="normal"
          value={movie.title}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Description"
          name="description"
          margin="normal"
          multiline
          rows={3}
          value={movie.description}
          onChange={handleChange}
        />

        <TextField
          select
          fullWidth
          label="Genre"
          name="genre"
          margin="normal"
          value={movie.genre}
          onChange={handleChange}
        >
          {genres.map((g) => (
            <MenuItem key={g} value={g}>
              {g}
            </MenuItem>
          ))}
        </TextField>

        {/* Upload Poster */}
        <Box mt={3}>
          <Typography variant="subtitle1" gutterBottom>
            Upload Poster
          </Typography>

          <Button variant="outlined" component="label">
            Choose File
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleFileChange}
            />
          </Button>

          {movie.posterFile && (
            <Box mt={2}>
              <Typography variant="body2">
                Selected: {movie.posterFile.name}
              </Typography>

              <img
                src={movie.posterPreview}
                alt="Poster Preview"
                style={{
                  width: "150px",
                  marginTop: "10px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.3)"
                }}
              />
            </Box>
          )}
        </Box>

        <TextField
          fullWidth
          label="Release Year"
          name="year"
          margin="normal"
          value={movie.year}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Language"
          name="language"
          margin="normal"
          value={movie.language}
          onChange={handleChange}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          onClick={handleSubmit}
        >
          Add Movie
        </Button>
      </Box>
    </Container>
  );
}
