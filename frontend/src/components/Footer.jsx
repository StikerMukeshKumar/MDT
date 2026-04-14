import React, { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Stack,
  Button,
} from "@mui/material";

import { NavLink } from "react-router-dom";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  const socialLinks = [
    {
      icon: GitHubIcon,
      url: "https://github.com/StikerMukeshKumar",
    },
    {
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/stiker-mukesh-kumar",
    },
    {
      icon: InstagramIcon,
      url: "https://www.instagram.com/mukeshdevtech/",
    },
    {
      icon: TwitterIcon,
      url: "https://x.com/JrMukeshKumar",
    },
    {
      icon: YouTubeIcon,
      url: "https://www.youtube.com/@stikermukeshkumar",
    },
  ];

  return (
    <Box
      ref={footerRef}
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        mt: 10,
        color: "#fff",

        background:
          "linear-gradient(135deg, rgba(10,15,30,0.98), rgba(20,25,45,0.98))",

        borderTop: "1px solid rgba(255,255,255,0.12)",
        py: 7,

        "&::before": {
          content: '""',
          position: "absolute",
          width: "180px",
          height: "180px",
          background: "#00c6ff",
          filter: "blur(60px)",
          top: "-50px",
          left: "-50px",
          opacity: 0.1,
        },

        "&::after": {
          content: '""',
          position: "absolute",
          width: "180px",
          height: "180px",
          background: "#7c3aed",
          filter: "blur(60px)",
          bottom: "-50px",
          right: "-50px",
          opacity: 0.08,
        },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">

          {/* BRAND */}
          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "20px",
                background: "linear-gradient(45deg,#00c6ff,#0072ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MukeshDev Tech
            </Typography>

            <Typography
              sx={{
                mt: 1,
                fontSize: "14px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Modern Web Development Studio
            </Typography>
          </Grid>

          {/* LINKS */}
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={3} justifyContent="center">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <Button
                  key={item.label}
                  component={NavLink}
                  to={item.path}
                  sx={{
                    color: "rgba(255,255,255,0.85)",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "14px",
                    "&.active": { color: "#00c6ff" },
                    "&:hover": {
                      color: "#fff",
                      transform: "translateY(-2px)",
                      transition: "0.3s",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          </Grid>

          {/* SOCIAL */}
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;

                return (
                  <IconButton
                    key={i}
                    component="a"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: 52,
                      height: 52,
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(0,198,255,0.25)",
                      color: "#00c6ff",

                      "& svg": {
                        fontSize: "28px",
                      },

                      "&:hover": {
                        transform: "translateY(-4px) scale(1.08)",
                        background: "rgba(255,255,255,0.15)",
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                );
              })}
            </Stack>
          </Grid>
        </Grid>

        {/* BOTTOM */}
        <Box
          sx={{
            mt: 4,
            pt: 2,
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            © {new Date().getFullYear()} MukeshDev Tech — All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;