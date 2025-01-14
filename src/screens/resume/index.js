import React, { useEffect } from "react";

import PdfViewer from "../../components/pdfViewer";
import pdfFile from "../../assets/pdf/resume_2501.pdf";

const Resume = (props) => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return <PdfViewer path={pdfFile} />;
};

export default Resume;
