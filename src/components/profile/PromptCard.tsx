'use client';

import CopyButton from './CopyButton';

interface PromptCardProps {
  prompt: string;
  answer: string;
  category: string;
}

export default function PromptCard({ prompt, answer, category }: PromptCardProps) {
  return (
    <div className="p-6 bg-surface transition-colors hover:bg-paper/50">
      <div className="flex items-start justify-between gap-4 mb-3">
        <p className="font-display text-xs font-black uppercase tracking-wider text-ink leading-tight">
          {prompt}
        </p>
        <span className="rounded-lg border-2 border-ink bg-[#C6FF4D] px-2 py-0.5 font-display text-[9px] font-black uppercase text-ink shadow-[2px_2px_0px_#0c0b09]">
          {category}
        </span>
      </div>
      <p className="font-sans text-base sm:text-lg font-bold leading-snug text-ink tracking-tight">
        {answer}
      </p>
      <div className="mt-4 flex justify-end">
        <CopyButton text={answer} />
      </div>
    </div>
  );
}