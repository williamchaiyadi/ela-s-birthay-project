import React, { useState } from "react";
import ReactDOM from "react-dom";

const images = Array.from({ length: 120 }).map(
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

    const lightbox = (
        <div
            className={`lightbox-wrapper ${
                zoom ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
        >
            <button
                className="lightbox-close"
                onClick={close}
                aria-label="Close lightbox"
            >
            &times;
            </button>

            <button className="lightbox-button lightbox-prev" onClick={prev}>
                ←
            </button>

            <img
                src={images[index]}
                alt={`Zoom ${index + 1}`}
                className={`lightbox-image ${
                    zoom ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
            />

            <button className="lightbox-button lightbox-next" onClick={next}>
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

            {lightboxOpen &&
                ReactDOM.createPortal(lightbox, document.body)}
        </div>
    );
}
