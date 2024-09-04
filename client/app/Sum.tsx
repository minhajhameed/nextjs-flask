"use client"

import { useState } from "react";

export default function Sum() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [result, setResult] = useState(null);

    const handleSum = async () => {
        const response = await fetch('http://localhost:8080/api/sum', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value1: parseInt(value1), value2: parseInt(value2) }),
        });

        const data = await response.json();
        setResult(data.sum);
    };

    return (
        <div className="flex flex-col p-10 font-mono text-center ">
            <h1 className="pb-5">Sum Two Numbers</h1>
            <div className="flex gap-10">

                <input
                    type="number"
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                    placeholder="Enter first value"
                    className="rounded bg-zinc-800 font-mono p-1"
                />
                <input
                    type="number"
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                    placeholder="Enter second value"
                    className="rounded bg-zinc-800 font-mono p-1"
                />
            </div>
            <button className="my-5 px-2 rounded text-zinc-800 bg-zinc-300" onClick={handleSum}>Calculate Sum</button>
            {result !== null && <p className="bg-gradient-to-tr from-yellow-600 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text">The sum is: {result}</p>}
        </div>
    );
}
