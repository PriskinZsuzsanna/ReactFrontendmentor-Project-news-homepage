import './Col.css'

import React from 'react'

const Col = ({colImg, colId, colTitle, colParag}) => {
    return (
        <div className="col">
            <div className="col-img-container" style={{backgroundImage: "url(" + colImg + ")"}}>
                
            </div>
            <div className="col-text-container">
                <h3>{colId}</h3>
                <h4>
                    <a href="">{colTitle}</a>
                </h4>
                <p>{colParag}</p>
            </div>
        </div>
    )
}

export default Col
