const React = require("react")

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <link
      rel="stylesheet"
      href="../styles.css"
    />
  ]),
    setPostBodyComponents([
      <script src="p5.min.js"></script>,
      <script src="vanta.topology.min.js"></script>,
    ])
}