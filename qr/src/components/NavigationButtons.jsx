import { motion as Motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaGlobe,
  FaChevronRight,
  FaStar,
  FaLightbulb,
  FaMoon,
  FaEnvelope,
  FaFacebookMessenger
} from "react-icons/fa";

const NavigationButtons = () => {
  const floatingIcons = [
    {
      icon: <FaStar size={30} color="#FFD700" />,
      initial: { x: -200, y: -100, rotate: -15 },
      animate: { x: [0, 250, -150, 0], y: [0, 180, -120, 0], rotate: [-15, 15, -15] },
      transition: { duration: 25, repeat: Infinity, ease: "linear" },
      zIndex: 0,
    },
    {
      icon: <FaLightbulb size={40} color="#f39c12" />,
      initial: { x: 200, y: -180, rotate: 20 },
      animate: { x: [0, -250, 200, 0], y: [0, 150, -100, 0], rotate: [20, -20, 20] },
      transition: { duration: 30, repeat: Infinity, ease: "linear" },
      zIndex: 2,
    },
    {
      icon: <FaMoon size={35} color="#bdc3c7" />,
      initial: { x: -180, y: 200, rotate: -10 },
      animate: { x: [0, 150, -180, 0], y: [0, -120, 150, 0], rotate: [-10, 10, -10] },
      transition: { duration: 28, repeat: Infinity, ease: "linear" },
      zIndex: 1,
    },
    {
      icon: <FaStar size={25} color="#f1c40f" />,
      initial: { x: 180, y: 220, rotate: 0 },
      animate: { x: [0, -160, 140, 0], y: [0, -100, 100, 0], rotate: [0, 10, 0] },
      transition: { duration: 22, repeat: Infinity, ease: "linear" },
      zIndex: 0,
    },
    {
      icon: <FaLightbulb size={35} color="#f4d03f" />,
      initial: { x: -250, y: 100, rotate: 12 },
      animate: { x: [0, 200, -180, 0], y: [0, 100, -120, 0], rotate: [12, -12, 12] },
      transition: { duration: 33, repeat: Infinity, ease: "linear" },
      zIndex: 2,
    },
    {
      icon: <FaMoon size={30} color="#ecf0f1" />,
      initial: { x: 220, y: -100, rotate: 8 },
      animate: { x: [0, -180, 160, 0], y: [0, 120, -100, 0], rotate: [8, -8, 8] },
      transition: { duration: 26, repeat: Infinity, ease: "linear" },
      zIndex: 1,
    },
    {
      icon: <FaStar size={20} color="#FFD700" />,
      initial: { x: -100, y: -180, rotate: 5 },
      animate: { x: [0, 180, -90, 0], y: [0, 100, -110, 0], rotate: [5, -5, 5] },
      transition: { duration: 21, repeat: Infinity, ease: "linear" },
      zIndex: 0,
    },
    {
      icon: <FaLightbulb size={28} color="#f1c40f" />,
      initial: { x: 100, y: 180, rotate: -8 },
      animate: { x: [0, -150, 100, 0], y: [0, -80, 110, 0], rotate: [-8, 8, -8] },
      transition: { duration: 27, repeat: Infinity, ease: "linear" },
      zIndex: 1,
    },
    {
      icon: <FaMoon size={24} color="#BDC3C7" />,
      initial: { x: -180, y: -220, rotate: 3 },
      animate: { x: [0, 160, -100, 0], y: [0, 140, -120, 0], rotate: [3, -3, 3] },
      transition: { duration: 24, repeat: Infinity, ease: "linear" },
      zIndex: 2,
    },
    {
      icon: <FaStar size={32} color="#f9ca24" />,
      initial: { x: 200, y: 220, rotate: -5 },
      animate: { x: [0, -120, 90, 0], y: [0, 90, -90, 0], rotate: [-5, 5, -5] },
      transition: { duration: 29, repeat: Infinity, ease: "linear" },
      zIndex: 0,
    },
    {
      icon: <FaLightbulb size={20} color="#ffeaa7" />,
      initial: { x: 0, y: -220, rotate: 15 },
      animate: { x: [0, 120, -140, 0], y: [0, 90, -110, 0], rotate: [15, -15, 15] },
      transition: { duration: 34, repeat: Infinity, ease: "linear" },
      zIndex: 2,
    },
    {
      icon: <FaMoon size={26} color="#dfe6e9" />,
      initial: { x: 150, y: 250, rotate: -12 },
      animate: { x: [0, -160, 120, 0], y: [0, -100, 100, 0], rotate: [-12, 12, -12] },
      transition: { duration: 32, repeat: Infinity, ease: "linear" },
      zIndex: 1,
    },
    {
      icon: <FaStar size={36} color="#fbc531" />,
      initial: { x: -260, y: 50, rotate: 10 },
      animate: { x: [0, 190, -130, 0], y: [0, 130, -100, 0], rotate: [10, -10, 10] },
      transition: { duration: 26, repeat: Infinity, ease: "linear" },
      zIndex: 0,
    },
    {
      icon: <FaLightbulb size={42} color="#ffeaa7" />,
      initial: { x: 180, y: 150, rotate: 7 },
      animate: { x: [0, -200, 150, 0], y: [0, 110, -90, 0], rotate: [7, -7, 7] },
      transition: { duration: 36, repeat: Infinity, ease: "linear" },
      zIndex: 2,
    },
    {
      icon: <FaMoon size={20} color="#dcdde1" />,
      initial: { x: -120, y: -250, rotate: -4 },
      animate: { x: [0, 100, -100, 0], y: [0, 100, -100, 0], rotate: [-4, 4, -4] },
      transition: { duration: 31, repeat: Infinity, ease: "linear" },
      zIndex: 1,
    },
    {
      icon: <FaStar size={18} color="#f6e58d" />,
      initial: { x: 90, y: -100, rotate: 0 },
      animate: { x: [0, 100, -120, 0], y: [0, 80, -90, 0], rotate: [0, 5, 0] },
      transition: { duration: 23, repeat: Infinity, ease: "linear" },
      zIndex: 0,
    },
    {
      icon: <FaLightbulb size={26} color="#fab1a0" />,
      initial: { x: -90, y: 100, rotate: 10 },
      animate: { x: [0, 120, -100, 0], y: [0, -90, 90, 0], rotate: [10, -10, 10] },
      transition: { duration: 27, repeat: Infinity, ease: "linear" },
      zIndex: 1,
    },
    {
      icon: <FaMoon size={38} color="#b2bec3" />,
      initial: { x: 100, y: -160, rotate: -6 },
      animate: { x: [0, -150, 130, 0], y: [0, 120, -90, 0], rotate: [-6, 6, -6] },
      transition: { duration: 35, repeat: Infinity, ease: "linear" },
      zIndex: 2,
    },
    {
      icon: <FaStar size={28} color="#ffeaa7" />,
      initial: { x: -200, y: 200, rotate: 3 },
      animate: { x: [0, 130, -130, 0], y: [0, -100, 100, 0], rotate: [3, -3, 3] },
      transition: { duration: 28, repeat: Infinity, ease: "linear" },
      zIndex: 1,
    },
    {
      icon: <FaLightbulb size={24} color="#fdcb6e" />,
      initial: { x: 250, y: -220, rotate: 5 },
      animate: { x: [0, -100, 100, 0], y: [0, 90, -90, 0], rotate: [5, -5, 5] },
      transition: { duration: 30, repeat: Infinity, ease: "linear" },
      zIndex: 0,
    },
  ];

  const buttons = [
    {
      icon: <FaGlobe size={20} color="#2c3e50" />,
      text: "Website",
      color: "#f8f9fa",
      hoverColor: "#e9ecef",
      link: "https://miraclelighting.lk",
      textColor: "#2c3e50",
    },
    {
      icon: <FaWhatsapp size={20} color="#25D366" />,
      text: "WhatsApp",
      color: "#e6f7ee",
      hoverColor: "#d0f0e0",
      link: "https://wa.me/+94781277601",
      textColor: "#128C7E",
    },
    {
      icon: <FaPhone size={20} color="#3498db" />,
      text: "Call Us",
      color: "#ebf5fb",
      hoverColor: "#d4e6f7",
      link: "tel:+94781277601",
      textColor: "#2980b9",
    },
    {
      icon: <FaFacebook size={20} color="#4267B2" />,
      text: "Facebook",
      color: "#e7f0ff",
      hoverColor: "#d0e0ff",
      link: "https://www.facebook.com/profile.php?id=100093008904723",
      textColor: "#2d4373",
    },
    {
      icon: <FaFacebookMessenger size={20} color="#0084FF" />,
      text: "Messenger",
      color: "#e6f0ff",
      hoverColor: "#d0e2ff",
      link: "https://m.me/113787751734562?source=qr_link_share",
      textColor: "#006AFF",
    },
    {
      icon: <FaInstagram size={20} color="#E1306C" />,
      text: "Instagram",
      color: "#fce8ef",
      hoverColor: "#f8d0de",
      link: "https://www.instagram.com/_miracle_lighting?utm_source=qr&igsh=amF0NGc3eGl5aWw1",
      textColor: "#C13584",
    },
    {
      icon: <FaYoutube size={20} color="#FF0000" />,
      text: "YouTube",
      color: "#ffebee",
      hoverColor: "#ffcdd2",
      link: "https://youtube.com/@miraclelighting-m5b?si=i_xGYe9ZblMet0jj",
      textColor: "#CC0000",
    },
    {
      icon: <FaTiktok size={20} color="#000000" />,
      text: "TikTok",
      color: "#f5f5f5",
      hoverColor: "#e0e0e0",
      link: "https://www.tiktok.com/@miracle_lighting?_t=ZS-8w6OT8FHphg&_r=1",
      textColor: "#333333",
    },
    {
      icon: <FaEnvelope size={20} color="#6c5ce7" />,
      text: "Email",
      color: "#f3f0ff",
      hoverColor: "#e0dbff",
      link: "mailto:miraclelighting9@gmail.com",
      textColor: "#6c5ce7",
    },
  ];

  return (
    <div
      style={{
        position: "center",
        padding: "1.5rem",
        background: "#000000",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      {/* Floating icons */}
      {floatingIcons.map((item, index) => (
        <Motion.div
          key={`floating-icon-${index}`}
          initial={item.initial}
          animate={item.animate}
          transition={item.transition}
          style={{
            position: "absolute",
            zIndex: item.zIndex,
            pointerEvents: "none",
          }}
        >
          {item.icon}
        </Motion.div>
      ))}

      <Motion.h2
        style={{
          textAlign: "center",
          color: "yellow",
          marginBottom: "1.5rem",
          fontSize: "2.5rem",
          fontWeight: "bold",
          position: "relative",
          zIndex: 1,
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Connect With Us
      </Motion.h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.8rem",
          marginTop: "1rem",
          position: "relative",
          zIndex: 1,
          width: "90%",
          maxWidth: "400px",
        }}
      >
        {buttons.map((button, index) => (
          <Motion.a
            key={index}
            href={button.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.02,
              backgroundColor: button.hoverColor,
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              x: 5,
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            style={{
              backgroundColor: button.color,
              color: button.textColor,
              padding: "0.8rem 1.2rem",
              borderRadius: "8px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontWeight: "500",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              minHeight: "50px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Motion.div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
              }}
              whileHover={{ gap: "1rem" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Motion.div
                animate={{
                  rotate: [0, 5, -3, 0],
                  scale: [1, 1.05, 1.03, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                {button.icon}
              </Motion.div>
              <span style={{ fontSize: "1rem", color: button.textColor }}>
                {button.text}
              </span>
            </Motion.div>

            <Motion.div
              initial={{ x: -5, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ x: 3 }}
            >
              <FaChevronRight color={button.textColor} />
            </Motion.div>

            <Motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, transparent, rgba(0,0,0,0.05), transparent)",
                transform: "translateX(-100%)",
              }}
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </Motion.a>
        ))}
      </div>
    </div>
  );
};

export default NavigationButtons;