import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  Avatar,
  Container,
} from "@mui/material";

const About = () => {
  return (
    <Box sx={{ background: "#0f172a", color: "#fff" }}>

      {/* HERO */}
      <Box
        sx={{
          py: 12,
          textAlign: "center",
          position: "relative",
          background:
            "radial-gradient(circle at top, rgba(0,198,255,0.15), transparent 60%)",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          mt={2}
          sx={{
            background: "linear-gradient(45deg,#00c6ff,#0072ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          We're MukeshDev Tech
        </Typography>

        <Typography sx={{ mt: 2, color: "#aaa" }}>
          Crafting premium digital experiences that grow businesses 🚀
        </Typography>
      </Box>

      {/* MISSION */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={8} alignItems="center">

          {/* LEFT */}
          <Grid item xs={12} md={6}>
            <Typography sx={{ color: "#00c6ff" }}>Our Mission</Typography>

            <Typography variant="h4" fontWeight="bold" mt={2}>
              Crafting{" "}
              <span style={{ color: "#00c6ff" }}>
                Digital Excellence
              </span>
            </Typography>

            <Typography sx={{ mt: 2, color: "#94a3b8" }}>
              We build high-performance websites that not only look stunning
              but also convert visitors into customers.
            </Typography>

            <Typography sx={{ mt: 2, color: "#94a3b8" }}>
              Our approach combines strategy, design, and development into
              powerful digital solutions.
            </Typography>

            {/* STATS */}
            <Grid container spacing={3} mt={3}>
              {[
                ["150+", "Projects"],
                ["98%", "Success"],
              ].map((item, i) => (
                <Grid item xs={6} key={i}>
                  <Card
                    sx={{
                      p: 3,
                      background: "rgba(255,255,255,0.03)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "16px",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        borderColor: "#00c6ff",
                      },
                    }}
                  >
                    <Typography variant="h5" color="#00c6ff">
                      {item[0]}
                    </Typography>
                    <Typography color="#94a3b8">
                      {item[1]}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* RIGHT FEATURES */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {[
                ["🎯", "Strategy First"],
                ["⚡", "Fast Delivery"],
                ["🔒", "Secure Systems"],
                ["🌟", "Top Quality"],
              ].map((item, i) => (
                <Grid item xs={6} key={i}>
                  <Card
                    sx={{
                      p: 4,
                      textAlign: "center",
                      background: "rgba(255,255,255,0.03)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "16px",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-8px) scale(1.03)",
                        boxShadow: "0 10px 30px rgba(0,198,255,0.2)",
                      },
                    }}
                  >
                    <Typography fontSize="2rem">{item[0]}</Typography>
                    <Typography mt={1}>{item[1]}</Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

        </Grid>
      </Container>

      {/* TIMELINE */}
      <Box sx={{ background: "#020617", py: 10 }}>
        <Container>
          <Typography align="center" variant="h4" mb={6}>
            Our Journey
          </Typography>

          {[
            ["2025", "Founded"],
            ["2026", "Growth"],
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                mb: 4,
                p: 3,
                borderLeft: "3px solid #00c6ff",
                background: "rgba(255,255,255,0.02)",
                borderRadius: "10px",
              }}
            >
              <Typography color="#00c6ff">{item[0]}</Typography>
              <Typography fontWeight="bold">{item[1]}</Typography>
            </Box>
          ))}
        </Container>
      </Box>

      {/* TEAM */}
      <Container sx={{ py: 10 }}>
        <Typography align="center" variant="h4" mb={6}>
          Meet the Team
        </Typography>

        <Grid container spacing={4}>
          {[
            ["Mukesh Kumar", "Full-Stack Dev", "images/m.png"],
            ["Devanshi", "CEO", "images/d.png"],
            ["Pradeep", "Backend Dev", "images/s.png"],
            ["Angel", "Marketing", "images/a.png"],
          ].map((member, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card
                sx={{
                  p: 4,
                  textAlign: "center",
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 15px 40px rgba(0,198,255,0.2)",
                  },
                }}
              >
                <Avatar
                  src={member[2]}
                  sx={{
                    width: 90,
                    height: 90,
                    mx: "auto",
                    mb: 2,
                    border: "2px solid #00c6ff",
                  }}
                />

                <Typography fontWeight="bold">
                  {member[0]}
                </Typography>

                <Typography variant="body2" color="#94a3b8">
                  {member[1]}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </Box>
  );
};

export default About;