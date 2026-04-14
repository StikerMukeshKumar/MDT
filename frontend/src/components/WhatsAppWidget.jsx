import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { gsap } from "gsap";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "918059513600";

  const quickReplies = [
    "Hi, I need a website",
    "I want pricing details",
    "I need SaaS development",
    "Let’s discuss my project",
  ];

  const openChat = () => {
    setOpen(true);

    setTimeout(() => {
      gsap.fromTo(
        ".wa-box",
        { scale: 0.7, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );
    }, 50);
  };

  const closeChat = () => {
    gsap.to(".wa-box", {
      scale: 0.7,
      opacity: 0,
      y: 40,
      duration: 0.2,
      onComplete: () => setOpen(false),
    });
  };

  const sendMessage = (msg) => {
    const text = encodeURIComponent(msg || message || "Hello 👋");

    window.open(
      `https://wa.me/${phoneNumber}?text=${text}`,
      "_blank"
    );
  };

  return (
    <Box>

      {/* ================= FLOAT BUTTON ================= */}
      {!open && (
        <Box
          onClick={openChat}
          sx={{
            position: "fixed",
            bottom: 25,
            right: 25,
            zIndex: 9999,
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#25D366,#128C7E)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              color: "#fff",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              animation: "pulse 1.5s infinite",
              transition: "0.3s",
              "&:hover": { transform: "scale(1.1)" },
              "@keyframes pulse": {
                "0%": { boxShadow: "0 0 0 0 rgba(37,211,102,0.6)" },
                "70%": { boxShadow: "0 0 0 15px rgba(37,211,102,0)" },
                "100%": { boxShadow: "0 0 0 0 rgba(37,211,102,0)" },
              },
            }}
          >
            <FaWhatsapp />
          </Box>

          <Typography
            sx={{
              fontSize: 11,
              mt: 1,
              color: "#aaa",
            }}
          >
            Chat with us
          </Typography>
        </Box>
      )}

      {/* ================= CHAT WINDOW ================= */}
      {open && (
        <Box
          className="wa-box"
          sx={{
            position: "fixed",
            bottom: 25,
            right: 25,
            width: 340,
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
            zIndex: 9999,
            background: "#0f172a",
            color: "#fff",
          }}
        >
          {/* HEADER */}
          <Box
            sx={{
              background: "linear-gradient(135deg,#25D366,#128C7E)",
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography fontWeight={700}>Mukesh Dev Team</Typography>
              <Typography fontSize={11}>
                🟢 Online - replies instantly
              </Typography>
            </Box>

            <Typography
              onClick={closeChat}
              sx={{ cursor: "pointer", fontWeight: 800 }}
            >
              ✕
            </Typography>
          </Box>

          {/* BODY */}
          <Box sx={{ p: 2 }}>
            <Typography fontSize={13} color="#aaa">
              👋 Hello! How can we help you today?
            </Typography>

            {/* QUICK REPLIES */}
            <Box sx={{ mt: 2 }}>
              {quickReplies.map((q, i) => (
                <Box
                  key={i}
                  onClick={() => setMessage(q)}
                  sx={{
                    p: 1,
                    my: 1,
                    borderRadius: 2,
                    bgcolor: "rgba(255,255,255,0.05)",
                    cursor: "pointer",
                    fontSize: 13,
                    "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  {q}
                </Box>
              ))}
            </Box>

            {/* INPUT */}
            <TextField
              fullWidth
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{
                mt: 2,
                input: { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#333" },
                  "&:hover fieldset": { borderColor: "#25D366" },
                },
              }}
            />

            {/* SEND BUTTON */}
            <Box
              onClick={() => sendMessage()}
              sx={{
                mt: 2,
                p: 1.5,
                textAlign: "center",
                background: "linear-gradient(135deg,#25D366,#128C7E)",
                borderRadius: 2,
                cursor: "pointer",
                fontWeight: 700,
                "&:hover": { opacity: 0.9 },
              }}
            >
              Send on WhatsApp 🚀
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default WhatsAppWidget;