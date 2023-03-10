import './Box.css'

import React from 'react'

const Box = ({ boxTitle, boxText }) => {
    return (
        <div className="side-box">
            <h4>
                <a href="/ReactFrontendmentor-Project-news-homepage">{boxTitle}</a>
            </h4>
            <p>{boxText}</p>
        </div>
    )
}

export default Box
