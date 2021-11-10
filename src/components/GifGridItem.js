import React from 'react'

export const GifGridItem = ({ id, title, url }) => {


    return (
        <div className="card animate__animated animate__zoomIn">
            <img src={ url } alt={ title }/>
            <p className="img__description">{ title }</p>
        </div>
    )
}