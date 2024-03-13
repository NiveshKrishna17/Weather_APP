import React, { Fragment } from 'react'

/**
 * Renders an image component with the specified source and alternate text.
 *
 * @param {string} src - The URL of the image source
 * @param {string} alt - The alternate text for the image
 * @return {JSX.Element} The image component
 */
const Image = ({ src, alt }) => {
    return (
        <Fragment>
            <img src={src} alt={alt} className="image" />
        </Fragment>
    )
}

export default Image