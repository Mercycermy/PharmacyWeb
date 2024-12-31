import React from "react";
import PhoneIconMui from "@mui/icons-material/Phone"; 
import TelegramIconMui from "@mui/icons-material/Telegram"; // Renamed import to avoid conflict
import "./ScrollToTop.css";

const TelegramIcon = () => {
  const TelegramStyle = {
    position: "fixed",
    bottom: "230px",
    right: "20px",
    zIndex: "1000",
    cursor: "pointer",
  };
  const PhoneStyle = {
    position: "fixed",
    bottom: "150px",
    right: "20px",
    zIndex: "1000",
    cursor: "pointer",
  };
  return (
    <div >
    <div className="scroll-top" style={TelegramStyle}>
      <a
        href="https://t.me/Empirepharmacyy"
        aria-label="Go to Telegram"
        target="_blank"
        rel="noreferrer"
        className="telegram-icon-container"
      >
        <div className="telegram-icon-circle">
          <TelegramIconMui fontSize="large" className="telegram-icon" />
        </div>
      </a>
    </div>
    {/* Phone Icon */}
    <div className="scroll-top phone-icon-container" style={PhoneStyle}>
        <a
          href="tel:+251908779999"
          aria-label="Call Phone"
        >
          <div className="telegram-icon-circle">
            <PhoneIconMui fontSize="large" className="telegram-icon" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default TelegramIcon;
