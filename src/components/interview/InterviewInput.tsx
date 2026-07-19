'use client';

import { useState, useRef, type FormEvent } from 'react';

interface InterviewInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export default function InterviewInput({
  onSend,
  disabled = false,
  placeholder = 'Type your answer naturally...',
}: InterviewInputProps) {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) return;

    onSend(trimmed);
    setValue('');

    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-3 p-4 sm:p-6 border-t-4 border-ink bg-surface shadow-[0px_-4px_0px_#0c0b09]"
    >
      <div className="flex-1 relative">
        <textarea
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          rows={1}
          className="w-full resize-none rounded-2xl border-3 border-ink bg-paper px-4 sm:px-5 py-3.5 text-sm sm:text-[15px] font-bold text-ink placeholder:text-ink/40 shadow-[3px_3px_0px_#0c0b09] transition-all focus:bg-white focus:outline-none focus:shadow-[5px_5px_0px_#C6FF4D] disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ minHeight: '52px', maxHeight: '130px' }}
        />
      </div>

      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="flex h-13 w-13 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border-3 border-ink bg-ink text-[#C6FF4D] shadow-[4px_4px_0px_#0c0b09] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#C6FF4D] hover:text-ink hover:shadow-[6px_6px_0px_#0c0b09] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-[3px_3px_0px_#0c0b09]"
        aria-label="Send message"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </form>
  );
}