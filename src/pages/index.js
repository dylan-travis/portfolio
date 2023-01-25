import * as React from "react"
import "../styles.css"
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonAppBar from "../components/AppBar";
import ContentGrid from "../components/ContentGrid";
import { StaticImage } from "gatsby-plugin-image"
import { createTheme } from '@mui/material/styles';
import { Fade } from '@mui/material';
import ContentGrid2 from "../components/ContentGrid2";


const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});


const IndexPage = () => {
  return (
    <Container fixed>
      <ButtonAppBar />
      <div>
        <h1>Dylan Travis</h1>
        <h2>Musician, Designer, Developer</h2>
        <ContentGrid />
        <StaticImage src="../images/bar.jpg" alt="" />
      </div>
      <div>
        <h2>Projects</h2>
        <ContentGrid2 />
      </div>
      <StaticImage src="../images/merm.jpg" alt="a skull" layout="constrained" />
    </Container>
  )
}


export default IndexPage

export const Head = () => <title>Home Page</title>
