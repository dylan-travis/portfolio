import * as React from "react"
import "../styles.css"
import Container from '@mui/material/Container';
import ButtonAppBar from "../components/AppBar";
import ContentGrid from "../components/ContentGrid";
import { StaticImage } from "gatsby-plugin-image"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ContentGrid2 from "../components/ContentGrid2";
import { red } from '@mui/material/colors';
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
          <h2>Software Engineer | Data Engineer | Integration Specialist</h2>
          <ContentGrid />
          <StaticImage src="../images/bar.jpg" alt="" layout="fullWidth" />
        </div>
        <div>
          <h1>Projects</h1>
          <ContentGrid2 />
        </div>
        <div>
        <h2>Certifications</h2>
        <a href="https://www.credly.com/badges/4980e7c1-016d-43d4-82f5-108c38abbcd5/public_url"><StaticImage src="../images/cloud-digital-leader-certification.png" alt="gcp digital leader cert" layout="constrained" /></a>
        </div>
        <StaticImage src="../images/merm.jpg" alt="a skull" layout="fullWidth" />
        <p className="bottom">Illustrations courtesy the British Library.</p>
      </Container>
    </ThemeProvider >
  )
}


export default IndexPage

export const Head = () => <title>Dylan Travis | Musician, Designer, Developer</title>
