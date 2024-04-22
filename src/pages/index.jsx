import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
// import HomepageFeatures from "../components/HomepageFeatures";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { motion } from "framer-motion";
import { AuroraBackground } from "../components/ui/aurora-background";
// import { Meteors } from "../components/ui/meteor-card";
// import { Boxes } from "../components/ui/background-boxes";
import { BentoGridThirdDemo } from "../components/feature-layout";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container" style={{ zIndex: 2 }}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <img src={landing} /> */}
        <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0 mt-5 align-center ">
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/developer/get-started/python/hello-world"
            >
              I'm a Strategy Developer 👩🏻‍💻
            </Link>
          </div>
          <HoverBorderGradient>
            {" "}
            I'm a Strategy Developer 👩🏻‍💻{" "}
          </HoverBorderGradient>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/category/get-started"
            >
              I want to use Trading Bots 🤖
            </Link>
          </div>
        </div>
      </div>
      {/* <div className={styles.stripes}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
    </header>
  );
}

export function AuroraBackgroundDemo() {
  return (
    <div className="">
      {/* <Meteors number={5} /> */}
      <div>
        {/* <div className="absolute inset-0 w-full h-full bg-[#1c1c1d] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" /> */}
        {/* <div className=" w-full relative max-w-xs"> */}
        {/* <Boxes className="z-10"/> */}

        <AuroraBackground className="md:h-[75vh]">
          <div className="flex flex-col items-center justify-center">
            {/* <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      > */}
            <div className="flex flex-col gap-4 items-center justify-center px-4">
              <div className="text-6xl md:text-7xl font-bold dark:text-white text-center z-20">
                Automate your Crypto Trading
              </div>
              <div className="font-extralight md:text-4xl text-2xl dark:text-neutral-200 py-4 z-20 text-center">
                API docs, Tutorials, and Technical blogs
              </div>
              <div className="flex flex-col items-center md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0 mt-5 align-center z-20">
                <Link to="/docs/developer/get-started/python/hello-world">
                  <HoverBorderGradient className="text-lg cursor-pointer z-30">
                    I'm a Strategy Developer 👩🏻‍💻
                  </HoverBorderGradient>{" "}
                </Link>
                <Link to="/docs/category/get-started">
                  <HoverBorderGradient className="text-lg cursor-pointer z-30">
                    I want to use Trading Bots 🤖
                  </HoverBorderGradient>{" "}
                </Link>
              </div>
            </div>

            {/* <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 z-20">
          Debug now
        </button> */}
            {/* </motion.div> */}
          </div>
        </AuroraBackground>
        <div className="z-30 px-7 md:px-2 bg-[#18181c] pb-14">
          <BentoGridThirdDemo />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <AuroraBackgroundDemo />
    </Layout>
  );
}
