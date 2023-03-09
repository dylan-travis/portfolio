import * as React from "react"
import "../styles.css"
import Container from '@mui/material/Container';
import ButtonAppBar from "../components/AppBar";
import ContentGrid from "../components/ContentGrid";
import { StaticImage } from "gatsby-plugin-image"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ContentGrid2 from "../components/ContentGrid2";
import { red } from '@mui/material/colors';
import TOPOLOGY from 'vanta/dist/vanta.topology.min'
import VantaContainer from "../components/VantaContainer";


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
        <VantaContainer />
        <div>
          <h2>Musician, Designer, Developer</h2>
          <ContentGrid />
          <StaticImage src="../images/bar.jpg" alt="" layout="fullWidth" />
        </div>
        <div>
          <h1>Projects</h1>
          <ContentGrid2 />
        </div>
        <StaticImage src="../images/merm.jpg" alt="a skull" layout="fullWidth" />
      </Container>
    </ThemeProvider>
  )
}


export default IndexPage

export const Head = () => <title>Dylan Travis | Musician, Developer, Designer</title>
