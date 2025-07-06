import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          paddingLeft: "20px",
          paddingTop: "20px",
          backgroundColor: "transparent",
          boxShadow: "none",
          zIndex: 1,
        }}
      >
        <a href="/">
          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src="/HoopVisionFullLogo.png"
              alt="HoopVision Logo"
              style={{ height: "140px", objectFit: "contain" }}
            />
          </div>
        </a>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          minWidth: "100%",
          minHeight: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src="/CurryThree.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "100%",
          padding: "0 2rem",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "3.5rem",
              marginBottom: "1rem",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            HoopVision: Basketball Computer Vision
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "1000px",
              margin: "0 auto",
              color: "#fff",
            }}
          >
            HoopVision is a machine learning project that uses computer vision
            to track players, the basketball, and the basket in real game
            footage. Since existing datasets were too small, I manually labeled
            over 4,400 basketball images to train a YOLOv8 object detection
            model. This allows the system to identify and locate each object in
            a frame. The long-term goal is to automate stat tracking like
            points, assists, and rebounds, with future extensions into action
            recognition and jersey number detection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;