import React, { useState, useEffect } from 'react';
import { Sparkles, Wand2, Zap, ImageIcon } from 'lucide-react';
import SignIn from './SignIn';

export default function AIImageGeneratorLanding() {
    const [prompt, setPrompt] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const [floatingElements, setFloatingElements] = useState([]);
    const [signInClicked, setsignInClicked] = useState(false);

    useEffect(() => {
        // Generate floating elements for background animation
        const elements = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 15 + Math.random() * 10
        }));
        setFloatingElements(elements);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (prompt.trim()) {
            alert(`Generating image for: "${prompt}"\n\nThis is a demo landing page. Connect your AI image generation API here!`);
        }
    };
    const handelSignIn = (e) => {
        e.preventDefault();
        setsignInClicked(!signInClicked);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {floatingElements.map((el) => (
                    <div
                        key={el.id}
                        className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                        style={{
                            left: `${el.left}%`,
                            animation: `float ${el.duration}s linear infinite`,
                            animationDelay: `${el.delay}s`
                        }}
                    />
                ))}
            </div>

            {/* Gradient orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

            {/* Main content */}
            <div className="relative z-10 container mx-auto px-4 py-12">
                {/* Header */}
                <nav className="flex justify-between items-center mb-20">
                    <div className="flex items-center space-x-2">
                        <Sparkles className="w-8 h-8 text-purple-300" />
                        <span className="text-2xl font-bold text-white">ImageAI</span>
                    </div>
                    <button onClick={handelSignIn} className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20">
                        Sign In
                    </button>
                </nav>

                {/* Hero section */}
                <div className="max-w-5xl mx-auto text-center mb-16">
                    <div className="mb-6 flex justify-center">
                        <div className="relative">
                            <Wand2 className="w-16 h-16 text-purple-300 animate-bounce" />
                            <Sparkles className="w-6 h-6 text-yellow-300 absolute -top-2 -right-2 animate-ping" />
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Transform Words Into
                        <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text animate-pulse">
                            Stunning Visuals
                        </span>
                    </h1>

                    <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
                        Harness the power of AI to create breathtaking images from simple text prompts.
                        Your imagination is the only limit.
                    </p>

                    {/* Input section */}
                    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mb-12">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                            <div className="relative flex items-center bg-white/95 backdrop-blur-xl rounded-2xl p-2 shadow-2xl">
                                <input
                                    type="text"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="Describe your image... (e.g., a mystical forest at sunset with glowing fireflies)"
                                    className="flex-1 px-6 py-4 bg-transparent text-gray-800 placeholder-gray-500 outline-none text-lg"
                                />
                                <button
                                    type="submit"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
                                >
                                    <span>Generate</span>
                                    <Zap className={`w-5 h-5 ${isHovered ? 'animate-bounce' : ''}`} />
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Feature cards */}
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20">
                        {[
                            { icon: Zap, title: 'Lightning Fast', desc: 'Generate images in seconds' },
                            { icon: Sparkles, title: 'High Quality', desc: 'Stunning 4K resolution output' },
                            { icon: ImageIcon, title: 'Unlimited Style', desc: 'Any art style you imagine' }
                        ].map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <feature.icon className="w-10 h-10 text-purple-300 mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-purple-200">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sample images grid */}
                <div className="max-w-6xl mx-auto mt-24">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        Recent Creations
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div
                                key={i}
                                className="aspect-square bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-2xl backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden group"
                            >
                                <div className="w-full h-full flex items-center justify-center relative">
                                    <ImageIcon className="w-16 h-16 text-white/40 group-hover:scale-110 transition-transform" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                        <p className="text-white text-sm">Sample Image {i}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {signInClicked && <SignIn setsignInClicked={setsignInClicked} />}
            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-100vh) translateX(10px);
          }
          50% {
            transform: translateY(-200vh) translateX(-10px);
          }
          75% {
            transform: translateY(-300vh) translateX(5px);
          }
        }
      `}</style>
        </div>
    );
}