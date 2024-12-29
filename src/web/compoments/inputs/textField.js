import { TextField, InputAdornment, Typography } from '@mui/material'
import React from 'react'
import { iconBank } from '../../assets/icons'

const customStyles = {
    width: '100%',
    "& .MuiInput-underline:after": {
        borderBottomColor: "rgb(246 103 1 / 89%)",
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "rgb(246 103 1 / 89%)",
    },
}

function CustomTextField(props) {

    const { handleOnBlur, handleOnChange, handleOnMouseEnter, handleOnMouseLeave,
        id, placeholder, helperText, disabled, value, style, inputProps = {}, label,
        type = 'text', size = 'medium', variant = 'standard', error = false, loading } = props

    const onChange = (event) => {
        !disabled && handleOnChange && handleOnChange(event.target.value)
    }

    const onBlur = (event) => {
        !disabled && handleOnBlur && handleOnBlur(event.target.value)
    }

    const onMouseEnter = () => {
        !disabled && handleOnMouseEnter && handleOnMouseEnter()
    }

    const onMouseLeave = () => {
        !disabled && handleOnMouseLeave && handleOnMouseLeave()
    }

    const renderEndAdornment = () => {
        if (inputProps?.propsName === 'endAdornment') {
            return (
                <InputAdornment position="end">
                    {
                        loading ?
                            iconBank.loadingIcon({ marginRight: '20px', color: 'rgb(246 103 1 / 79%)' })
                            :
                            <Typography style={{ fontSize: '10px', textDecoration: 'underline', cursor: 'pointer', color: 'rgb(246 103 1 / 79%)', fontWeight: '600' }} onClick={inputProps.onClick}>
                                {inputProps.value}
                            </Typography>
                    }
                </InputAdornment>
            )
        }
        return null
    }

    return (
        <>
            <TextField
                error={error}
                id={`custom-text-field ${id}`}
                type={type}
                size={size}
                label={label}
                variant={variant}
                placeholder={placeholder}
                helperText={helperText}
                onChange={onChange}
                onBlur={onBlur}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                disabled={disabled}
                value={value}
                sx={{ ...style, ...customStyles }}
                InputProps={{ [inputProps.propsName]: renderEndAdornment() }}
            />
        </>
    )
}

export default CustomTextField
