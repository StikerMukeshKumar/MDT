import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  Container,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const services = [
  {
    icon: "🌐",
    title: "Custom Web Development",
    desc: `
We build high-performance custom websites using modern tech stack.

Plans:
• Starter: Static website (HTML, CSS, JS) + 5 pages
• Standard: React + API integration + admin panel
• Supreme: Full MERN / Next.js + auth + dashboard + SEO
    `,
    badge: "Core Service",
    image: "/images/website.png",
  },
  {
    icon: "📱",
    title: "App Development",
    desc: `
Mobile apps for Android & iOS.

Plans:
• Starter: Basic Android app
• Standard: React Native app + API
• Supreme: Full app + payments + notifications
    `,
    badge: "Trending",
    image: "/images/app.jpg",
  },
  {
    icon: "🏢",
    title: "ERP Software Development",
    desc: `
Business automation systems.

Plans:
• Starter: Billing / inventory system
• Standard: Multi-module ERP
• Supreme: Enterprise ERP + analytics + cloud
    `,
    badge: "Enterprise",
    image: "/images/erp.png",
  },
  {
    icon: "🎮",
    title: "Game Development",
    desc: `
2D/3D game development.

Plans:
• Starter: Simple 2D game
• Standard: 2D/3D with animations
• Supreme: Multiplayer + backend + leaderboard
    `,
    badge: "Creative",
    image: "/images/game.png",
  },
  {
    icon: "📈",
    title: "SEO Optimization",
    desc: `
Ranking & traffic growth.

Plans:
• Starter: On-page SEO
• Standard: On + Off page SEO
• Supreme: Full SEO strategy + reports
    `,
    badge: "Growth",
    image: "/images/seo.png",
  },
];

const Services = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedService(null);
  };

  return (
    <Box sx={{ minHeight: "100vh", background: "#0f172a", color: "#fff", py: 10 }}>
      
      {/* TITLE */}
      <Typography variant="h3" align="center" mb={6} fontWeight="bold">
        Our <span style={{ color: "#00c6ff" }}>Services</span>
      </Typography>

      <Container>
        <Grid container spacing={4} alignItems="stretch">
          {services.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
  sx={{
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "center",
    background: "rgba(255,255,255,0.04)",
    backdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "22px",
    transition: "0.35s ease",
    height: "100%",
    minHeight: "420px",
    position: "relative",
    overflow: "hidden",

    // subtle glow background
    "&::before": {
      content: '""',
      position: "absolute",
      top: "-50%",
      left: "-50%",
      width: "200%",
      height: "200%",
      background:
        "radial-gradient(circle, rgba(0,198,255,0.12), transparent 60%)",
      transform: "rotate(25deg)",
      zIndex: 0,
    },

    "&:hover": {
      transform: "translateY(-12px) scale(1.03)",
      boxShadow: "0 25px 60px rgba(0,198,255,0.15)",
      borderColor: "#00c6ff",
    },
  }}
>
  {/* CONTENT WRAPPER */}
  <Box sx={{ position: "relative", zIndex: 1 }}>
    
    <Typography fontSize="2.5rem">{item.icon}</Typography>

    <Typography variant="h6" mt={2} fontWeight="bold">
      {item.title}
    </Typography>

    <Typography
      sx={{
        color: "#aaa",
        mt: 2,
        fontSize: "0.9rem",
        lineHeight: 1.6,
        minHeight: "60px",
      }}
    >
      {item.desc.split("Plans:")[0]}
    </Typography>
  </Box>

  {/* FOOTER (ALWAYS ALIGNED) */}
  <Box sx={{ mt: 3, position: "relative", zIndex: 1 }}>
    
    <Chip
      label={item.badge}
      size="small"
      sx={{
        background: "#00c6ff",
        color: "#000",
        fontWeight: "bold",
      }}
    />

    <Button
      variant="outlined"
      fullWidth
      sx={{
        mt: 2,
        color: "#00c6ff",
        borderColor: "#00c6ff",
        borderRadius: "10px",
        fontWeight: 600,
        transition: "0.3s",

        "&:hover": {
          background: "#00c6ff",
          color: "#000",
          boxShadow: "0 0 20px rgba(0,198,255,0.4)",
        },
      }}
      onClick={() => handleOpen(item)}
    >
      View Details
    </Button>
  </Box>
</Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FULL DETAIL MODAL */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent sx={{ position: "relative", p: 4, background: "#0f172a", color: "#fff" }}>
          
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "#fff",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedService && (
            <>
              <Typography variant="h4" fontWeight="bold" mb={2}>
                {selectedService.icon} {selectedService.title}
              </Typography>

              <Box
                component="img"
                src={selectedService.image}
                alt="service"
                sx={{
                  width: "100%",
                  borderRadius: "12px",
                  mb: 3,
                }}
              />

              <Typography
                sx={{ whiteSpace: "pre-line", color: "#ccc", lineHeight: 1.8 }}
              >
                {selectedService.desc}
              </Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Services;