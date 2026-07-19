'use client';

import type { GeneratedHingeProfile } from '@/lib/types/profile';
import PromptCard from './PromptCard';
import CopyButton from './CopyButton';

interface HingeCardProps {
  profile: GeneratedHingeProfile;
}

export default function HingeCard({ profile }: HingeCardProps) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] sm:rounded-[2.2rem] border-3 sm:border-4 border-ink bg-surface shadow-[6px_6px_0px_#0c0b09] sm:shadow-[10px_10px_0px_#0c0b09] max-w-[420px] w-full animate-scale-in">
      {/* ── Bio Section ──────────────────────────────── */}
      <div className="p-6 sm:p-7 border-b-4 border-ink bg-[#C6FF4D]/15">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#C6FF4D] border-2 border-ink animate-pulse" />
            <h3 className="font-display text-xs font-black uppercase tracking-widest text-ink">
              Your Hinge Bio
            </h3>
          </div>
          <CopyButton text={profile.bio} />
        </div>
        <p className="font-sans text-lg sm:text-xl font-extrabold leading-snug text-ink tracking-tight">
          {profile.bio}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="rounded-md border-2 border-ink bg-ink px-2 py-0.5 font-display text-[9px] font-black uppercase tracking-wider text-[#C6FF4D]">
            {profile.style}
          </span>
          <span className="font-display text-[9px] font-bold text-ink/50">
            V{profile.version}
          </span>
        </div>
      </div>

      {/* ── Prompt Answers ────────────────────────────── */}
      <div className="divide-y-3 divide-ink">
        {profile.promptAnswers.map((pa, i) => (
          <PromptCard
            key={`${pa.promptId}-${i}`}
            prompt={pa.prompt}
            answer={pa.answer}
            category={pa.category}
          />
        ))}
      </div>
    </div>
  );
}