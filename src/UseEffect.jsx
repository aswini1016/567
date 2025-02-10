import React, { useEffect, useState } from 'react';

const UseEffectEx = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(1000);
            document.title = 1000; // Update title after count change
        }, 5000);

        return () => clearTimeout(timer); // Cleanup function to avoid memory leaks
    }, []);

    return (
        <div>
            <h1>UseEffect Example</h1>
            <h1>{count}</h1>
        </div>
    );
};

export default UseEffectEx;


