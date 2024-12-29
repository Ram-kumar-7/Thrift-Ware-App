import { AccountCircle } from "@mui/icons-material";
import LoginIcon from '@mui/icons-material/Login';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/Lock';
import { CircularProgress } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
const commonStyles = {
    width: '16px',
    height: '16px'
}

export const iconBank = {
    loginIcon: (sx, style) => <LoginIcon sx={sx} style={{ ...commonStyles, ...style }} />,
    emailIcon: (sx, style) => <EmailIcon sx={sx} style={{ ...commonStyles, ...style }} />,
    lockIcon: (sx, style) => <LockOpenIcon sx={sx} style={{ ...commonStyles, ...style }} />,
    accountIcon: (sx, style) => <AccountCircle sx={sx} style={{ ...commonStyles, ...style }} />,
    loadingIcon: (sx, style) => <CircularProgress sx={sx} style={{ ...commonStyles, ...style }} />,
    sendIcon:(sx, style) => <SendIcon sx={sx} style={{ ...commonStyles, ...style }} />
}