import { React, useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles";
import AuthPageImg from "../../assets/img/AuthPageImg.svg";

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
            marginTop: '-70px',
            borderRadius: "5%",
        },
    },
    authPageInnerLeftGrid: {
        height: "80%",
        width: "40%",
        ...commonStyles.displayProperty,
        flexDirection: "column !important",
        flexShrink: "1",
        "@media (max-width: 800px)": {
            display: "none !important",
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
    authPageProductName: {
        marginBottom: "1% !important",
        fontWeight: "900 !important",
        fontSize: "200% !important",
    },
}))

function AuthPage() {
    const classes = useStyles()

    const [authPage, setAuthPage] = useState("signIn")
    const [field, setField] = useState(getSectionFields(authPage))
    const [buttonOnClicked, setButtonOnClicked] = useState(false)
    const [reSendOtp, setReSendOtp] = useState(false)
    const [reSendOtpLoading, setReSendOtpLoading] = useState(false)
    const [authPageContent, setAuthPageContent] = useState({})
    const [snackBarInfo, setSnackBarInfo] = useState('')



    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        setField(getSectionFields(authPage))
        setButtonOnClicked(false)
        setReSendOtp(false)
        setReSendOtpLoading(false)
        setAuthPageContent({})
    }, [authPage])

    const handleCheckboxChange = (event) => {
        setShowPassword(event.target.checked)
    }


    const handleReSendOtp = () => {
        setReSendOtpLoading(true)
    }

    const handleOnClick = async () => {
        setButtonOnClicked(true)
        const response = await authPageAction(authPage, authPageContent)
        if (response.status === 'error') {
            setSnackBarInfo({
                open: true,
                alertType: 'error',
                alertMessage: response.message,
            })
        }
        else{
            setSnackBarInfo({
                open: true,
                alertType: 'success',
                alertMessage: 'User is exits',
            })
        }
        setButtonOnClicked(false)
        setReSendOtp(true)
    }

    const handleData = (id, value) => {
        setAuthPageContent((prev) => ({
            ...prev,
            [id]: value
        }))
    }

    return (
        <>
            <div className={classes.authPageContainer}>
                <Box className={classes.authPageInnerContainer}>
                    <Box className={classes.authPageInnerLeftGrid}>
                        <img src={AuthPageImg} height="70%" draggable={false} loading={"lazy"} alt={"no-image"} />
                        <Typography className={classes.authPageProductName}>Thrift Ware</Typography>
                        <Typography>Your Billing, Your Way – Streamlined.</Typography>
                    </Box>
                    <Box className={classes.authPageInnerRightGrid}>
                        <Typography style={{ ...commonStyles.authTitle }}>{field.title}</Typography>
                        <Grid style={{ ...commonStyles.displayProperty, flexDirection: "column", }}>
                            {field.body?.map((fieldObj, index) => (
                                <>
                                    {(() => {
                                        switch (fieldObj.type) {
                                            case "textField":
                                                return (
                                                    <Box sx={{ width: fieldObj.width, ...commonStyles.boxStyle }}>
                                                        {iconBank.emailIcon({ color: "orange !important", mr: 1, my: 0.5 }, { width: '24px', height: '24px' })}
                                                        <CustomTextField
                                                            id={fieldObj.id}
                                                            label={fieldObj.labelName}
                                                            inputProps={reSendOtp ? { ...fieldObj.inputProps, onClick: handleReSendOtp } : ''}
                                                            loading={reSendOtpLoading}
                                                            handleOnBlur={(value) => handleData(fieldObj.id, value)}
                                                        />
                                                    </Box>
                                                );
                                            case "password":
                                                return (
                                                    <Box sx={{ width: fieldObj.width, ...commonStyles.boxStyle }}>
                                                        {iconBank.lockIcon({ color: "orange", mr: 1, my: 0.5 }, { width: '24px', height: '24px' })}
                                                        <CustomTextField
                                                            type={showPassword ? "text" : "password"}
                                                            id={fieldObj.id}
                                                            label={fieldObj.labelName}
                                                            handleOnBlur={(value) => handleData(fieldObj.id, value)}
                                                        />
                                                    </Box>
                                                );
                                            case "optButton":
                                                return (
                                                    <OtpButton boxCount={4} />
                                                )
                                            case 'multiField':
                                                return (
                                                    <Grid container key={index} style={{ boxSizing: 'border-box' }}>
                                                        {fieldObj.input.map((fieldObjInput, subIndex) => {
                                                            switch (fieldObjInput.type) {
                                                                case 'checkbox':
                                                                    return (
                                                                        <Box key={subIndex} sx={{ display: "flex", alignItems: "center", width: fieldObjInput.width, padding: '5px 0' }}>
                                                                            <Checkbox
                                                                                style={{ transform: "scale(0.8)", padding: '5px !important' }}
                                                                                checked={showPassword}
                                                                                onChange={handleCheckboxChange}
                                                                                inputProps={{ 'aria-label': 'controlled' }}
                                                                            />
                                                                            <Typography style={{ width: fieldObjInput.width, fontSize: '14px', paddingLeft: '-10px !important' }}>{fieldObjInput.name}</Typography>
                                                                        </Box>
                                                                    );
                                                                case 'textButton':
                                                                    return (
                                                                        <Box key={subIndex} sx={{ display: "flex", alignItems: "center", width: fieldObjInput.width }}>
                                                                            <Typography onClick={() => setAuthPage(fieldObjInput.onClickStateValue)} style={{ textDecoration: 'underline', cursor: 'pointer', color: 'rgb(246 103 1 / 89%)', fontSize: '14px', justifyContent: 'end' }} >{fieldObjInput.name}</Typography>
                                                                        </Box>
                                                                    )
                                                                case 'empty':
                                                                    return (
                                                                        <Box key={subIndex} sx={{ width: fieldObjInput.width }} />
                                                                    )
                                                                default:
                                                                    return null
                                                            }
                                                        })}
                                                    </Grid>
                                                );
                                            default:
                                                return null;
                                        }
                                    })()}
                                </>
                            ))}
                        </Grid>
                        <CustomButton
                            style={{ ...commonStyles.buttonStyle }}
                            text={field.button.value}
                            endIcon={buttonOnClicked ? field.button.onClickIcon : field.button.defaultIcon}
                            value={field.button.value}
                            onClick={handleOnClick}
                            disabled={buttonOnClicked}
                        />
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default AuthPage
