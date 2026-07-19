'use client';

import { motion } from 'framer-motion';

const SERVICES = [
  {
    n: '01',
    tag: 'Core Engine',
    stat: '100% Natural Dialog',
    title: 'Conversational AI Interviewer',
    body: 'Powered by streaming Vercel AI SDK. Conducts a natural onboarding interview that learns your humor, lifestyle, and voice before writing a single word.',
  },
  {
    n: '02',
    tag: 'Smart Logic',
    stat: 'Zero Redundancy',
    title: 'Dynamic Question Engine',
    body: 'Tracks what it already knows across six core personality traits. Skips redundant questions and only asks about what is still fuzzy.',
  },
  {
    n: '03',
    tag: 'Scoring System',
    stat: '92% Confidence Target',
    title: 'Live Personality Confidence System',
    body: 'Each trait gets a real-time confidence score. The interview automatically ends right when thresholds are met — not a single question sooner.',
  },
  {
    n: '04',
    tag: 'Data Extraction',
    stat: 'Typed Profile Model',
    title: 'Structured Personality Extraction',
    body: 'Converts open-ended conversation into a typed multi-dimensional JSON model capturing your exact communication quirks and relationship goals.',
  },
  {
    n: '05',
    tag: 'Matching Engine',
    stat: '3 Best-Fit Prompts',
    title: 'Metadata-Tagged Prompt Matcher',
    body: 'Analyzes hundreds of Hinge prompts tagged by the personality traits they require to land well, selecting the top three prompts that fit who you actually are.',
  },
  {
    n: '06',
    tag: 'Generative AI',
    stat: '0 Templates Used',
    title: 'Authentic Bio & Photo Engine',
    body: 'Writes prompt answers and bio grounded in your real conversation data, while recommending exact photo compositions (gym shots, travel, pets) based on your lifestyle.',
  },
  {
    n: '07',
    tag: 'Profile Composer',
    stat: 'Modular Regenerate',
    title: 'Live Hinge Card Preview & One-Tap Fix',
    body: 'See your finished profile exactly how a match sees it. Don’t love a specific line? Regenerate just that answer instantly without redoing the entire profile.',
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden px-6 py-28 sm:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-[#C6FF4D] px-3.5 py-1 font-display text-xs font-bold uppercase tracking-widest text-ink shadow-brutal-sm">
              <span className="h-2 w-2 rounded-full bg-ink" />
              Under the Hood • Architecture
            </div>
            <h2 className="font-display text-4xl font-black uppercase tracking-tight sm:text-6xl">
              <span>Built to feel</span>{' '}
              <span className="inline-block -rotate-1 rounded-2xl border-4 border-ink bg-[#C6FF4D] px-4 py-1 text-ink shadow-[6px_6px_0px_#0c0b09]">
                Human.
              </span>
            </h2>
          </div>
          <p className="max-w-md font-sans text-base font-medium text-ink/75 sm:text-lg">
            A 7-step conversational AI pipeline that models your authentic personality in a scattered, dynamic workflow.
          </p>
        </div>

        {/* Scattered 3-Row Bento Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const isWide = i === 0 || i === 3; // Cards 01 & 04 span 2 columns on desktop
            const tiltClass =
              i === 0
                ? '-rotate-1 sm:col-span-2 lg:col-span-2'
                : i === 1
                  ? 'rotate-1 sm:col-span-1 lg:col-span-1'
                  : i === 2
                    ? 'rotate-0.5 sm:col-span-1 lg:col-span-1'
                    : i === 3
                      ? '-rotate-0.5 sm:col-span-2 lg:col-span-2'
                      : i === 4
                        ? '-rotate-1 sm:col-span-1 lg:col-span-1'
                        : i === 5
                          ? 'rotate-1 sm:col-span-1 lg:col-span-1'
                          : '-rotate-0.5 sm:col-span-2 lg:col-span-1';

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, type: 'spring', stiffness: 90 }}
                whileHover={{ y: -8, rotate: 0, scale: 1.02 }}
                className={`group relative flex flex-col justify-between rounded-[2.2rem] border-4 border-ink bg-surface p-7 text-ink shadow-[8px_8px_0px_#0c0b09] transition-all duration-300 hover:shadow-[12px_12px_0px_#C6FF4D] ${tiltClass}`}
              >
                {/* Card Header: Number + Category Tag + Metric (if wide) */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-4xl font-black text-ink/20 transition-colors duration-300 group-hover:text-[#C6FF4D] sm:text-5xl">
                      {s.n}
                    </span>
                    <span className="rounded-full border-2 border-ink bg-[#C6FF4D] px-3 py-1 font-display text-[10px] font-extrabold uppercase tracking-widest text-ink shadow-[2px_2px_0px_#0c0b09]">
                      {s.tag}
                    </span>
                  </div>

                  {isWide && (
                    <div className="inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-paper px-3.5 py-1.5 font-display text-xs font-black uppercase text-ink shadow-[3px_3px_0px_#0c0b09] transition-colors duration-300 group-hover:bg-[#C6FF4D]">
                      <span className="h-2 w-2 rounded-full bg-ink" />
                      {s.stat}
                    </div>
                  )}
                </div>

                {/* Card Body: Title & Copy */}
                <div className="mt-6 flex-1">
                  <h3
                    className={`font-display font-black uppercase leading-tight transition-transform duration-300 group-hover:translate-x-1 ${
                      isWide ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm font-medium leading-relaxed text-ink/75 sm:text-base">
                    {s.body}
                  </p>
                </div>

                {/* Card Footer: Metric Badge for non-wide cards */}
                {!isWide && (
                  <div className="mt-6 pt-2">
                    <div className="inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-paper px-3.5 py-1.5 font-display text-xs font-black uppercase text-ink shadow-[3px_3px_0px_#0c0b09] transition-colors duration-300 group-hover:bg-[#C6FF4D]">
                      <span className="h-2 w-2 rounded-full bg-ink" />
                      {s.stat}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
