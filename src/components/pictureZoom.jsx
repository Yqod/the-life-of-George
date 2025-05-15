import React, { useState } from "react";
import "/src/FullscreenImage.css";

export default function FullscreenImage({ src, alt }) {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleImageClick = () => {
        setIsFullscreen(true);
    };

    const handleClose = () => {
        setIsFullscreen(false);
    };

    return (
        <>
            <img
                className="thumbnail"
                src={src}
                alt={alt}
                onClick={handleImageClick}
            />
            {isFullscreen && (
                <div className="fullscreen-overlay" onClick={handleClose}>
                    <img className="fullscreen-image" src={src} alt={alt} />
                </div>
            )}
        </>
    );
}