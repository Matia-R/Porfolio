import React from 'react'
//import { Children } from 'react/cjs/react.production.min';
import './Button.css'

const STYLES = [
    'btn-primary',
    'btn-solid',
    'btn-outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    onClick,
    buttonStyle,
    buttonSize,
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <button onClick={onClick} className={`btn ${checkButtonStyle} ${checkButtonSize}`}>{children}</button>
    )

};