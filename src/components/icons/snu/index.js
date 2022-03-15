import React from "react";
import SNUS from "../../../assets/img/snu.svg";

export const SNU = ({ width, height }) => (
  <img src={SNUS} alt="React Logo" width={width} height={height} />
);
SNU.defaultProps = {
  width: 45,
  height: 45,
};
