import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type Input = string | Record<string, boolean>;

export const cn = (...inputs: Input[]): string => {
  return twMerge(clsx(inputs));
};
