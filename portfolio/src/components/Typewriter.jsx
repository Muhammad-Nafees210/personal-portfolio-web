import React, { useState, useEffect } from 'react';

export default function Typewriter({
  words = ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Tailwind CSS Expert'],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1800
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-600 font-extrabold">
      <span>{currentText}</span>
      <span className="ml-1 inline-block w-[3px] h-[1em] bg-cyan-600 animate-pulse align-middle"></span>
    </span>
  );
}
