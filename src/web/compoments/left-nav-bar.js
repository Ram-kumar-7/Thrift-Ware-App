import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from "@mui/styles"
import BrandImg from '../assets/img/nav-bar-brand.png'
import { iconBank } from '../assets/icons'


const useStyles = makeStyles(() => ({
    leftNavBarOuterContainer: {
        position: 'relative',
        height: '100%',
        width: '300px',
        padding: '25px ! important',
        "@media (max-width: 800px)": {
            display: 'none !important',
            height: '85%'
        }
    },
    showLeftNavBarOuterContainer: {
        "@media (max-width: 800px)": {
            display: 'block !important',
            height: '85%'
        }
    },
    leftNavBarContainer: {
        display: 'flex',
        flexDirection: "column",
        height: '90%',
        background: '#030621',
        borderRadius: '40px',
        padding: '15px',
    },
    branding: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: "center !important",
        alignContent: "center !important",
        height: '10%',
        marginLeft: '-15px !important',
    },
    brandingLine: {
        borderBottom: '2px solid #22274d !important',
        marginLeft: '-15px',
        marginRight: '-15px',
        width: '300px',
    },
    title: {
        color: '#fff',
        width: '100% !important',
        marginTop: '10px!important',
        fontSize: '30px!important',
        marginLeft: '-18px!important',
        fontWeight: '600!important',
    },
    navList: {
        marginTop: '40px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between ! important'
    },
    navItem: {
        display: 'flex',
        padding: '10px',
        borderRadius: '20px',
        paddingLeft: '30px',
        cursor: 'pointer',
        marginBottom: '15px',
        '&:hover': {
            border: '1px solid #22274d'
        }
    },
    activeItem: {
        background: '#ace05e',
        '&:hover': {
            border: 'none'
        }
    },
    navItemText: {
        color: '#fff',
        fontSize: '18px !important',
        fontWeight: '600 !important'
    },
    navItemTextActive: {
        color: '#000',
        fontSize: '18px !important',
        fontWeight: '600 !important'
    },
    navMenu: {
        display: 'none',
        "@media (max-width: 800px)": {
            display: 'block !important',
            height: '50px',
            width: '50px',
            margin: '30px',
            marginTop: '20px',
        }
    },
    navMenuActive: {
        position: 'absolute',
        right: '-8px',
        top: '15px'
    }
}))


function LeftNavBar(props) {
    const { sectionFields, active, setActive, isMenuActive, setIsMenuActive } = props
    const classes = useStyles()

    return (
        <>
            <div className={`${classes.leftNavBarOuterContainer} ${isMenuActive ? classes.showLeftNavBarOuterContainer : ''}`}>
                <Box className={classes.leftNavBarContainer}>
                    <div className={classes.branding}>
                        <img src={BrandImg} alt={'BrandImg'} />
                        <Typography className={classes.title}>Thrift Ware</Typography>
                    </div>
                    <div className={classes.brandingLine}></div>
                    <div className={classes.navList}>
                        {sectionFields.map((fieldObj, index) => (
                            <Box key={index} className={`${classes.navItem} ${active === fieldObj.id ? classes.activeItem : ''}`} onClick={() => setActive(fieldObj.id)}>
                                {iconBank.Dashboard({ color: `${active === fieldObj.id ? '#000' : '#fff'} !important`, mr: 1, my: 0.5 }, { height: '20px', width: '20px' })}
                                <Typography className={`${classes.navItemText} ${active === fieldObj.id ? classes.navItemTextActive : ''}`} >{fieldObj.label}</Typography>
                            </Box>
                        ))}
                    </div>
                </Box>
            </div>
            <div className={`${isMenuActive ? classes.navMenuActive : classes.navMenu}`}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    onClick={() => setIsMenuActive(!isMenuActive)}
                >
                    {isMenuActive ?
                        iconBank.ClearIcon({}, { width: '40px', height: '40px' })
                        :
                        iconBank.MenuIcon({}, { width: '30px', height: '30px' })
                    }
                </IconButton>
            </div>
        </>
    )
}

export default LeftNavBar