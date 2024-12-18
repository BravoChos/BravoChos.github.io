import PdfViewer from "../../components/pdfViewer";
import pdfFile from "../../assets/pdf/resume_20241216.pdf";

const Resume = (props) => {
  return <PdfViewer path={pdfFile} />;
};

export default Resume;
