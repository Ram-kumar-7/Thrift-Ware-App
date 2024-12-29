import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import { Snackbar, Alert, Typography } from '@mui/material'
import { makeStyles, useTheme } from '@mui/styles'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

const customStyles = (theme) => ({
    alertMsg: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '18px',
        color: theme?.system?.text?.contrastcolor,
    },
})

const useStyles = makeStyles((theme) => ({
    checkIcon: {
        color: theme?.system?.icon?.contrastcolor,
        height: '14px',
        width: '14px',
        marginTop: '-3px',
    },
    snackBar: {
        position: 'fixed',
        bottom: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1300,
    },
    alertBox: {
        display: 'flex',
        alignItems: 'center',
        padding: '16px',
        gap: '10px',
        height: '50px !important',
        '& .MuiSvgIcon-root': {
            color: theme?.system?.icon?.contrastcolor,
        },
    },
}))

const CustomSnackbar = (props) => {
    const {message, alertType = 'success', openSnackbar, handleSnackbarClose} = props
    const [open, setOpen] = useState(false)
    const theme = useTheme()
    const classes = useStyles()
    const customClasses = customStyles(theme)

    useEffect(() => {
        setOpen(openSnackbar)
    }, [openSnackbar])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
        handleSnackbarClose()
    }

    return ReactDOM.createPortal(
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            className={classes.snackBar}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert
                variant="filled"
                severity={alertType || 'success'}
                className={classes.alertBox}
                icon={alertType === 'success' ? <CheckCircleIcon className={classes.checkIcon} /> : <ErrorOutlineIcon className={classes.checkIcon} />}
                onClose={handleClose}
            >
                <Typography style={customClasses.alertMsg}>{message}</Typography>
            </Alert>
        </Snackbar>,
        document.body
    )
}

export default CustomSnackbar
