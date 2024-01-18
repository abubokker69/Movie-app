import { FC, ReactNode } from "react";
import { cn } from "../../utilis/cn";

interface SearchInput {
  className?: string;
  inputClass?: string;
  btnClass?: string;
  icon?: ReactNode | string;
  text?: string;
}

const SearchInput: FC<SearchInput> = ({
  className,
  icon,
  text,
  btnClass,
  inputClass,
}) => {
  return (
    <form className={cn("flex items-center w-1/2 relative", className || "")}>
      <input
        className={cn(
          "border px-4 py-2 rounded-md w-full outline-none focus:ring-1 hover:ring-1 duration-200 text-sm font-medium leading-6",
          inputClass || ""
        )}
        type="text"
        name=""
        id=""
        placeholder={text}
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

export default SearchInput;
