import PdfViewer from "../../components/pdfViewer";
import pdfFile from "../../assets/pdf/resume_2501.pdf";

const Resume = (props) => {
  return <PdfViewer path={pdfFile} />;
};

export default Resume;
