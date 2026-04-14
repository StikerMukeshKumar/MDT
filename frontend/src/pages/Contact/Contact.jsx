import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  MenuItem,
  Button,
  Container,
  Paper,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";

const ProjectRequest = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    source: "",
  });

  const [open, setOpen] = useState(false); // ✅ single popup
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          projectType: form.projectType || "N/A",
          budget: form.budget || "N/A",
          timeline: form.timeline || "N/A",
          source: form.source || "N/A",
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setOpen(true); // ✅ only popup

        setForm({
          name: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          description: "",
          source: "",
        });
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0f172a, #020617)",
        minHeight: "100vh",
        py: 10,
      }}
    >
      <Typography variant="h3" align="center" fontWeight="bold" color="#fff" mb={2}>
        Request a <span style={{ color: "#00c6ff" }}>Project</span>
      </Typography>

      <Typography align="center" sx={{ color: "rgba(255,255,255,0.6)" }} mb={6}>
        Fill out the form and let's build something amazing 🚀
      </Typography>

      <Container maxWidth="md">
        <Paper
          elevation={10}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: "24px",
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <Typography color="#00c6ff" fontWeight="bold" mb={4} textAlign="center">
            Tell Us About Your Project
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2.5}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Your Name" name="name" value={form.name} onChange={handleChange} required sx={inputStyle} />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required sx={inputStyle} />
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth label="Company / Brand Name" name="company" value={form.company} onChange={handleChange} sx={inputStyle} />
              </Grid>

              <Grid item xs={12}>
                <TextField select fullWidth label="Project Type" name="projectType" value={form.projectType} onChange={handleChange} sx={inputStyle}>
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="Business Website">Business Website</MenuItem>
                  <MenuItem value="E-Commerce">E-Commerce</MenuItem>
                  <MenuItem value="Web App">Web App / SaaS</MenuItem>
                  <MenuItem value="UI/UX">UI/UX Design</MenuItem>
                  <MenuItem value="SEO">SEO</MenuItem>
                  <MenuItem value="Custom">Custom</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField select fullWidth label="Budget" name="budget" value={form.budget} onChange={handleChange} sx={inputStyle}>
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="25-50K">₹25K – ₹50K</MenuItem>
                  <MenuItem value="50K-1L">₹50K – ₹1L</MenuItem>
                  <MenuItem value="1L-3L">₹1L – ₹3L</MenuItem>
                  <MenuItem value="3L+">₹3L+</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField select fullWidth label="Timeline" name="timeline" value={form.timeline} onChange={handleChange} sx={inputStyle}>
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="ASAP">ASAP</MenuItem>
                  <MenuItem value="1 Month">1 Month</MenuItem>
                  <MenuItem value="2-3 Months">2–3 Months</MenuItem>
                  <MenuItem value="Flexible">Flexible</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth multiline rows={4} label="Project Description" name="description" value={form.description} onChange={handleChange} sx={inputStyle} />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" fullWidth disabled={loading} sx={{
                  background: "linear-gradient(90deg,#00c6ff,#0072ff)",
                  color: "#fff",
                  fontWeight: "bold",
                  py: 1.5,
                  borderRadius: "12px",
                }}>
                  {loading ? "Submitting..." : "Submit Project Request →"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>

      {/* ✅ SINGLE POPUP */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: "20px",
            background: "rgba(15,23,42,0.95)",
            backdropFilter: "blur(20px)",
            color: "#fff",
            p: 2,
          },
        }}
      >
        <DialogContent>
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            🎉 Success!
          </Typography>
          <Typography textAlign="center" mt={1}>
            Your project request has been submitted successfully.
          </Typography>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={() => setOpen(false)}
            sx={{
              background: "#00c6ff",
              color: "#000",
              borderRadius: "10px",
              px: 3,
            }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    borderRadius: "12px",
    backgroundColor: "rgba(255,255,255,0.03)",
    "& fieldset": { borderColor: "rgba(255,255,255,0.15)" },
    "&:hover fieldset": { borderColor: "#00c6ff" },
    "&.Mui-focused fieldset": { borderColor: "#00c6ff", borderWidth: "2px" },
  },
  "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.7)" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#00c6ff" },
};

export default ProjectRequest;