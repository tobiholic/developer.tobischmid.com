'use client';

import { useState, useEffect } from 'react';

interface Props {
  text: string;
  duration: number;
}

const ScrambleText = ({ text, duration }: Props) => {
  const [displayText, setDisplayText] = useState('');
  const characters = '(){}/!§$%&?*#-';

  useEffect(() => {
    let currentIndex = 0; // Tracks the letter currently being resolved
    let finalText = ''.repeat(text.length); // Initializes displayText with placeholders

    const scrambleLetter = (targetChar: string, callback: () => void) => {
      let scrambleCount = 0;
      const maxScrambles = 5; // Number of random changes per letter

      const scrambleInterval = setInterval(() => {
        const randomChar =
          characters[Math.floor(Math.random() * characters.length)];

        // Update only the current character position
        finalText =
          finalText.substring(0, currentIndex) +
          randomChar +
          finalText.substring(currentIndex + 1);

        setDisplayText(finalText);

        scrambleCount++;
        if (scrambleCount >= maxScrambles) {
          clearInterval(scrambleInterval);

          // Lock the final character in place
          finalText =
            finalText.substring(0, currentIndex) +
            targetChar +
            finalText.substring(currentIndex + 1);

          setDisplayText(finalText);
          callback(); // Proceed to the next letter
        }
      }, duration / (text.length * maxScrambles));
    };

    const revealNextLetter = () => {
      if (currentIndex < text.length) {
        scrambleLetter(text[currentIndex], () => {
          currentIndex++;
          revealNextLetter();
        });
      }
    };

    setDisplayText(' '.repeat(text.length)); // Initialize with underscores
    revealNextLetter();

    return () => {
      currentIndex = text.length; // Ensure cleanup if the component unmounts
    };
  }, [text, duration]);

  return <span>{displayText}</span>;
};

export default ScrambleText;
