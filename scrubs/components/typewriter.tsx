"use client";
import { useState, useEffect, useCallback } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 2000,
  className = "",
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[currentWordIndex];

    if (isPaused) return;

    if (!isDeleting) {
      // Typing
      setDisplayText(currentWord.substring(0, displayText.length + 1));

      if (displayText.length === currentWord.length) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting
      setDisplayText(currentWord.substring(0, displayText.length - 1));

      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [currentWordIndex, displayText, isDeleting, isPaused, pauseDuration, words]);

  useEffect(() => {
    // Respect reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setDisplayText(words[0]);
      return;
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed, words]);

  // Find the longest word to reserve space
  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    <span className={`relative inline-block ${className}`} aria-label={words[currentWordIndex]}>
      {/* Invisible content to set minimum width */}
      <span className="invisible whitespace-nowrap" aria-hidden="true">{longestWord}</span>
      {/* Actual typewriter text positioned on top */}
      <span className="absolute left-0 top-0 whitespace-nowrap bg-linear-to-br from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
        {displayText}
        <span className="animate-pulse text-red-500" aria-hidden="true">|</span>
      </span>
    </span>
  );
}
