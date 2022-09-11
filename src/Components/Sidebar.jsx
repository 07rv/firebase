import React from 'react'
import {
    Box, List, ListItem,
    ListItemButton, ListItemIcon, ListItemText
} from '@mui/material';
import WifiTetheringErrorIcon from '@mui/icons-material/WifiTetheringError';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import StarRateIcon from '@mui/icons-material/StarRate';
import PanoramaIcon from '@mui/icons-material/Panorama';

const Sidebar = () => {
    return (
        <Box flex={1.15} sx={{ display: { xs: "none", sm: "block", } ,}}>
            <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href='/'>
                            <ListItemIcon>
                                <WifiTetheringErrorIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href='/blog'>
                            <ListItemIcon>
                                <Diversity2Icon />
                            </ListItemIcon>
                            <ListItemText primary="Cosmos" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#pages'>
                            <ListItemIcon>
                                <WbSunnyIcon />
                            </ListItemIcon>
                            <ListItemText primary="Soloar System" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#group'>
                            <ListItemIcon>
                                <StarRateIcon />
                            </ListItemIcon>
                            <ListItemText primary="Universe" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#marketplace'>
                            <ListItemIcon>
                                <PanoramaIcon />
                            </ListItemIcon>
                            <ListItemText primary="Photo Gallery" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar