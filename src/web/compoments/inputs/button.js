import React from 'react'
import { Button } from '@mui/material'
import { iconBank } from '../../assets/icons'

const commonStyles = (disabled) => ({
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed" : "pointer"
})

function CustomButton(props) {

    const { id, text, onClick, disabled, style, onHover, startIcon, endIcon } = props

    const handleOnClick = (event) => {
        if (!disabled) {
            onClick && onClick(event)
        }
    }
    const handleMouseEnter = () => {
        if (disabled) {
            onHover && onHover(true)
        }
    }

    const handleMouseLeave = () => {
        if (disabled) {
            onHover && onHover(false)
        }
    }

    return (
        <>
            <Button
                id={`customize-button-${id}`}
                onClick={handleOnClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ ...style, ...commonStyles(disabled) }}
                startIcon={iconBank[startIcon]?.()}
                endIcon={iconBank[endIcon]?.({ color: '#fff' })}
            >
                <span >{text}</span>

            </Button>
        </>
    )
}

export default CustomButton
