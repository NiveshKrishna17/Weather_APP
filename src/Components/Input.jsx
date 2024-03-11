import React, { Fragment } from 'react'

const Input = ({ type, placeholder, value, onChange }) => {
    return (
        <Fragment>
            <input
                className='input_class'
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </Fragment>
    )
}

export default Input