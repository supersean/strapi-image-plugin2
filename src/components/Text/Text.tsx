import React from "react";
import "./Text.css";
export interface TextProps {
  label: string;
}

const Text = (props: TextProps) => {
  return <p>{props.label}</p>;
};

export default Text;
