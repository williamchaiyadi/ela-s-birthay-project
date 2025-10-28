import React from "react";

const songs = [
    "Afgan - Panah Asmara.mp3",
    "Can't Take My Eyes off You.mp3",
    "d4vd - Here With Me.mp3",
    "Ed Sheeran - Perfect.mp3",
    "GLENN FREDLY - My Everything.mp3",
    "Glenn Fredly - Terpesona feat. Audy.mp3",
    "Payung Teduh - Akad.mp3",
    "Sheila Majid - Dia.mp3",
    "Stephen Sanchez - Until I Found You.mp3",
    "The Walters - I Love You So.mp3",
    "Utha Likumahuwa - Sesaat Kau Hadir.mp3",
    "wave to earth - love..mp3",
    "yung kai - blue.mp3",
    "yung kai - wildflower.mp3",
];

export default function MusicPlayer() {
    return (
        <div className="p-6 bg-pink-50 rounded-2xl shadow-lg animate-fade-in">
            <ul className="space-y-4">
                {songs.map((name, i) => (
                <li key={i} className="bg-white p-4 rounded-lg shadow-sm hover:bg-pink-100 transition">
                    <p className="font-medium text-gray-800">{name.replace(".mp3", "")}</p>
                    <audio controls className="w-full mt-2">
                    <source src={`/songs/${name}`} type="audio/mpeg" />
                    Browser kamu tidak mendukung pemutar audio.
                    </audio>
                </li>
                ))}
            </ul>
        </div>
    );
}
