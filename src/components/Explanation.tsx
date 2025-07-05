import React from "react";
import { motion } from "framer-motion";

const Explanation: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100vh" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div style={{ maxWidth: "800px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#000" }}>
          How HoopVision Works
        </h2>
        <p style={{ fontSize: "1.2rem", color: "#333" }}>
          Using a custom-labeled dataset of over 4,400 basketball images,
          HoopVision fine-tunes a YOLOv8 model to detect players, the ball, and
          the basket in real-time footage. This object detection framework is
          the foundation for future features like automated stat tracking and
          action recognition.
        </p>
      </div>
    </motion.div>
  );
};

export default Explanation;