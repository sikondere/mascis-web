
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
import { ListItemButton } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LMIS(props) {

    const [openLMIS, setOpenLMIS] = useState(true)
    const navigate = useNavigate()

    return (
        <List>
            <ListItemButton onClick={ () => setOpenLMIS(!openLMIS)}>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="LMIS" />
            {openLMIS ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openLMIS} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('/lmis')}>
                    <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('/lmis/art')}>
                    <ListItemIcon>
                    <AccessAlarmIcon />
                    </ListItemIcon>
                    <ListItemText primary="ART" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('/lmis/hivtestkits')}>
                    <ListItemIcon>
                    <ThreeDRotation />
                    </ListItemIcon>
                    <ListItemText primary="HIV Testkits" />
                </ListItemButton>
                </List>
            </Collapse>
        </List>
    )
}