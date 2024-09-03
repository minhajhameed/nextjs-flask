"use client"

import React, { useEffect, useState } from 'react'

const Flask = () => {
    const [message, setMessage] = useState("Loading");
    const [tag, setTag] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/home')
            .then(response => response.json())
            .then((data) => {
                setMessage(data.message);
                setTag(data.tag);
            })
    }, [])
    return (
        <div className='text-center font-mono'>
            <div className="bg-gradient-to-tr from-yellow-600 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text text-3xl font-mono">{message}</div><br />
            <div>Tags:</div>
            <div className='text-center'>

                {tag.map((tag, index) => (
                    <div key={index}>{tag}</div>
                ))}
            </div>
        </div>
    )
}

export default Flask
