import React from "react";
import FullscreenImage from "./pictureZoom";
import IsFavorite from "./isFavorite";  




export default function Entry(props) {
    
    return (
        <article className="journal-entry">
            <div className="main-image-container"  >
                
                <FullscreenImage
                    src={props.entry.img.src}
                    alt={props.entry.img.alt}
                   />
                
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="../images/kodierordner.png" 
                    alt="map marker icon"
                />
                <span className="country">{props.entry.timeSpent}</span>
                <h2 className="entry-title">{props.entry.title}</h2>
                <p className="trip-dates">{props.entry.dates}</p>
                <p className="entry-text">{props.entry.text}</p>
                
                
                <p className="journal-text">{props.entry.journal}</p>
                <IsFavorite initialState={props.entry.isFavorite}/>
                <hr />
            </div>
            
        </article>
    )
}