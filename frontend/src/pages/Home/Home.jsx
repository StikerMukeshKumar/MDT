import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Grid,
  Container,
  Paper,
  Fab,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const navigate = useNavigate();
  const sections = useRef([]);
  sections.current = [];

  const addToRefs = (el) => {
    if (el && !sections.current.includes(el)) {
      sections.current.push(el);
    }
  };

  /* ================= TYPEWRITER ================= */
  const fullText = "MukeshDev Tech";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    sections.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <Box sx={{ bgcolor: "#050816", color: "#fff", overflow: "hidden" }}>

      {/* 🌌 BACKGROUND */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 20%, #00c6ff33, transparent 40%), radial-gradient(circle at 80% 30%, #7c3aed33, transparent 40%), radial-gradient(circle at 50% 80%, #22c55e22, transparent 40%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      {/* HERO */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={6}>

            {/* LEFT CONTENT */}
            <Grid item xs={12} md={6}>

              <Typography sx={{ color: "#00c6ff", mb: 2 }}>
                Startup Web Agency
              </Typography>

              {/* TYPEWRITER NAME */}
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  lineHeight: 1.1,
                }}
              >
                {text}
                <Box component="span" sx={{ color: "#00c6ff" }}> |</Box>
              </Typography>

              <Typography sx={{ mt: 3, color: "#aaa", maxWidth: 500 }}>
                High-performance websites, SaaS platforms and eCommerce systems designed to convert visitors into customers.
              </Typography>

              <Stack direction="row" spacing={2} mt={4}>
                <Button
                  onClick={() => navigate("/services")}
                  sx={{
                    bgcolor: "#00c6ff",
                    color: "#000",
                    px: 4,
                    py: 1.3,
                    borderRadius: 2,
                    fontWeight: 600,
                  }}
                >
                  View Work
                </Button>

                <Button
                  onClick={() => navigate("/contact")}
                  sx={{
                    border: "1px solid #00c6ff",
                    color: "#00c6ff",
                    px: 4,
                    py: 1.3,
                    borderRadius: 2,
                  }}
                >
                  Hire Us
                </Button>
              </Stack>

            </Grid>

            {/* RIGHT IMAGE */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: { xs: 250, md: 320 },
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                }}
              >
                <img
                  src="/images/mdt.png"
                  alt="mockup"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                  }}
                />
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* SERVICES */}
      <Box ref={addToRefs} sx={{ py: 10, position: "relative", zIndex: 1 }}>
        <Container>
          <Typography textAlign="center" variant="h4" mb={6}>
            What We Do
          </Typography>

          <Grid container spacing={3}>
            {[
              ["Web Development", "Modern scalable apps using React & Next.js"],
              ["UI/UX Design", "Conversion-focused clean interfaces"],
              ["E-Commerce", "High performance online stores"],
              ["SEO Growth", "Rank higher & get traffic"],
            ].map((item, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Paper
                  sx={{
                    p: 3,
                    height: "100%",
                    bgcolor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 3,
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <Typography fontWeight={700}>{item[0]}</Typography>
                  <Typography mt={1} color="#aaa">
                    {item[1]}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* STATS */}
      <Box ref={addToRefs} sx={{ py: 10 }}>
        <Container>
          <Grid container spacing={3} textAlign="center">
            {[
              ["15+", "Projects"],
              ["12+", "Clients"],
              ["2+", "Years"],
            ].map((s, i) => (
              <Grid item xs={4} key={i}>
                <Typography sx={{ fontSize: 40, fontWeight: 800, color: "#00c6ff" }}>
                  {s[0]}
                </Typography>
                <Typography color="#aaa">{s[1]}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* PROCESS */}
      <Box ref={addToRefs} sx={{ py: 10, bgcolor: "rgba(255,255,255,0.02)" }}>
        <Container>
          <Typography textAlign="center" variant="h4" mb={6}>
            Our Process
          </Typography>

          <Grid container spacing={3} textAlign="center">
            {["Idea", "Design", "Develop", "Launch"].map((step, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Paper sx={{ p: 3, bgcolor: "rgba(255,255,255,0.05)", borderRadius: 3 }}>
                  <Typography color="#00c6ff">Step {i + 1}</Typography>
                  <Typography>{step}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* TESTIMONIALS */}
      <Box ref={addToRefs} sx={{ py: 10 }}>
        <Container>
          <Typography textAlign="center" variant="h4" mb={6}>
            Client Feedback
          </Typography>

          <Stack spacing={2}>
            {[
              "They delivered beyond expectations.",
              "Website conversion increased 3x.",
              "Very fast and professional work.",
            ].map((t, i) => (
              <Paper
                key={i}
                sx={{
                  p: 3,
                  bgcolor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 2,
                }}
              >
                "{t}"
              </Paper>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h4">Let’s Build Something Powerful</Typography>

        <Button
          onClick={() => navigate("/contact")}
          sx={{
            mt: 4,
            bgcolor: "#00c6ff",
            color: "#000",
            px: 5,
            py: 1.5,
            borderRadius: 2,
          }}
        >
          Start Now
        </Button>
      </Box>

      {/* FLOAT BUTTON */}
      <Fab
        onClick={() => navigate("/contact")}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          bgcolor: "#00c6ff",
          color: "#000",
        }}
      />
    </Box>
  );
};

export default Home;