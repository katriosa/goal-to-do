import React from "react";

import "./Button.css";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
};

const Button = ({ type, children }: ButtonProps) => {
  return (
    <button type={type} className="button">
      {children}
    </button>
  );
};

export default Button;
