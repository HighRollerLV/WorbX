import React, { useState, useEffect, useMemo } from 'react';

const TextAnimation = () => {
    const words = useMemo(() => [
        'Innovative Design and Solutions.',
    ], []); // Dependency array is empty, so this runs once

    const [part, setPart] = useState('');
    const [i, setI] = useState(0);
    const [offset, setOffset] = useState(0);
    const [forwards, setForwards] = useState(true);
    const [skipCount, setSkipCount] = useState(0);
    const skipDelay = 15;
    const speed = 100;

    useEffect(() => {
        const wordFlick = setInterval(() => {
            if (forwards) {
                if (offset >= words[i].length) {
                    setSkipCount((prevSkipCount) => prevSkipCount + 1);
                    if (skipCount >= skipDelay) {
                        setForwards(false);
                        setSkipCount(0);
                    }
                }
            } else {
                if (offset === 0) {
                    setForwards(true);
                    setI((prevI) => (prevI + 1) % words.length);
                }
            }

            setPart(words[i].substring(0, offset));
            if (skipCount === 0) {
                if (forwards) {
                    setOffset((prevOffset) => prevOffset + 1);
                } else {
                    setOffset((prevOffset) => prevOffset - 1);
                }
            }
        }, speed);

        return () => clearInterval(wordFlick);
    }, [forwards, i, offset, skipCount, words]);

    return (
        <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-4 word">
            {part || 'Innovative Design and Solutions.'}
        </h1>
    );
};

export default TextAnimation;