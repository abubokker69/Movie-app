import { FC } from "react";
import { cn } from "../../utilis/cn";

interface Button {
  className?: string;
  text?: string;
  type?: any;
}

const Button: FC<Button> = ({ className, text, type }) => {
  return (
    <button type={type} className={cn("", className || "")}>
      {text}
    </button>
  );
};

export default Button;
