import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ResourcesLinks: React.FC = () => {
  const { scrollY } = useScroll();
  // Scroll in from bottom: y from 100% to 0%
  const y = useTransform(scrollY, [0, window.innerHeight * 1.5], ["100%", "0%"]);
  const opacity = useTransform(scrollY, () => 1);

  return (
    <motion.div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem 2rem",
        position: "relative",
        y,
        opacity,
        pointerEvents: "none",
        zIndex: 1
      }}
    >
      <div style={{ maxWidth: "800px", textAlign: "center", pointerEvents: "auto" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "#000" }}>
          Resources
        </h2>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "1.4rem", color: "#333" }}>
          <li style={{ marginBottom: "1.5rem" }}>
            🔗 <a href="https://colab.research.google.com/your-colab-link" target="_blank" rel="noopener noreferrer">Colab Notebook</a>
          </li>
          <li style={{ marginBottom: "1.5rem" }}>
            📁 <a href="https://drive.google.com/your-dataset-link" target="_blank" rel="noopener noreferrer">Dataset on Google Drive</a>
          </li>
          <li>
            🧠 <a href="https://drive.google.com/your-best-model-link" target="_blank" rel="noopener noreferrer">Best Performing Model</a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ResourcesLinks;