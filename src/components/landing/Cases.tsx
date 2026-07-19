'use client';

import { motion } from 'framer-motion';

const CASES = [
  {
    n: '01',
    tag: 'the interview',
    title: 'Talk. Not type.',
    body: 'No forms, no dropdowns. The AI asks about your humor, your Tuesdays, your last trip — and actually listens to the answer.',
  },
  {
    n: '02',
    tag: 'the scoring',
    title: 'It knows what it doesn’t know.',
    body: 'Every reply nudges a confidence score across six traits. It only asks about what’s still fuzzy — never repeats itself.',
  },
  {
    n: '03',
    tag: 'the matching',
    title: 'Prompts that actually fit.',
    body: 'Once your profile is confident, the engine picks three Hinge prompts built for who you actually are, not who converts best.',
  },
  {
    n: '04',
    tag: 'the profile',
    title: 'It writes itself.',
    body: 'Bio, tagline, prompt answers, photo suggestions — generated from a real conversation, not a template.',
  },
];

export function Cases() {
  return (
    <section id="how-it-works" className="relative overflow-hidden px-6 py-28 sm:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-[#C6FF4D] px-3.5 py-1 font-display text-xs font-bold uppercase tracking-widest text-ink shadow-brutal-sm">
              <span className="h-2 w-2 rounded-full bg-ink" />
              4-Step Profile Engine
            </div>
            <h2 className="font-display text-4xl font-black uppercase tracking-tight sm:text-6xl">
              <span>Four steps.</span>{' '}
              <span className="inline-block -rotate-1 rounded-2xl border-4 border-ink bg-[#C6FF4D] px-4 py-1 text-ink shadow-[6px_6px_0px_#0c0b09]">
                Zero forms.
              </span>
            </h2>
          </div>
          <p className="max-w-sm font-sans text-base font-medium text-ink/75 sm:text-lg">
            Walk through the live conversation pipeline, going from first chat to a top-1% finished profile.
          </p>
        </div>

        {/* 4-Column Neo-Brutalist Card Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CASES.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.12, type: 'spring', stiffness: 90 }}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? -1 : 1 }}
              className="group relative flex flex-col justify-between rounded-[2rem] border-4 border-ink bg-surface p-7 text-ink shadow-[8px_8px_0px_#0c0b09] transition-all duration-300 hover:shadow-[12px_12px_0px_#C6FF4D]"
            >
              <div>
                {/* Card Header: Big Number & Tag */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-6xl font-black tracking-tighter text-ink/20 transition-all duration-300 group-hover:scale-110 group-hover:text-[#C6FF4D]">
                    {c.n}
                  </span>
                  <span className="rounded-full border-2 border-ink bg-[#C6FF4D] px-3 py-1 font-display text-[10px] font-extrabold uppercase tracking-widest text-ink shadow-[2px_2px_0px_#0c0b09]">
                    {c.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-8 font-display text-2xl font-black uppercase leading-tight sm:text-3xl">
                  {c.title}
                </h3>

                {/* Body Text */}
                <p className="mt-4 font-sans text-sm font-medium leading-relaxed text-ink/80">
                  {c.body}
                </p>
              </div>

              {/* Custom Micro-interactive Pill inside each card */}
              {i === 0 && (
                <div className="mt-8 flex items-center gap-2 rounded-xl border-2 border-ink bg-[#C6FF4D] px-3.5 py-2.5 font-display text-xs font-bold text-ink shadow-[3px_3px_0px_#0c0b09]">
                  <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-ink" />
                  <span>&quot;So about those Tuesdays...&quot;</span>
                </div>
              )}
              {i === 1 && (
                <div className="mt-8 flex items-center justify-between rounded-xl border-2 border-ink bg-paper px-3.5 py-2.5 font-display text-xs font-bold text-ink shadow-[3px_3px_0px_#0c0b09]">
                  <span>Humor Confidence</span>
                  <span className="rounded-md border border-ink bg-[#C6FF4D] px-2 py-0.5 font-black text-ink">
                    91%
                  </span>
                </div>
              )}
              {i === 2 && (
                <div className="mt-8 flex items-center gap-2 rounded-xl border-2 border-ink bg-[#C6FF4D] px-3.5 py-2.5 font-display text-xs font-bold text-ink shadow-[3px_3px_0px_#0c0b09]">
                  <span className="text-base">★</span>
                  <span>&quot;Together we could...&quot;</span>
                </div>
              )}
              {i === 3 && (
                <div className="mt-8 flex items-center justify-center gap-2 rounded-xl border-2 border-ink bg-ink px-3.5 py-2.5 font-display text-xs font-black uppercase text-[#C6FF4D] shadow-[3px_3px_0px_#0c0b09]">
                  <span>✓ Profile 100% Ready</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
