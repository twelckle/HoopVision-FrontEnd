import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ResourcesLinks: React.FC = () => {
  // Scroll in from bottom: y from 100% to 0%

  return (
    <motion.div
      key="resources"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "#f7f7f7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem 2rem",
        pointerEvents: "auto",
        zIndex: 2
      }}
    >
      <div style={{ maxWidth: "800px", textAlign: "center", pointerEvents: "auto" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "#000" }}>
          Resources
        </h2>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "1.4rem", color: "#333" }}>
          <li style={{ marginBottom: "1.5rem" }}>
            🔗 <a href="https://colab.research.google.com/drive/1kAEmkY9w33tgziS8Ktwqjx2Xm0bLj_2U?usp=sharing" target="_blank" rel="noopener noreferrer">Colab Notebook</a>
          </li>
          <li style={{ marginBottom: "1.5rem" }}>
            📁 <a href="https://drive.google.com/drive/folders/1QdLXIxVgI4HRfuI9IzGlD0pr2RGgPe9B?usp=drive_link" target="_blank" rel="noopener noreferrer">Dataset on Google Drive</a>
          </li>
          <li>
            🧠 <a href="https://drive.google.com/file/d/1-mDAT3MEKCAg9Q6ojFFqIpR1KapzSon3/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Best Performing Model</a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ResourcesLinks;