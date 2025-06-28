

const QR = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        margin: "2rem auto",
        padding: "1.5rem",
        backgroundColor: "#FFD700",
        borderRadius: "10px",
        maxWidth: "300px",
        border: "3px solid #1A1A1A"
      }}
    >
      <h3 style={{ color: "#1A1A1A", marginBottom: "1rem" }}>Scan to Contact Us</h3>
      <div style={{ 
        backgroundColor: "white", 
        padding: "1rem",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center"
      }}>
        {/* Replace with your actual QR code image */}
        <div style={{
          width: "150px",
          height: "150px",
          backgroundColor: "#eee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#666",
          border: "2px dashed #999"
        }}>
          [Your QR Code Here]
        </div>
      </div>
      <p style={{ 
        marginTop: "1rem", 
        color: "#1A1A1A",
        fontSize: "0.9rem"
      }}>
        Scan this QR code to save our contact or visit our website
      </p>
    </motion.div>
  );
};

export default QR;