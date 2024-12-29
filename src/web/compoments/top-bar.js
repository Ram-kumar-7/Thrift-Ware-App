import React, { useState } from 'react'
import { makeStyles } from "@mui/styles"
import { iconBank } from '../assets/icons'
import { Box, IconButton, Typography, ClickAwayListener } from '@mui/material'
import { useMediaQuery } from '@mui/material';
import Language from '../section-fields/language.json';
import CustomPopper from './inputs/custom-popper';

const useStyles = makeStyles(() => ({
    topBarLeft: {
        position: 'absolute',
        left: '430px',
        top: '38px',
        "@media (max-width: 800px)": {
            display: 'none'
        }
    },
    welcomeText: {
        fontSize: '40px !important',
        fontWeight: '700 !important',
        color: '#030621 !important'
    },
    topBarRight: {
        position: 'absolute',
        right: '30px',
        top: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        paddingLeft: '20px',
        "@media (max-width: 800px)": {
            right: '10px',
            top: '22px'
        }
    },
    languageSettings: {
        fontSize: "20px !important",
        marginRight: '30px',
        cursor: 'pointer',
    },
    languageText: {
        fontSize: "20px !important",
        fontWeight: '600 !important'
    }
}))

function TopBar({ active, selectedLanguage, setSelectedLanguage }) {
    const classes = useStyles()
    const isMobile = useMediaQuery('(max-width:800px)')
    const [anchorEl, setAnchorEl] = useState(null)
    const [currentActive, sectionActive] = useState('')
    const [list, setList] = useState([])

    const handleClick = (event, type) => {
        setAnchorEl((prev) => (prev === event.currentTarget ? null : event.currentTarget));
        sectionActive(type)
        setList(type === 'lang' ?
            Language.filter(langObj => langObj.id !== selectedLanguage.id) :
            [{ id: "logout", label: "Logout" }])
    }

    const handleClickAway = (field) => {
        if (!currentActive || currentActive === field) {
            setAnchorEl(null)
        }
    }

    const handleLanguageChange = (languageObj) => {
        if (currentActive === 'lang') {
            setSelectedLanguage(languageObj)
        }
        setAnchorEl(null)
    }

    return (
        <>
            {active === 'dashboard' && <div className={classes.topBarLeft}>
                <Box>
                    <Typography className={classes.welcomeText}>Welcome Ram..!</Typography>
                </Box>
            </div>
            }
            <div className={classes.topBarRight}>
                <ClickAwayListener onClickAway={() => handleClickAway('lang')}>
                    <Box
                        id="languageSettings"
                        className={classes.languageSettings}
                        onClick={(event) => handleClick(event, 'lang')}
                        sx={{ cursor: 'pointer', display: 'inline-block', padding: '8px' }}
                    >
                        <Typography className={classes.languageText}>{selectedLanguage.label}</Typography>
                    </Box>
                </ClickAwayListener>
                <ClickAwayListener onClickAway={() => handleClickAway('logout')}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={(event) => handleClick(event, 'logout')}
                    >
                        {iconBank.Profile({}, {
                            width: isMobile ? '28px' : '40px', height: isMobile ? '28px' : '40px',
                        })}
                    </IconButton>
                </ClickAwayListener>
                <CustomPopper
                    anchorEl={anchorEl}
                    handleData={handleLanguageChange}
                    list={list}
                />
            </div>
        </>
    )
}

export default TopBar