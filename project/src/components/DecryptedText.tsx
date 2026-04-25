import { useEffect, useState } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

export default function DecryptedText({
    text,
    speed = 30,
    maxIterations = 10,
    className = ''
}: {
    text: string;
    speed?: number;
    maxIterations?: number;
    className?: string;
}) {
    const [displayText, setDisplayText] = useState(text);

    useEffect(() => {
        let iteration = 0;
        let interval: NodeJS.Timeout;

        const startAnimation = () => {
            clearInterval(interval);

            interval = setInterval(() => {
                setDisplayText(() => {
                    return text
                        .split('')
                        .map((letter, index) => {
                            if (index < iteration || letter === ' ') {
                                return text[index];
                            }
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join('');
                });

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1;
            }, speed);
        };

        // Add a tiny delay so the text isn't scrambled before the page fully loads
        const timeout = setTimeout(startAnimation, 300);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text, speed, maxIterations]);

    return <span className={className}>{displayText}</span>;
}
