'use client';

interface PhotoSlotProps {
  order: number;
  photoType: string;
  title: string;
  description: string;
  reason: string;
  caption: string;
  required: boolean;
}

const TYPE_EMOJI: Record<string, string> = {
  Portrait: '🤳',
  Travel: '✈️',
  Hobby: '🎨',
  Friends: '👯',
  Pet: '🐕',
  Food: '🍽️',
  Sports: '⚽',
  Lifestyle: '🏡',
  Nature: '🌿',
  Other: '📷',
};

export default function PhotoSlot({
  order,
  photoType,
  title,
  description,
  reason,
  caption,
  required,
}: PhotoSlotProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border-4 border-ink bg-surface p-6 shadow-[8px_8px_0px_#0c0b09] transition-all duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#C6FF4D] min-h-[310px]">
      {/* Number Badge */}
      <div className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-xl border-3 border-ink bg-[#C6FF4D] font-display text-sm font-black text-ink shadow-[3px_3px_0px_#0c0b09]">
        {order}
      </div>

      <div className="pt-4 space-y-3">
        <div className="flex items-center justify-end">
          <span className="text-2xl">{TYPE_EMOJI[photoType] || '📷'}</span>
        </div>

        <div className="space-y-1">
          <h4 className="font-display text-lg font-black uppercase tracking-tight text-ink leading-tight">
            {title}
          </h4>
          <span className="inline-block rounded-md border-2 border-ink bg-paper px-2 py-0.5 font-display text-[10px] font-black uppercase tracking-wider text-ink">
            {photoType}
          </span>
        </div>

        <p className="font-sans text-xs font-semibold text-ink/80 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t-2 border-ink/20 space-y-2.5">
        <p className="font-sans text-[11px] font-medium text-ink/75 leading-normal">
          <span className="font-display font-black text-ink uppercase">Why: </span>
          {reason}
        </p>
        {caption && (
          <div className="rounded-xl border-2 border-ink bg-[#C6FF4D]/25 p-2.5 font-sans text-xs font-bold text-ink leading-snug">
            💬 &ldquo;{caption}&rdquo;
          </div>
        )}
        {required && (
          <span className="inline-block rounded-md border border-ink bg-ink px-2 py-0.5 font-display text-[9px] font-black uppercase tracking-wider text-[#C6FF4D]">
            ★ Essential Shot
          </span>
        )}
      </div>
    </div>
  );
}