export const Logo = ({ file, width = 100, height = 100 }) => {
  return <img src={file} alt="logo" style={{ width: width, height: height }} />;
};
