import * as React from "react"
import "../styles.css"
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonAppBar from "../components/AppBar";
import ContentGrid from "../components/ContentGrid";
import { StaticImage } from "gatsby-plugin-image"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Fade } from '@mui/material';
import ContentGrid2 from "../components/ContentGrid2";
import Drawer from "../components/Drawer";
import { red } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: red[500],
      darker: '#053e85',
      white: '#FFFFFF',
      mode: 'dark',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#fff',
    },
    white: {
      main: '#FFFFFF',
      contrastText: '#fff',
    },
  },
});


const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <ButtonAppBar />
        <div>
          <h1>Dylan Travis</h1>
          <h2>Musician, Designer, Developer</h2>
          <ContentGrid />
          <StaticImage src="../images/bar.jpg" alt="" layout="fullWidth" />
        </div>
        <div>
          <h2>Projects</h2>
          <ContentGrid2 />
        </div>
        <StaticImage src="../images/merm.jpg" alt="a skull" layout="fullWidth" />
      </Container>
    </ThemeProvider>
  )
}


export default IndexPage

export const Head = () => <title>Dylan Travis | Musician, Developer, Designer</title>
