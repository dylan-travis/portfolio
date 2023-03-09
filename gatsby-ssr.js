const React = require("react")

// Adds a class name to the body element
// exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
//   setBodyAttributes({
//     className: "my-body-class",
//   })
// }

// Wraps every page in a component
// exports.wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>
// }


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