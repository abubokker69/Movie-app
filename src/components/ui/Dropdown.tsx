import { FC, ReactNode } from "react";
import { cn } from "../../utilis/cn";

interface Menu {
  icon?: ReactNode | string;
  text?: string;
  url?: string;
}

interface dropdown {
  className?: string;
  button?: string;
  list?: string;
  itemList?: string;
  menu?: Menu[];
  icon?: ReactNode | string;
  text?: string;
  url?: string;
}

const Dropdown: FC<dropdown> = ({
  className,
  icon,
  menu,
  text,
  button,
  itemList,
  list,
  url,
}) => {
  return (
    <div className={cn("dropdown inline-block relative", className || "")}>
      <button
        className={cn(
          " text-gray-700 font-semibold py-2 px-4 inline-flex items-center",
          button || ""
        )}
      >
        <a href={url} className="mr-1">
          {text}
        </a>
        <>{icon}</>
      </button>
      <ul
        className={cn(
          "dropdown-menu absolute hidden text-gray-700 pt-1",
          itemList || ""
        )}
      >
        {menu?.length &&
          menu.map((item, i) => (
            <li className="">
              <a
                className={cn(
                  " bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap",
                  list || ""
                )}
                href={item.url}
                key={i}
              >
                {item.icon}
                {item.text}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dropdown;
