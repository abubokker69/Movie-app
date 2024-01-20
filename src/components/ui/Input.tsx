import { FC, ReactNode } from "react";
import { cn } from "../../utilis/cn";

interface Input {
  className?: string;
  inputClass?: string;
  btnClass?: string;
  icon?: ReactNode | string;
  placeholder?: string;
  type?: any;
}

const Input: FC<Input> = ({
  className,
  icon,
  placeholder,
  btnClass,
  inputClass,
  type,
}) => {
  return (
    <form className={cn("flex items-center w-full relative", className || "")}>
      <input
        className={cn(
          "border px-4 py-2 rounded-md w-full outline-none focus:ring-1 hover:ring-1 duration-200 text-sm font-medium leading-7",
          inputClass || ""
        )}
        type={type}
        name=""
        id=""
        placeholder={placeholder}
        required
      />
      <button
        className={cn("absolute right-4 text-gray-500", btnClass || "")}
        type="submit"
      >
        {icon}
      </button>
    </form>
  );
};

export default Input;
