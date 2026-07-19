'use client';

export function Manifesto() {
  return (
    <section className="relative overflow-hidden border-y-4 border-ink bg-ink px-6 py-32 text-paper sm:px-10 lg:py-40">
      <div className="grain absolute inset-0" />

      {/* Faint watermark background */}
      <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[14vw] font-black uppercase leading-none text-[#C6FF4D]/[0.05] sm:text-[11vw]">
        What do we do?
      </span>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Subtitle tag */}
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-[#C6FF4D] px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-ink shadow-[4px_4px_0px_#f3eee2]">
          <span className="h-2 w-2 rounded-full bg-ink" />
          What do we do?
        </div>

        {/* Heading */}
        <h2 className="mt-10 flex flex-col items-center gap-4 font-display text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="text-paper">No Forms.</span>
          <span className="text-paper">No Templates.</span>
          <span className="mt-2 inline-block -rotate-1 rounded-2xl border-4 border-ink bg-[#C6FF4D] px-6 py-3 text-ink shadow-[8px_8px_0px_#f3eee2] transition-transform duration-300 hover:rotate-0 hover:scale-105">
            Just Conversations.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="mx-auto mt-12 max-w-2xl font-sans text-lg font-medium leading-relaxed text-paper/80 sm:text-xl">
          A good profile doesn&apos;t come from a checklist. It comes from a real conversation that notices what
          makes you, then gets out of the way and lets that come through.
        </p>
      </div>
    </section>
  );
}
