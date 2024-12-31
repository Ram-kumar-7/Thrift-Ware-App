import { AccountCircle } from "@mui/icons-material";
import LoginIcon from '@mui/icons-material/Login';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/Lock';
import { CircularProgress } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import Person2Icon from '@mui/icons-material/Person2';

const commonStyles = {
    width: '16px',
    height: '16px'
}

export const iconBank = {
    loginIcon: (sx, style) => <LoginIcon sx={sx} style={{ ...commonStyles, ...style }} />,
    Dashboard: (sx, style) => <SpaceDashboardIcon sx={sx} style={{ ...commonStyles, ...style }} />,
    emailIcon: (sx, style) => <EmailIcon sx={sx} style={{ ...commonStyles, ...style }} />,
    lockIcon: (sx, style) => <LockOpenIcon sx={sx} style={{ ...commonStyles, ...style }} />,
    accountIcon: (sx, style) => <AccountCircle sx={sx} style={{ ...commonStyles, ...style }} />,
    loadingIcon: (sx, style) => <CircularProgress sx={sx} style={{ ...commonStyles, ...style }} />,
    sendIcon: (sx, style) => <SendIcon sx={sx} style={{ ...commonStyles, ...style }} />,
    BagIcon: (sx, style) => <ShoppingBagIcon sx={sx} style={{ ...commonStyles, ...style }} />,
    MenuIcon: (sx, style) => <MenuIcon sx={sx} style={{ ...commonStyles, ...style }} />,
    ClearIcon: (sx, style) => <ClearIcon sx={sx} style={{ ...commonStyles, ...style }} />,
    Profile: (sx, style) => <Person2Icon sx={sx} style={{ ...commonStyles, ...style }} />,

}