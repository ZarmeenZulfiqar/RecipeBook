'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import edit from '../markdown/animations/edit.json';


const ReactMarkdown = dynamic(() => import('react-markdown'), { ssr: false });

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('');

    const handleInputChange = (e) => {
        const newMarkdown = e.target.value;
        console.log('Markdown content:', newMarkdown); // Log the markdown input content
        setMarkdown(newMarkdown);
    };

    return (
        <main className="flex items-center justify-center flex-col">

            <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
                Markdown Editor
            </h1>
            <Lottie
                animationData={edit}
                loop={true}       // Loop the animation
                autoplay={true}   // Start the animation automatically
                style={{ width: '60%', height: '200px' }} // You can adjust size here
            />

            <div className="w-full max-w-5xl border-4 border-gray-300 rounded-lg p-6 flex">

                {/* Left Box: Markdown Editor */}
                <div className="w-1/2 pr-4">
                    <textarea
                        placeholder="Write your Markdown here..."
                        value={markdown}
                        onChange={handleInputChange}
                        className="w-full h-60 p-4 border border-gray-400 rounded-lg resize-none"
                    />
                </div>

                {/* Right Box: Markdown Preview */}
                <div className="w-1/2 pl-4">
                    <div className="border-2 border-gray-300 rounded-lg p-4 h-full">
                        <ReactMarkdown>{markdown}</ReactMarkdown>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default MarkdownEditor;