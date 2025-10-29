import React, { useState } from "react";

const images = Array.from({ length: 96 }).map(
    (_, i) => `/album/${i + 1}.webp`
);

export default function Album() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [zoom, setZoom] = useState(false);

    function open(i) {
        setIndex(i);
        setLightboxOpen(true);
        document.body.classList.add("lightbox-active"); 
        setTimeout(() => setZoom(true), 50);
    }

    function close() {
        setZoom(false);
        document.body.classList.remove("lightbox-active"); 
        setTimeout(() => setLightboxOpen(false), 300);
    }

    function prev() {
        setIndex((index - 1 + images.length) % images.length);
    }

    function next() {
        setIndex((index + 1) % images.length);
    }

    return (
        <div className="album-container p-4 animate-fade-in">
            <div className="grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 animate-fade-in">
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        loading="lazy"
                        alt={`Album ${i + 1}`}
                        className="album-photo rounded-md cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => open(i)}
                    />
                ))}
            </div>

            {lightboxOpen && (
                <div
                    className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300 ${
                        zoom ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ overscrollBehavior: "none" }}
                >
                    <button
                        className="absolute top-6 right-8 text-white text-4xl font-bold hover:scale-110 transition-transform"
                        onClick={close}
                    >
                        &times;
                    </button>

                    <button
                        className="absolute left-6 text-white text-3xl hover:scale-125 transition-transform"
                        onClick={prev}
                    >
                        ⬅
                    </button>

                    <img
                        src={images[index]}
                        alt={`Zoom ${index + 1}`}
                        className={`max-w-full max-h-full rounded-lg shadow-2xl transition-transform duration-500 ease-in-out object-contain ${
                            zoom ? "scale-100 opacity-100" : "scale-90 opacity-0"
                        }`}
                    />

                    <button
                        className="absolute right-6 text-white text-3xl hover:scale-125 transition-transform"
                        onClick={next}
                    >
                        ➡
                    </button>
                </div>
            )}
        </div>
    );
}
