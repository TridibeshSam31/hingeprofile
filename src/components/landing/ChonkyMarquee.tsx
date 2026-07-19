'use client';

export function ChonkyMarquee() {
  const items = [
    'HUMOR',
    'VALUES',
    'COMMUNICATION',
    'TRAVEL',
    'LIFESTYLE',
    'GREEN FLAGS',
    'PASSIONS',
    'PERSONALITY',
    'CONFIDENCE',
    'RELATIONSHIPS',
  ];
  const loop = [...items, ...items];

  return (
    <section className="px-3 py-6 sm:px-6 lg:py-10">
      <div className="relative overflow-hidden rounded-3xl border-4 border-ink bg-ink py-8 shadow-[8px_8px_0px_#C6FF4D] sm:rounded-[2.5rem] sm:py-12 lg:py-14">
        {/* Inner lime trim for architectural/brutalist depth like the screenshot */}
        <div className="pointer-events-none absolute inset-3 rounded-2xl border border-[#C6FF4D]/25 sm:inset-4 sm:rounded-3xl" />

        <div className="flex w-max items-center whitespace-nowrap [animation:marquee-scroll_35s_linear_infinite]">
          {loop.map((item, i) => (
            <span
              key={i}
              className="flex items-center font-display text-5xl font-black uppercase tracking-tight text-[#C6FF4D] sm:text-7xl md:text-8xl lg:text-[6.5rem]"
            >
              <span>{item}</span>
              <span className="mx-6 text-3xl font-extrabold text-paper/50 sm:mx-10 sm:text-5xl lg:mx-14">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
