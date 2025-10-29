import React, { useState } from "react";
import Album from "./Album";
import MusicPlayer from "./Music";

export default function Gallery() {
    const [activeTab, setActiveTab] = useState("album");

    return (
        <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center"
        style={{ backgroundImage: "url('/background/background.png')" }}
        >
        <div className="flex justify-center mt-6 space-x-4 bg-white/70 rounded-full px-4 py-2 shadow-md backdrop-blur-md">
            <button
            onClick={() => setActiveTab("album")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                activeTab === "album"
                ? "bg-pink-500 text-white shadow"
                : "bg-transparent text-gray-700 hover:text-pink-500"
            }`}
            >
            📸 Album
            </button>
            <button
            onClick={() => setActiveTab("music")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                activeTab === "music"
                ? "bg-pink-500 text-white shadow"
                : "bg-transparent text-gray-700 hover:text-pink-500"
            }`}
            >
            🎶 Music
            </button>
        </div>

        <div className="mt-6 w-full max-w-5xl h-[80vh] bg-white/70 rounded-2xl shadow-lg overflow-hidden backdrop-blur-md">
            <div className="h-full overflow-y-auto p-6">
            {activeTab === "album" ? <Album /> : <MusicPlayer />}
            </div>
        </div>
        </div>
    );
}
