import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "gatsby";
import downloadFile from '../../static/DylanTravisResume.pdf';



export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const menuLinks = [
        {
            name: 'Home',
            link: '/',
            index: 1
        }
    ]

    console.log(downloadFile)

    const menuLinks2 = [
        {
            name: 'LinkedIn',
            link: 'http://linkedin.com/in/dylantravis1',
            index: 1
        },
        {
            name: 'GitHub',
            link: 'http://github.com/chemicalpleasures',
            index: 2
        },
        {
            name: 'Email',
            link: 'mailto:dylantravis99@gmail.com',
            index: 3
        },
        {
            name: 'Resume',
            link: downloadFile,
            index: 4
        },
    ]

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {menuLinks.map(links => (
                    <ListItem key={links.index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {links.index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <Link to={links.link}><ListItemText primary={links.name} /></Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {menuLinks2.map(links2 => (
                    <ListItem key={links2.name} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {links2.index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <a href={links2.link}><ListItemText primary={links2.name} /></a>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="secondary"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
