'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const { scrollY } = useScroll();
  const lenis = useLenis();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    if (lenis) {
      if (target === '#top' || target === '#hero' || target === '#') {
        lenis.scrollTo(0, { duration: 1.5 });
      } else {
        lenis.scrollTo(target, { offset: -80, duration: 1.5 });
      }
    } else {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Smooth out wheel/trackpad steps so the contraction/expansion glides gracefully
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 80,
    damping: 24,
    mass: 0.8,
  });

  // Map across a longer scroll distance (20px to 380px) so the animation is gradual and unhurried
  const maxWidth = useTransform(smoothScrollY, [20, 380], [1152, 680]);
  const py = useTransform(smoothScrollY, [20, 380], [14, 8]);
  const px = useTransform(smoothScrollY, [20, 380], [28, 20]);
  // Using exact pixel numbers (20px to 34px) completely eliminates any browser border-radius unit-switch glitch!
  const borderRadius = useTransform(smoothScrollY, [20, 380], [20, 34]);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 pointer-events-none sm:top-5 sm:px-6">
      <motion.header
        style={{
          maxWidth,
          paddingTop: py,
          paddingBottom: py,
          paddingLeft: px,
          paddingRight: px,
          borderRadius,
        }}
        className="pointer-events-auto flex w-full items-center justify-between border-2 border-ink bg-paper/40 backdrop-blur-md shadow-brutal-sm transition-shadow duration-300 hover:shadow-brutal"
      >
        <a
          href="#top"
          onClick={(e) => handleSmoothScroll(e, '#top')}
          data-cursor-hover
          className="font-display text-2xl font-extrabold tracking-tight text-ink cursor-pointer"
        >
          HP.
        </a>
        <nav className="hidden items-center gap-8 font-display text-xs font-bold uppercase tracking-widest text-ink sm:flex">
          <a
            href="#how-it-works"
            onClick={(e) => handleSmoothScroll(e, '#how-it-works')}
            data-cursor-hover
            className="transition-colors hover:text-[#74C53A] cursor-pointer"
          >
            How it works
          </a>
          <a
            href="#services"
            onClick={(e) => handleSmoothScroll(e, '#services')}
            data-cursor-hover
            className="transition-colors hover:text-[#74C53A] cursor-pointer"
          >
            Features
          </a>
          <a
            href="#footer"
            onClick={(e) => handleSmoothScroll(e, '#footer')}
            data-cursor-hover
            className="transition-colors hover:text-[#74C53A] cursor-pointer"
          >
            Contact us
          </a>
        </nav>
        <Link href="/sign-up">
          <Button size="sm" className="font-bold uppercase tracking-wider shadow-brutal-sm">
            Get started
          </Button>
        </Link>
      </motion.header>
    </div>
  );
}

export { Navbar as Nav };
