import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Drawer from './Drawer';



const theme = createTheme({
    palette: {
        primary: {
            light: '#FFFFF',
            main: '#212121',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            main: '#FFFFFF',
        },
    },
});


export default function ButtonAppBar() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Drawer />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}