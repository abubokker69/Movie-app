import { FC } from "react";
import { cn } from "../../utilis/cn";

interface TextArea {
  className?: string;
  cols?: number;
  rows?: number;
  placeholder?: string;
}

const TextArea: FC<TextArea> = ({ className, cols, placeholder, rows }) => {
  return (
    <textarea
      className={cn(
        "border px-4 py-2 rounded-md w-full outline-none focus:ring-1 hover:ring-1 duration-200 text-sm font-medium leading-6 w-full",
        className || ""
      )}
      id=""
      cols={cols}
      rows={rows}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
