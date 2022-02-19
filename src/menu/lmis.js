
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import { Tooltip } from '@mui/material';
import { ListItemButton } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LMIS(props) {

    const [openLMIS, setOpenLMIS] = useState(true)
    const navigate = useNavigate()

    return (
        <List>
            <Tooltip title="LMIS" placement="right">
                <ListItemButton onClick={ () => setOpenLMIS(!openLMIS)}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Facility Orders" />
                {openLMIS ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
            </Tooltip>
            <Collapse in={openLMIS} timeout="auto" unmountOnExit>
                <List component="span" disablePadding>
                <Tooltip title="Home" placement="right">
                <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('/lmis/dashboard')}>
                    <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                </Tooltip>
                <Tooltip title="ART" placement="right">
                <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('/lmis/art')}>
                    <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="ART" />
                </ListItemButton>
                </Tooltip>
                <Tooltip title="HIV Testkits" placement="right">
                <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('/lmis/hivtestkits')}>
                    <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="HIV Testkits" />
                </ListItemButton>
                </Tooltip>
                <Tooltip title="Laboratory" placement="right"> 
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Laboratory" />
                </ListItemButton>
                </Tooltip>
                <Tooltip title="SMC" placement="right">
                <ListItemButton sx={{ pl: 4 }} >
                    <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="SMC" />
                </ListItemButton>
                </Tooltip>
                </List>
            </Collapse>
        </List>
    )
}