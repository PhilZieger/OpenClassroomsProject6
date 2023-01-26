import leftArrow from '../../assets/left-arrow.png';
import rightArrow from '../../assets/right-arrow.png';

import { useState } from "react";

const Gallery = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    } 

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    } 

    return (
        slides.length === 1 ? (
        <div className="kasa-housing-box">
            <div className="kasa-housing-slider" style={{backgroundImage: `url(${slides[currentIndex]})`}}></div>
        </div>
        ) : (
            <div className="kasa-housing-box">
                <img className='kasa-housing-boutton-left' alt="Left Arrow" src={leftArrow} onClick={goToPrevious} />
                <img className='kasa-housing-boutton-right' alt="Right Arrow" src={rightArrow} onClick={goToNext} />
                <div className="kasa-housing-slider" style={{backgroundImage: `url(${slides[currentIndex]})`}}></div>
                <div className="kasa-housing-text">{currentIndex + 1}/{slides.length}</div>
            </div>
        )
    )
}

export default Gallery;