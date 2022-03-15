import React from "react";
import Pcc from "../../../assets/img/pcc.jpg";

export const PCC = ({ width, height }) => (
  <img src={Pcc} alt="React Logo" width={width} height={height} />
);
PCC.defaultProps = {
  width: 45,
  height: 45,
};
