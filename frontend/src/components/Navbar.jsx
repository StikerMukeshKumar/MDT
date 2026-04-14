import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: "blur(10px)",
          background: "rgba(15, 23, 42, 0.7)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          {/* LOGO + BRAND */}
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* LOGO */}
            <img
              src={logo}
              alt="MukeshDev Tech"
              style={{
                width: "38px",
                height: "38px",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />

            {/* BRAND NAME */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                letterSpacing: 1,
                cursor: "pointer",
                display: "inline-block",
                background: "linear-gradient(45deg, #00c6ff, #0072ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  opacity: 0.9,
                },
              }}
            >
              MukeshDev Tech
            </Typography>
          </NavLink>

          {/* DESKTOP MENU */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={NavLink}
                to={item.path}
                sx={{
                  color: "#fff",
                  position: "relative",
                  fontWeight: 500,
                  "&.active": {
                    color: "#00c6ff",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "0%",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    background: "#00c6ff",
                    transition: "0.3s",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* MOBILE MENU ICON */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 250,
            height: "100%",
            background: "#0f172a",
            color: "#fff",
            textAlign: "center",
          }}
        >
          {/* MOBILE LOGO */}
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Box sx={{ mt: 3 }}>
              <img
                src={logo}
                alt="logo"
                style={{ width: "50px", marginBottom: "10px" }}
              />

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  background: "linear-gradient(45deg, #00c6ff, #0072ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                MukeshDev Tech
              </Typography>
            </Box>
          </NavLink>

          <List sx={{ mt: 3 }}>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  sx={{
                    textAlign: "center",
                    "&.active": {
                      background: "linear-gradient(45deg, #00c6ff, #0072ff)",
                      color: "#fff",
                    },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;