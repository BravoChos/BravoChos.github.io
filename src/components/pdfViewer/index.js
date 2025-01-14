import React from "react";

const PdfViewer = ({ path }) => {
  return (
    <div className="border flex justify-center items-center bg-gray-100 min-h-screen">
      {/* Responsive container for PDF */}
      <div
        className="relative w-full max-w-screen-sm md:max-w-screen-lg border"
        style={{
          paddingTop: "141%", // Aspect ratio: height = width * 1.41 (A4 ratio)
        }}>
        {/* iFrame to display PDF */}
        <iframe src={path} className="absolute top-0 left-0 w-full h-full border bg-white" title="Resume Viewer"></iframe>
      </div>
    </div>
  );
};

export default PdfViewer;
