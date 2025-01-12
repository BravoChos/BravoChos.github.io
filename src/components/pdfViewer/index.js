import React, { useState, useEffect } from "react";

const PdfViewer = ({ path }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="responsive-iframe-container ">
      <iframe
        src={path}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${width}px`,
          height: "100vh",
          border: "none",
        }}
        title="PDF Viewer"
      />
    </div>
  );
};

export default PdfViewer;
