// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fit,
  Fill
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});


export default class WhatIsReact extends React.Component {

  render() {

    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} >


      
      <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
        <Heading size={4} textColor="primary" caps> What is React?</Heading>
        <Layout>
          <Fill>
            <Text margin="10px 20px 0 0" textColor="tertiary"> "Tool for buidling UI Components." </Text>
          </Fill>
          <Fill>
            <Text margin="10px 0 0 20px" textColor="tertiary"> "A JavaScript Library for building user interfaces." </Text>
          </Fill>
        </Layout>

        <Layout>
          <Fit></Fit>
          <Fill>
            <Text textAlign="center" margin="20px 0 0" textColor="tertiary"> "User Interface Library." </Text>
          </Fill>
        </Layout>
      </Slide>

    <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
      <Heading size={4} textColor="primary" caps> What is React?</Heading>
      <Layout>
        <Fill>
          <Text margin="10px 20px 0 0" textColor="tertiary"> "Tool for buidling UI Components." </Text>
        </Fill>
        <Fill>
          <Text margin="10px 0 0 20px" textColor="tertiary"> "A JavaScript Library for building user interfaces." </Text>
        </Fill>
      </Layout>

      <Layout>
        <Fit></Fit>
        <Fill>
          <Text textAlign="center" margin="20px 0 0" textColor="tertiary"> "User Interface Library." </Text>
        </Fill>
      </Layout>
    </Slide>
    </Deck>
    );
  }
};