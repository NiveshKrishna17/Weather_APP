import React, { Fragment } from 'react'

/**
 * Input component for handling user input.
 *
 * @param {object} type - The type of input field.
 * @param {string} placeholder - The placeholder text for the input field.
 * @param {string} value - The value of the input field.
 * @param {function} onChange - The function to handle the input change event.
 * @return {JSX} The input component.
 */
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