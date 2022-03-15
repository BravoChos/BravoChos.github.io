import React from "react";
import Ucla from "../../../assets/img/ucla.svg";

export const UCLA = ({ width, height }) => (
  <img src={Ucla} alt="React Logo" width={width} height={height} />
);

UCLA.defaultProps = {
  width: 45,
  height: 45,
};
