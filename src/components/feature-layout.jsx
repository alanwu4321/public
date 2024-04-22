"use client";
import { cn } from "../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconBrandPython,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconMathFunction,
  IconRobot,
  IconRobotFace,
  IconNews,
} from "@tabler/icons-react";

import { motion } from "framer-motion";
import Tradingview from "../../static/img/Tradingview.svg";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          link={item.link}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-solid border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-[#18181c]"></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-solid  border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-[#18181c]"
      >
        <div className="h-5 w-5 rounded-full bg-gradient-to-l from-[#498bbe] to-[#ffe76d] flex-shrink-0" />
        <div className="w-full bg-gray-100 h-5 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-solid border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-[#18181c]"
      >
        <div className="w-full bg-gray-100 h-5 rounded-full dark:bg-neutral-900" />
        <div className="h-5 w-5 rounded-full bg-gradient-to-r from-[#498bbe] to-[#ffe76d]  flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-solid border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-[#18181c]"
      >
        <div className="h-5 w-5 rounded-full bg-gradient-to-r from-[#498bbe] to-[#ffe76d]  flex-shrink-0" />
        <div className="w-full bg-gray-100 h-5 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(5).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-solid border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-[#18181c] w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-[#18181c] dark:border-white/[0.1] border border-solid border-neutral-200 flex flex-col items-center justify-center"
      >
        {/* <img
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        /> */}
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          SMA + DMI
        </p>
        <p className="border border-solid border-yello-500 bg-red-100 dark:bg-red-900/20 text-yellow-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Trend Following
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-[#18181c] dark:border-white/[0.1] border border-solid border-neutral-200 flex flex-col items-center justify-center">
        {/* <img
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        /> */}
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          RSI + Bolinger Band
        </p>
        <p className="border border-solid border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Mean Reversion
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-[#18181c] dark:border-white/[0.1] border border-solid border-neutral-200 flex flex-col items-center justify-center"
      >
        {/* <img
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        /> */}
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Funding Rate + Long/Short
        </p>
        <p className="border border-solid border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Abritrage
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-solid border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-[#18181c]"
      >
        <img
          src="/img/avatar/alan.png"
          alt="avatar"
          height="70"
          width="70"
          className="rounded-full h-7 w-7"
        />
        <p className="text-xs text-neutral-500">
          What strategies are good for volatile and consolidating markets?
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-solid border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-[#18181c]"
      >
        <p className="text-xs text-neutral-500">Grid Bots.</p>
        <img
          src="/img/avatar/ca-logo.png"
          alt="avatar"
          height="70"
          width="70"
          className="rounded-full h-7 w-7"
        />
        {/* <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" /> */}
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Python Doc",
    link: "/docs/developer/get-started/python/hello-world",
    description: (
      <span className="text-sm">
        Your favorite libraries in <code>Python</code> i.e <code>TA-Lib</code>{" "}
        and ML models.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: (
      <IconBrandPython className="h-8 w-8 stroke-1 relative top-4 stroke-white" />
    ),
  },
  {
    title: "TradingView Doc",
    link: "/docs/category/tradingview-strategy",
    description: (
      <span className="text-sm">
        TradingView strategy and indicator automation.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <Tradingview className="tabler-icon h-10 w-10 relative top-4 " />,
  },
  {
    title: "Bot Trading Tutorial",
    link: "/docs/category/get-started",
    description: (
      <span className="text-sm">
        Everything you need to know to setup and launch trading bots.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: (
      <IconRobotFace className="h-8 w-8 stroke-1 relative top-2 stroke-white" />
    ),
  },
  {
    title: "Technical Indicator Blog",
    link: "/docs/developer/techincal-indicator/",
    description: (
      <span className="text-sm">
        Elevate your strategies with technical indicators
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconMathFunction className="h-7 w-7 stroke-2 stroke-white" />,
  },

  {
    title: "Crypto News",
    link: "/blog/btc",
    description: (
      <span className="text-sm">
        Summarize your lengthy documents with AI technology.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconNews className="h-8 w-8 stroke-1 stroke-white" />,
  },
];
