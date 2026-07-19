import Link from 'next/link';
import { ReactNode } from 'react';

export function AuthShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-paper px-4 py-12 sm:px-6">
      {/* Subtle dotted grid texture */}
      <div className="dotted-bg pointer-events-none absolute inset-0 opacity-50" />

      {/* Main Center Neo-Brutalist Container */}
      <div className="relative z-10 w-full max-w-[440px] mx-auto">
        {/* Top return home button */}
        <div className="mb-6 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 rounded-2xl border-3 border-ink bg-surface px-4 py-1.5 font-display text-xs font-black uppercase tracking-wider text-ink shadow-[4px_4px_0px_#0c0b09] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C6FF4D] hover:shadow-[6px_6px_0px_#0c0b09]"
          >
            <span className="rounded-md border border-ink bg-ink px-1.5 py-0.5 font-display text-[10px] text-[#C6FF4D]">HP.</span>
            <span>Back to home</span>
          </Link>
        </div>

        {/* Outer Frame */}
        <div className="relative">
          {/* Electric Lime offset backdrop box */}
          <div className="absolute -bottom-2.5 -right-2.5 inset-0 rounded-[2rem] border-4 border-ink bg-[#C6FF4D] pointer-events-none" />

          {/* Main Card */}
          <div className="relative z-10 overflow-hidden rounded-[2rem] border-4 border-ink bg-surface p-6 sm:p-8 shadow-[8px_8px_0px_#0c0b09]">
            {/* Header inside Card */}
            <div className="mb-6 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-[#C6FF4D] px-3.5 py-1 font-display text-[11px] font-black uppercase tracking-widest text-ink shadow-[2px_2px_0px_#0c0b09]">
                <span className="h-2 w-2 rounded-full bg-ink animate-pulse" />
                <span>{eyebrow}</span>
              </div>
              <h1 className="font-display text-2xl font-black uppercase tracking-tight text-ink sm:text-3xl leading-tight">
                {title}
              </h1>
              <p className="mx-auto mt-2 max-w-xs font-sans text-xs font-bold leading-relaxed text-ink/70 sm:text-sm">
                {subtitle}
              </p>

              {/* Dividing line */}
              <div className="mt-5 flex items-center justify-center gap-3">
                <div className="h-0.5 w-10 bg-ink/15" />
                <span className="font-display text-[9px] font-extrabold uppercase tracking-widest text-ink/40">
                  AI INTERVIEW
                </span>
                <div className="h-0.5 w-10 bg-ink/15" />
              </div>
            </div>

            {/* Clerk Auth Widget */}
            <div className="flex w-full flex-col items-center justify-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const clerkAppearance = {
  variables: {
    colorPrimary: '#0c0b09',
    colorText: '#0c0b09',
    colorTextSecondary: '#0c0b09',
    colorBackground: 'transparent',
    colorInputBackground: '#ffffff',
    colorInputText: '#0c0b09',
    borderRadius: '0.875rem',
    fontFamily: 'var(--font-outfit), var(--font-bricolage), sans-serif',
  },
  elements: {
    rootBox: 'w-full !bg-transparent',
    cardBox: '!border-0 !shadow-none !bg-transparent w-full !p-0 !m-0 overflow-visible',
    card: '!border-0 !shadow-none !bg-transparent !p-0 !m-0 w-full overflow-visible',
    header: 'hidden',
    headerTitle: 'hidden',
    headerSubtitle: 'hidden',
    socialButtonsBlockButton:
      '!border-3 !border-ink !bg-surface !shadow-[4px_4px_0px_#0c0b09] hover:!bg-[#C6FF4D] hover:!shadow-[6px_6px_0px_#0c0b09] !transition-all !duration-200 !rounded-xl !font-display !font-black !text-ink !text-sm !uppercase !tracking-wider !py-3.5 !w-full !flex !items-center !justify-center !gap-3 !cursor-pointer',
    socialButtonsBlockButtonText: '!font-display !font-black !text-ink !uppercase !text-xs sm:!text-sm !tracking-wider',
    socialButtonsBlockButtonArrow: 'hidden',
    formButtonPrimary:
      '!border-4 !border-ink !bg-ink !text-[#C6FF4D] !shadow-[6px_6px_0px_#0c0b09] hover:!bg-[#C6FF4D] hover:!text-ink hover:!shadow-[8px_8px_0px_#0c0b09] !transition-all !duration-200 !rounded-xl !font-display !font-black !normal-case !uppercase !tracking-wider !text-base !py-4 !mt-3 !w-full !cursor-pointer',
    formFieldInput:
      '!border-3 !border-ink !shadow-[3px_3px_0px_#0c0b09] !rounded-xl !bg-surface !px-4 !py-3 !font-sans !font-bold !text-ink placeholder:!text-ink/30 focus:!border-ink focus:!shadow-[5px_5px_0px_#C6FF4D] !transition-all !outline-none',
    formFieldLabel: '!font-display !font-black !uppercase !text-xs !tracking-wider !text-ink !mb-1.5',
    footer: '!bg-transparent !border-0 !pt-6 !flex !flex-col !items-center !justify-center !gap-2 !shadow-none !w-full',
    footerAction: '!bg-transparent !border-0 !shadow-none !flex !items-center !justify-center !gap-1.5 !font-sans !text-sm !font-medium !text-ink/80',
    footerActionText: '!text-ink/70 !font-bold',
    footerActionLink:
      '!font-display !font-black !text-ink !underline !decoration-[#C6FF4D] !decoration-4 !underline-offset-4 hover:!text-[#FF5C00] !transition-colors !ml-1',
    dividerLine: '!bg-ink/20 !h-0.5',
    dividerText: '!font-display !font-black !text-xs !uppercase !tracking-widest !text-ink/40 !px-3 !bg-transparent',
    identityPreview: '!border-2 !border-ink !rounded-xl !p-3 !bg-surface !shadow-[2px_2px_0px_#0c0b09]',
    identityPreviewText: '!font-bold !text-ink',
    identityPreviewEditButtonIcon: '!text-ink',
    formResendCodeLink: '!font-display !font-bold !text-ink hover:!text-[#C6FF4D]',
    clerkLogo: 'hidden',
  },
};
