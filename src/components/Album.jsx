import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

const images = Array.from({ length: 120 }).map((_, i) => `/album/${i + 1}.webp`);

export default function Album() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [zoom, setZoom] = useState(false);
    const startX = useRef(0);
    const endX = useRef(0);

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
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    }
    function next() {
        setIndex((prev) => (prev + 1) % images.length);
    }

    function handleTouchStart(e) {
        startX.current = e.touches[0].clientX;
    }

    function handleTouchMove(e) {
        endX.current = e.touches[0].clientX;
    }

    function handleTouchEnd() {
        const delta = startX.current - endX.current;
        if (Math.abs(delta) > 50) {
        if (delta > 0) next(); 
        else prev(); 
        }
    }

    const lightbox = (
        <div
        className={`lightbox-wrapper ${
            zoom ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        >
        <button
            className="lightbox-close"
            onClick={close}
            aria-label="Close lightbox"
        >
            &times;
        </button>

        <img
            src={images[index]}
            alt={`Zoom ${index + 1}`}
            className={`lightbox-image ${
            zoom ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
        />

        <button className="lightbox-button lightbox-prev hidden md:block" onClick={prev}>
            ←
        </button>
        <button className="lightbox-button lightbox-next hidden md:block" onClick={next}>
            →
        </button>
        </div>
    );

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

        {lightboxOpen && ReactDOM.createPortal(lightbox, document.body)}
        </div>
    );
}
