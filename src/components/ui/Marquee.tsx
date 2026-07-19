import { cn } from '@/lib/utils/cn';

interface MarqueeProps {
  items: string[];
  dark?: boolean;
  slow?: boolean;
  className?: string;
}

export function Marquee({ items, dark = false, slow = false, className }: MarqueeProps) {
  const loop = [...items, ...items];
  return (
    <div
      className={cn(
        'overflow-hidden border-y py-4',
        dark ? 'hairline-dark bg-ink text-paper' : 'hairline bg-paper text-ink',
        className,
      )}
    >
      <div className={cn('flex w-max items-center whitespace-nowrap', slow ? 'marquee-track-slow' : 'marquee-track')}>
        {loop.map((item, i) => (
          <span key={i} className="flex items-center font-display text-sm font-semibold uppercase tracking-[0.2em] sm:text-base">
            {item}
            <span className="mx-6 opacity-30 sm:mx-8">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
