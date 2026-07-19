'use client';

import { useRef, useEffect } from 'react';
import type { InterviewMessage } from '@/lib/types/interview';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

interface ChatWindowProps {
  messages: InterviewMessage[];
  isStreaming?: boolean;
}

export default function ChatWindow({ messages, isStreaming }: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isStreaming]);

  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar px-4 sm:px-8 py-6">
      <div className="max-w-3xl mx-auto flex flex-col gap-5">
        {messages.map((msg, i) => (
          <MessageBubble
            key={`${msg.role}-${i}`}
            message={msg}
            isLatest={i === messages.length - 1}
          />
        ))}

        {isStreaming &&
          messages[messages.length - 1]?.role !== 'assistant' && (
            <TypingIndicator />
          )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}