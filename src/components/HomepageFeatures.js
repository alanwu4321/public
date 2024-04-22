import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import first from '/static/img/1-all-in-one.png';
import second from '/static/img/2-trading-libs.png';
import third from '/static/img/4-split-as-you-profit.png';
import forth from '/static/img/5-token-economy.png';
import sixth from '/static/img/3-competition-ranking.png';
import Image from '@theme/IdealImage';
import { Meteors } from './ui/meteor-card';

export function MeteorsDemo() {
  return (
    <div className="">
      <div className="w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Meteors because they&apos;re cool
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
          </p>

          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}

const FeatureList = [
  {
    title: 'All in one',
    img: first,
    description: (
      <>
        You focus on the trading logic, we handle everything technical including online IDE, backtesting database, exchange API, TradingView webhook, and a proprietary Strategy Bot Engine
      </>
    ),
  },
  {
    title: 'Trading Library',
    img: second,
    description: (
      <>
        TA-Lib for <code>JavaScript</code> and <code>Python</code>. Best of all, machine learning can help you cope with volatility with non-linear models.
      </>
    ),
  },
  {
    title: 'Competition Ranking',
    img: sixth,
    description: (
      <>
        Developers can compete with others in the battlefield. Traders can freely select the most effective bots with proven records through backtesting or simulation before live-trading
      </>
    ),
  },
];

function Feature({ img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Image img={img} className={styles.featureImage} alt={title}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={clsx(styles.features, "bg-[#18181c]")}>
      <div className="container">

        <div className="row flex justify-between overflow-hidden">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
            // <MeteorsDemo className={clsx('col col--4')}/>
          ))}
        </div>
      </div>
    </section>
  );
}
