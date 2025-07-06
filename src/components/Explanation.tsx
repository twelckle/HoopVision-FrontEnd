import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Explanation: React.FC = () => {
  const fadeRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: fadeRef,
    offset: ["start start", "end start"],
  });
  const backgroundColor = useTransform(scrollYProgress, [0, 1], ["#ffffff", "#000000"]);

  return (
    <motion.div
      ref={fadeRef}
      style={{
        backgroundColor,
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem 2rem",
        gap: "7rem",
      }}
    >
      {/* Section 1 */}
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "2rem", flexWrap: "wrap", maxWidth: "1200px" }}>
        <div style={{ width: "672px", height: "378px" }}>
          <iframe
            src="https://www.youtube.com/embed/0NoCDjfrcEU"
            title="Labeled Photos Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "10px"
            }}
          ></iframe>
        </div>
        <div style={{ flex: "1 1 400px" }}>
          <h3 style={{ fontSize: "2rem", fontWeight: "bold", color: "#000", marginBottom: "1rem" }}>
            Labeling Data
          </h3>
          <p style={{ fontSize: "1.4rem", color: "#333" }}>
            This video shows a preview of the custom-labeled dataset used to train the HoopVision model. Each frame contains bounding boxes identifying the basketball, players, and the basket, <strong>labeled manually</strong> across 4,400 images.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div style={{ display: "flex", flexDirection: "row-reverse", alignItems: "center", gap: "2rem", flexWrap: "wrap", maxWidth: "1200px" }}>
        <div style={{ width: "672px", height: "378px" }}>
          <iframe
            src="https://www.youtube.com/embed/eoz4K-mz-Gw"
            title="Best Model Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "10px"
            }}
          ></iframe>
        </div>
        <div style={{ flex: "1 1 400px" }}>
          <h3 style={{ fontSize: "2rem", fontWeight: "bold", color: "#000", marginBottom: "1rem" }}>
            Model Performance
          </h3>
          <p style={{ fontSize: "1.4rem", color: "#333" }}>
            This clip demonstrates the final model performing inference on unseen game footage. You can see how accurately the YOLOv8 model detects key basketball objects in real time, laying the foundation for automatic stat tracking.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Explanation;