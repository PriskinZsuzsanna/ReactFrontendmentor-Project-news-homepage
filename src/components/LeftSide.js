import './LeftSide.css'

import React from 'react'

const LeftSide = ({ heroImgMobile, heroImgDesktop, title, parag, btn }) => {
    return (
        <div className="hero-left">
            <div className="img-container">
                <img src={heroImgMobile} alt="" className="hero-img-mobile" />
                <img src={heroImgDesktop} alt="" className="hero-img-desktop"/>
            </div>
            <div className="hero-text-container">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <div className="paragraph">
                    <p>{parag}</p>
                    <button>
                        <a href="/ReactFrontendmentor-Project-news-homepage">{btn}</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LeftSide
