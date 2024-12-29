
import { React, useState } from "react"
import { Box, Typography, Checkbox } from "@mui/material"
import { makeStyles } from "@mui/styles"
import AuthPageImg from "../../assets/img/AuthPageImg.svg"
import { iconBank } from "../../assets/icons"
import CustomTextField from '../../compoments/inputs/textField'
import CustomButton from "../../compoments/inputs/button"
import { signIn } from '../../../Service/authPage'
import CustomSnackbar from "../../compoments/inputs/CustomSnackbar"

const commonStyles = {
    displayProperty: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    authTitle: {
        paddingBottom: '10px',
        fontWeight: '600',
        fontSize: '24px',
        color: 'rgb(246 103 1 / 89%)'
    },
    boxStyle: {
        margin: '10px',
        display: "flex",
        alignItems: "flex-end",
    },
    buttonStyle: {
        background: "rgb(246 103 1 / 89%)",
        width: '100%',
        color: '#fff',
        fontSize: '16px',
        fontWeight: 'bold',
        borderRadius: '7px',
        marginTop: '20px',
        opacity: '0.5 !important'

    }
}

const useStyles = makeStyles(() => ({
    authPageContainer: {
        position: 'relative',
        backgroundColor: "#1336EF",
        height: "100vh",
        width: '100%',
        overflow: 'hidden',
        ...commonStyles.displayProperty,
    },
    authPageInnerContainer: {
        position: 'relative',
        height: "80%",
        backgroundColor: "white",
        width: "72%",
        borderRadius: "1.9%",
        borderTopLeftRadius: "20%",
        borderBottomRightRadius: "20%",
        ...commonStyles.displayProperty,
        "@media (max-width: 800px)": {
            width: '90%',
            height: '80%',
            borderRadius: "5%",
            flexDirection: "column",
        },
    },
    authPageInnerLeftGrid: {
        height: "80%",
        width: "40%",
        ...commonStyles.displayProperty,
        flexDirection: "column !important",
        flexShrink: "1",
        "@media (max-width: 800px)": {
            height: '40%',
            width: '80%',
            marginBottom: '5%'
        },
    },
    authPageInnerRightGrid: {
        height: "80%",
        width: "40%",
        boxSizing: "border-box",
        padding: "100px 50px !important",
        "@media (max-width: 800px)": {
            width: "80% !important",
        },
    },
    authPageImg: {
        height: '70%',
    },
    authPageProductName: {
        marginBottom: "1% !important",
        fontWeight: "900 !important",
        fontSize: "200% !important",
        "@media (max-width: 800px)": {
            fontSize: "150% !important",
        },
    },
}))

const SignIn = () => {
    const classes = useStyles()
    const [authDeatils, setAuthDeatils] = useState({})
    const [showPassword, setShowPassword] = useState(false)
    const [buttonOnClicked, setButtonOnClicked] = useState(false)
    const [snackBarInfo, setSnackBarInfo] = useState({ open: false })

    const handleOnClick = async () => {
        setButtonOnClicked(true)
        const response = await signIn(authDeatils)
        console.log(authDeatils, response)
        setButtonOnClicked(false)
        setSnackBarInfo({
            open: response.status,
            alertMessage: response.message,
            alertType: response.status ? 'success' : 'error'
        })
    }

    return (
        <>
            <div className={classes.authPageContainer}>
                <Box className={classes.authPageInnerContainer}>
                    <Box className={classes.authPageInnerLeftGrid}>
                        <img src={AuthPageImg} className={classes.authPageImg} draggable={false} loading={"lazy"} alt={"no-image"} />
                        <Typography className={classes.authPageProductName}>Thrift Ware</Typography>
                        <Typography className={classes.authPageSolgan}>Your Billing, Your Way – Streamlined.</Typography>
                    </Box>
                    <Box className={classes.signInInnerRightGrid}>
                        <Typography style={{ ...commonStyles.authTitle }}>Sign in to your account</Typography>
                        <div style={{ ...commonStyles.displayProperty, flexDirection: "column", }}>
                            <Box sx={{ width: '100%', ...commonStyles.boxStyle }}>
                                {iconBank.emailIcon({ color: "orange !important", mr: 1, my: 0.5 }, { width: '24px', height: '24px' })}
                                <CustomTextField
                                    id={'mailId'}
                                    label={'Email Id'}
                                    handleOnBlur={(value) => setAuthDeatils((prevState) => ({ ...prevState, 'mailId': value }))}
                                />
                            </Box>
                            <Box sx={{ width: '100%', ...commonStyles.boxStyle }}>
                                {iconBank.lockIcon({ color: "orange", mr: 1, my: 0.5 }, { width: '24px', height: '24px' })}
                                <CustomTextField
                                    type={showPassword ? "text" : "password"}
                                    id={'password'}
                                    label={'Password'}
                                    handleOnBlur={(value) => setAuthDeatils((prevState) => ({ ...prevState, 'password': value }))}
                                />
                            </Box>
                            <Box container style={{ boxSizing: 'border-box', ...commonStyles.displayProperty, width: '100%' }}>
                                <div style={{ display: "flex", alignItems: "center", width: '60%', padding: '5px 0' }}>
                                    <Checkbox
                                        style={{ transform: "scale(0.8)", padding: '5px !important' }}
                                        checked={showPassword}
                                        onChange={() => setShowPassword(!showPassword)}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    <Typography style={{ width: '100%', fontSize: '14px', paddingLeft: '-5px !important' }}>Show Password</Typography>
                                </div>
                                <Box sx={{ display: "flex", alignItems: "center", width: '40%' }}>
                                    <Typography style={{ textDecoration: 'underline', cursor: 'pointer', color: 'rgb(246 103 1 / 89%)', fontSize: '14px', justifyContent: 'end' }} >Forgot Password</Typography>
                                </Box>
                            </Box>
                        </div>
                        <CustomButton
                            style={{ ...commonStyles.buttonStyle }}
                            text={'SigIn'}
                            endIcon={buttonOnClicked ? 'loadingIcon' : 'loginIcon'}
                            value={'SignIn'}
                            onClick={handleOnClick}
                            disabled={buttonOnClicked}
                        />
                    </Box>
                </Box>
            </div>
            <CustomSnackbar openSnackbar={snackBarInfo.open} message={snackBarInfo.alertMessage} alertType={snackBarInfo.alertType} handleSnackbarClose={() => setSnackBarInfo({ open: false })} />
        </>
    )
}

export default SignIn
