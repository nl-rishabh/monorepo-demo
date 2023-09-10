import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  return (
    <button
      style={{ border: "1px solid red", backgroundColor: "red" }}
      {...props}
    >
      Button
    </button>
  );
};

export { Button };
