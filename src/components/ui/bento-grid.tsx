import { IconArrowRight } from "@tabler/icons-react";
import { cn } from "../../utils/cn";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
}) => {
  return (
    <div
      className={cn(
        "cursor-pointer row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-[#18181c] dark:border-white/[0.2] bg-white border border-solid justify-between flex flex-col space-y-5",
        className
      )}
    >
      {header}
      <a
        href={link}
        target="_blank"
        className="group-hover/bento:translate-x-2 transition duration-200"
      >
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 flex justify-end mt-1 ">
          <button className="border px-4 py-1 rounded-md border-gray-500 text-gray-300">
            <div className="flex justify-center align-middle items-center gap-1">
              {/* @ts-ignore */}
              <div> Explore</div> <IconArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </a>
    </div>
  );
};
