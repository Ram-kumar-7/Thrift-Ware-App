
import React from 'react'
import { Box, Fade, Popper } from '@mui/material'

function CustomPopper(props) {

    const { anchorEl, handleData, list } = props

    const handleOnClick = (obj) => {
        handleData && handleData(obj)
    }


    return (
        <Popper
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            style={{ zIndex: 1 }}
            transition
        >
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={150}>
                    <Box
                        sx={{
                            width: '100px',
                            backgroundColor: '#030621',
                            color: '#fff',
                            borderRadius: '4px',
                            textAlign: 'center',
                            maxHeight: '200px !important',
                            overflow: 'auto',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        {list.map((listObj) => {
                            return <Box
                                key={listObj.id}
                                sx={{ cursor: 'pointer', padding: '5px 0' }}
                                onClick={() => handleOnClick(listObj)}
                            >
                                {listObj.label}
                            </Box>
                        })}
                    </Box>
                </Fade>
            )}
        </Popper>
    )
}

export default CustomPopper