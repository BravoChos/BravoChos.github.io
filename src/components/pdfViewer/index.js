import React from "react";

const PdfViewer = ({ path }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      {/* Centered container for PDF */}
      <div className="relative w-full h-0" style={{ paddingBottom: "141%" }}>
        <iframe
          src={path}
          className="absolute top-0 left-0 w-full h-full"
          title="Resume Viewer"
          //   frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default PdfViewer;
