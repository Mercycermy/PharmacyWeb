import React, { useEffect, useState } from "react";
import TelegramIconMui from "@mui/icons-material/Telegram"; // Renamed import to avoid conflict
import "./ScrollToTop.css";

const TelegramIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 10);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Define the scrollTopStyle inside the component
  const scrollTopStyle = {
    position: "fixed",
    bottom: "350px",
    right: "20px",
    zIndex: "1000",
    cursor: "pointer",
  };

  return (
    isVisible && (
        <div className="scroll-top" style={scrollTopStyle}>
          <a
            href="https://t.me/Empirepharmacyy"
            aria-label="Go to Telegram"
            target="_blank"
            rel="noreferrer"
            className="telegram-icon-floating" // Added floating animation class
          >
            <TelegramIconMui fontSize="large" style={{ color: "#0088cc" }} />
          </a>
        </div>
      )
    );
  };

export default TelegramIcon;
