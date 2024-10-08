import { FC, ButtonHTMLAttributes } from "react";
import "./button.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

const Button: FC<ButtonProps> = ({ title, type = "button", ...props }) => {
  return (
    <button type={type} {...props} className="main-btn">
      {title}
    </button>
  );
};

export default Button;
