// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Layout,
  Fit,
  Fill,
  Image, 
  CodePane,
  Link
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

// code to be shown
const classExample = "class LocalHackDay extends React.Component {\n \
  render() { \n\
    return <h1> Hello Hackers</h1> \n\
  }\n \
}"

const functionalExample = "const myFunction = () =>  (\n \
    return <h1> Hello Hackers</h1> \n\
)"

const jsxElementExample = "const element = ( \n\
  <h1 className=\"LHD\"> \n\
    Hello, Hackers \n\
  <h1/> \n\
  )"

const jsxCreateElementExample = "const element = React.createElement ( \n\
    'h1', \n\
    {className: 'greeting'}, \n\
    'Hello, World' \n\
  )"

const stateExample = "class LocalHackDay extends React.Component {\n \
  constructor(props) { \n\
    super(props) \n\
    this.state = { \n\
      hackers: 0, \n\
      year: 2018, \n\
    } \n\
}"

const propsExample = "<Hello name={this.state.name}\n"

const changeStateExample = "ths.setstate ({ \n\
  hackers: 105, \n\
  term: 2018 \n\
})"

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica",
}, {
  textMargin: "10px 0 0"
}
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Welcome To Local Hack Day 2018
          </Heading>
          <Text size={3} margin="10px 0 0" textSize="30px" textColor="tertiary" fit bold>
            Introduction to React
          </Text>
          <Text textColor="secondary">
            By Devon Soto
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={4} textColor="primary" caps> What we'll learn today</Heading>
          <List>
            <ListItem textColor="tertiary" bold={true}>What is React?</ListItem>
            <ListItem textColor="tertiary" bold={true}>Why React?</ListItem>
            <ListItem textColor="tertiary" bold={true}>Components (Class and functinonal)</ListItem>
            <ListItem textColor="tertiary" bold={true}>JSX</ListItem>
            <ListItem textColor="tertiary" bold={true}>State</ListItem>
            <ListItem textColor="tertiary" bold={true}>Props</ListItem>
            <ListItem textColor="tertiary" bold={true}>How to create a simple Todo List app</ListItem>
          </List>
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

        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary" caps> What is React?</Heading>
          <Layout>
            <Fill>
              <Image margin="10px 20px 0 0" display="inline-block" src="https://cdn-images-1.medium.com/max/1600/1*fLvLBaoQ4FIt7xf5bY8CBg.png"/>
            </Fill>
            <Fill>
              <Image margin="10px 0 0 10px" display="inline-block" src="https://cdn-images-1.medium.com/max/2000/1*hKCRiux-_nfFjAZjCZj6mg.png"/>
            </Fill>
          </Layout>

          <Layout>
            <Fill>
              <Text bold={true} textAlign="center" margin="20px 0 0" textColor="tertiary"> Maintained by Facebook </Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 20px 0" size={4} textColor="primary" caps> Why React?</Heading>

          <Layout >
            <Fit margin="20px 0 0" >
              <Text textColor="tertiary" caps>Easy To Learn</Text>
            </Fit>
            <Fill>
              <Text textColor="tertiary" caps>Downward Data Binding</Text>
            </Fill>
            <Fit>
              <Text textColor="tertiary" caps>Open source</Text>
            </Fit>
          </Layout>

          <Layout>
            <Fill>
              <Image height="150px" width="150px" margin="10px 0 0 0" src="https://cdn.techgyd.com/50-Best-Facebook-Logo-Icons-GIF-Transparent-PNG-Images-87.gif"/>
            </Fill>
            <Fill>
              <Image height="150px" width="150px" margin="10px 10px 0 0" src="https://cdn.vox-cdn.com/thumbor/Yq1Vd39jCBGpTUKHUhEx5FfxvmM=/39x0:3111x2048/1200x800/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"/>
            </Fill>
            <Fill>
              <Image height="150px" width="150px" margin="10px 0 0 10px" src="https://assets.entrepreneur.com/content/3x2/2000/1405612741-airbnb-why-new-logo.jpg"/>
            </Fill>
            <Fill>
              <Image height="150px" width="150px" margin="10px 10px 0 0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA/FBMVEX///8AXLnxiQL///3//v////wAWrj8/////f8AXbgAVbYeab3///sAWLgAXLvxhwAAUrYAXrbxfgDxgwAATLMASrQBW73viwAAVLQAUbgAVrMARrAAXrzxgQAAWLsAUbOwwuEARbb1ewByls29zurj6/cARazxkiH1rGP3w53438P0+/4AQramveAqarvS3+8qc8Gctt+SrNpKgcdtktHd5vHF1+tbiczypVCEo9b1u5DynztUhcpEe8j96davxuL417X1vIH3wpn0lzCtt+JShMo6ecPL2/SPotL0m0T/+OuDp9j669/1wpHyuHH1kSX30Kv548v1pWD2snqQsWalAAAQK0lEQVR4nO1dCVvbOBOWkW1FwWecg5xcSWHJAiWc7ZY0lK9XlrZ0+///yzdyEktyHFMg2Nnv0/vs0wXiQ+MZzbwzGjkIKSgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKPzfABsGLsC/WEcWhl90AMYYISP8H8l7fM8HIbpOSJIgGBcIznw8L4BQT9Zw9Mfb/b9u90L8tf/2j9FQZx/8L4hoHfxxtbbTDlw3cNcmcOHndqntXn04MPIe3tMAZjmZa2j44bYURJLFweS8/TAEU4ZZioie97h/H1gnGCxweLNWCtyau0jAqT7bazdDdlLhX2SxxCLIuq+BHYJ4tTT51tZqLqiytHc//le5VYLGv9rttdpEuFQVrjElw79B+9c472H/DmD2GdhAd1eldLGSrDUo7d8RYkFsWWlrZe5lvF96rHjMWkHI0r6FDIytvKVYDN2CwX0rPWCXCyRkM9Ytvc1bhnSAz//pBhOje4IS3TBS/lxVFkBgEiK0336C+mSU9uFRkULe8swDg4MY1oJnC+iuBbUhcIa85ZmHrrMZuPZ8EcFSSx9W0VIxumo/PPtchvRDmFMN/slbnBh0CwLZXjuBvTDG4rJ/g6BUKrV/3N7+dXv7A35uB2uTvyc/lfaehQorxMpZEEzkn4yw1Jh0e7/uDxhnmU2v8cH9rz1gdUzIBE0zNa4UxbHQXWliXzENgtRBqfb2YHqcoTPWgzGZxHRy8LZWmrC2mIQscgR3+Qk0j2E7OQJC3vDhDtJ8xOTSwd0amGX98LNRMCyWLQ2/ufPOiV0K/M0wb7Em0IlOhrHZ5Ib6q7mlr6MHzyfo4Gs7nLFzuty5Ww2XapC7IOYga2FY29m/+40qhQWR9O6q7SYZQXu8CmHRIuO5KQi/1dp/DZFRsH4jb2f5/fBraX4ag6eyVkBEjPbcMCRII3PdEehGJw9LCGyPsIxklDgff2QhQhoMCFlXCWWY9v6jJxBB+zvzscO9AieVY1y0ChjdtOcEDEoj9OiqErC+EVxKvhjM728oz4wY7v1zZ85FBHtjYjx6/mAIltaP2KVA4tLPlxj5b4+KWEEt7mbaVyzgPdqyMDEKiFzJ2RejRIGVow4t9DUWB2tr7e9PD2JER9+DOUuFqajreUk5kitO4ChK354xbVgV8m08Q3FLo/wy4nE8nWB1lkmx+0koMGZ+EzNU4A4WIjn50/14OhF8Z97nybUyVonEYKhrsavuk5wk/BmvGgb76NkjgScEEVZ+cqVhHmsaBBPZt4Pfu0Xk+bVOMPK9WOh3f+RB3jAEaMnL1FjS+vxHrVs6Gbdjqx3B6PkDfjQwitOP9gH4wmd7dcwSsoM5H72MIT8W9zE+6n5f2qWZtxHTRbfWvkck87pNbN3MdZeXrgInCgsZwhSHqz+eCT4Po5gKd34+PUrEgQn5WRL9qVsrjcJ14izxQ2ZXIbda1rXZbP7HFfgu0NM9lGU2rBtzsbA0JsvN48axrCzbHAPi776kQCAzRNeXakXkJpDn+f7yZsHDKGAsq9AtGZgs14qwtRO7RZaOxkIHEnesBTdAcZbtCW5i9xgt9/LpIPdt+fkuvwSv62OpxOgG9xkqERib9Hxhjiw9Q8WY/FMT3KnbHi37Fimw0Fiah6XhEghpDJjVgAReU9sZZ+hpdMhwxHh8i/ALWBAme0LUD65Qhnk+WNCYcWO3xh6y274zXqaOMg4XNEINwlTP0pfqqECGbhB2iMC9h6xP7yXuQ+5Y1x8TMajdoSxrbtgiBrG+Be0A/vtlgNUWXmSOYGT9YuvFpeDGgtwiS16qg0yEoOFoNAzXA9HL8P6CPr0Ja2XBuVUUFRQUFBQUFBQUFBQUFBQUFBTyBKut8crQAzUitpl77pAHuvswiu3SY82LmcEwUO90s+gVQ3id1930TiELxntx6kyPhzPq3vrf/Qe2xWLUO1vfaExP6Vz2s1w/xIhUbOpoDCZD8yT9eB0NmiatalNQqmneZi9V8xgd/6lRzZneQ/O0TDcK4y1vcm82WkCn/MDxvW3HoX4kIfxSNddTTyGopYlPRKukP5Flo+tpAqhTvkg7GqND6fhQL9XKeeot+ttUukezv1QJHgDuN+XxNlLNFKNTOy6h5jQOU8+RH6Lm0OWv4KXcXUfrpqQQ7Tr1eCTrI9SJZqeeg94UpXM23mS5gQZjNCjKZvoq9fiL+pyEvkObqUP+1PHF4+sP+Ovlghgw5qo06PIxwotXMAcNh5ubNjuxfpG2sLot36CZaU8Ue4lOBdQgDMA7QSlriEdmNNoq9WfSeoOUvRTHFeoI1wfPm+XeYOAb6FozRQntj2ixJyDN6my05lGkwnDUC6P4Yd0XJSwO4hznRcHW8k6KjjgCrYwWc46uFz0Ne7fjRCK+SgkAu0VJwvLFyywzp+B4k8oSHiePAJ4G2m1MhXJa3nuPTy9vK3kiYl1HQAm4jVCn/qLCJMOTJSweLpIQodb0SF9rVc6FyGjvJkcAjHH/T18QkBY/vqgsyThrSBKal8mHgZZ621OKR4GZoHXhHHvBtTEYth/RWK1DN1PZwQvhfUVmVcVkfYDBva/7IbPUqppfRx+57mnlfIEOWbzlVuoAKX1ZYRJH0X8lCqg5i2gmRmc2H+o6+iJwhQWqgafySeJMtPOCkiwCRr48CG8r+TiM6rMDIQm5BBIe6d5pvEvWoYHKsoBnLynKAlhAVCQl2smjIOi8wg/aGMAMiySkZiXxHIyPK+Klnc2tHHYF6Ua3Lj1nmuw2DCFzop2NLdQrRxL6WiUx64Jsa0OSsNnPoZfGIlh6zlWtnOgNCLruRCP1IXAjrkO/yqhKElc5k+yjc5RlBSMauY6vxaTP1+pbScdh1OTzlVaIISRevmYfJXlgjGKxNtPMaQZDjyXuVYjfSbjY5IHN9MFqdyMLBBIO9jffAY97ZUlCSEJy2LsGPvJYdHg+NZ3E44TMqQXeSKxoOC3qdVFCVbG7KQoImVNer4/wTCpG/UofJexmPbL5MRuHoIwL8cGAASZktoNi9FQgS+xco7xeyLdrS/lF/X1CNtRvCvwSWAH4FdFDgd3O5334WmTdmneYlnu+KLbqUhYM+pgfbdfjCSFwNkM30LVIFRKLhBVHpN2QtuTVedkrV2N5+PyzfiP4ffMMXLCBTkQPxRQUP+d4k9uGU6V19n7ebCSaw7rs1ZtE1iGG2AApQqSyTTBjbBnHEPMjHdmXcm2ATcpDj1/WX0SWssHAk/KLeldePdENDJkTz9VZhsDerQsScuZWj0dzoOodwYM5CwhvJsDdekuUsPi3XG+D6bO1YUbhELxK2LuNzoQKRatyLF1Th4QSAk+kY582c8ic+Gi2JSuF3EiaL5jgS7saJessMoAdF9CWx2s1dHMgnQPemDR9Pr+rNs1WKAkYncql7yaJzylvdoBDfRbdQ4vslXl1Uet8kq4JV7iQKP3GmwwlikOX3aJGyxdS9AbaE8U+h2UIxtSraFxHjl+R564Vq6fXuxlKFEeMuIVVTflz8QmYr6N3ZrzhTM6hsgiEyPm908zz1XsGkXNxB4QQoQtrTr7ZGLC3sIcfCOtKviOboYHla9qvs1yviAMUclZs8bJf1W9KnxPEq1W+I2S7RpPPQ79DpeI+PpfyTu8kj7wiGkwBokFViyJGPGfHn3k+Tx0uPRYX53xtuyfQWQM8rSghXDHPvTJGuFLLK0vVorRSigWf4RRPI2vDaBDliK2qtrElXfJMWk0t58a6GdiXAvgdk9c/TVt2/cKaEyOgHBeRJQJ7aVwKaiJoXZTQ/pj7m8zfFHn0Bm1ui+8YIsJaOBXqqXCAlEGJejL6f/KOBh8yyiW+yeBp6EpLpZDpGOJngvB1riigNVKNp3IsWGK3wasemlPpGXm/HtJoStRUylZ3BWIuZghWjCqw5dXowxOe31PNtsMEJV9c8yoF/GC+YxFtCodyC2YFgNnf4YdzMejB7OUSfhKv12DPJe99hycbIgVhcyrMLyAr74uTrdmXK05CCqiZ28IHQqjU/M2tLEVZALkAr1XOJ/tJwT+Igc2kqCA5xTPbiaYiELdI+vOyuOafbZtQMiwkd/Z4h5N5qCPInPifWVFXsjYQn9diPE7cDjc4g6Can7E0ScCxCB0FN2HNicnQxfIXBvWFoq/jc0l2be6bneKXbIVJBEFbcvnWm0go5h3UcZp63GHQRiRJy5nl8QYwCIEj1VPb5TICQT2px61VnqzrGuiQUzZqv547Uejq8qe1GKyz9Xteo6Hbq/DtOqycJjrT2UqpLgR16jRY4igrUaADtDWJlgZb5aC8kmhe5x4pEFtlA22IEhYnCzQ62ubVJCdM/uXRCpTOp7YX/slAg02/Gp23kd6YmxEsjLqbNo3U6GjTBZrPAmVz5jtsLfRaVD3ri8M6kdkc+2PG4iQDVzQ+d0w67ZsY8Hnm0Pl2GFBXrPStW7qc35sNtNx3Tz0NBmjjWmBnvjlN915z9uV7Ce1EWCqp2afh98xJ9MG+zDU3nIHoYY8bn4daIwzf/VdCXTupEyVWj2mG3xcord8zn7UCOmQ4LgtdQI69zl7y2a3zurWpzZ8D2rm0fR7dvS57yc0bPg1btNxbhVeyTyD2uLVohb2J5EuDW24noX8N+Pmhxwka60MBcO/jV8FlFVZGwjOx/umDTeroqCMs/W7NTydQ2HmZ9wuzrm8g60LlilFZI89KooStOq88UGezC95nW2gPhQxhfj7pBrI1Ya5usg4FXn2kfr2LVudbPHtSBsUKbp8FN2L6C/p7dxtOZKZO+ZzxHMFlrULmNANGQqskSLiLpNywOMDJ/dzv65zw+aB5SJ24hOZR1mKkAEsNh2yBQmJyXhclr8P3t4U2AHsQKlWyhJWBJTfAsJVQcXWlaSz6ekqfO9OqdokkIlf/nK0QqYDYJmVQFWHdkNKUvTFfOLMzqxShjrBCsL0inDQEKWC5g6Tf547GSckQLjwhyrxC5BU3UjuPzu6FMJDc41Y+55zT97ePF50n7ody/ErvuM5ZQvFwFTjpDBhhaam0fsFdaWtBlyxDAX2KOjM1v34hMj3WPpWhCL+Bssafv/f+S9Qn5HsLmvgZ8EnkoVhz12F9tm9TM72VyCtEnNlONBUb/+Frv2nbDImgeocWBxBiZhIWz3CW77r8HWzV+S7Y4kCoJiW3DocwBB9MNfPdKU8pIXNaNR32mxr3i6c8YUzKnGaADD6qGlNKj4RdX6yze1U46Qy+QLWF0NFYsPOHAej4YVFo8IpOo3b6Nuh8ENvVOkOYISwA0NVexdGc+DkO9fJsE1qEbtlPkhAyhBQdYqSZzpyElObaJrQIpGkmCMg46kKfyCppZ43WnO6rzqsV8zIMGH1iT1/eKeQ43uCBYlJc9Q6D9y6jUT8GENuaHc02JdANmzy0u1VrdMRTmN4b9f6qVC8EYIw/v/PXZRydsOJLutcnu0exs9YHD70VJBdYSZuWWbvsA7vME7N/nHeHiYKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoLCk/BfBJshMDNdiq4AAAAASUVORK5CYII="/>
            </Fill>
          </Layout>

          <Layout>
            <Fill>
              <Text margin="20px 0 0 0" bold={true} textColor="tertiary" > Reusbale Components </Text>
            </Fill>
          </Layout>
        </Slide>


        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading textFont="primary" margin="0 0 30px 0" textColor="primary" size={1} caps>Components</Heading>
          <Layout>
            <Fill>
              <Text bold={true} textSize="50px" textColor="primary">Class </Text>
            </Fill>
            <Fill>
              <Text bold={true} textSize="50px" textColor="primary">Functinonal</Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text margin="10px 0 0" textColor="tertiary"> Stateful </Text>
              <Text margin="10px 0 0" textColor="tertiary"> Smart </Text>
              <Text margin="10px 0 0" textColor="tertiary"> Container </Text>
            </Fill>
            <Fill>
              <Text margin="10px 0 0" textColor="tertiary"> Stateless </Text>
              <Text margin="10px 0 0" textColor="tertiary"> functinonal </Text>
              <Text margin="10px 0 0" textColor="tertiary"> Presentational </Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading margin="0 0 30px 0" textFont="primary" size={3} textColor="primary" caps>Class Component</Heading>
          <Layout>
            <Fill>
              <Text margin="10px 0 0" textColor="tertiary"> Controls the Logic </Text>       
            </Fill>
            <Fill>
              <Text margin="10px 0 0" textColor="tertiary"> Handles the State </Text>
            </Fill>
            <Fill>
              <Text margin="10px 0 0" textColor="tertiary"> Has lifecycle  methods </Text>
            </Fill>
          </Layout>
          <CodePane textSize="24px" margin="30px 0 0 0" lang="javascript" source={classExample}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading margin="0 0 30px 0" textFont="primary" size={3} textColor="primary" caps>Functinonal Component</Heading>
          <Layout>
            <Fill>
              <Text margin="10px 5px 0 0" textColor="tertiary"> Use whenever possible </Text>       
            </Fill>
            <Fill>
              <Text margin="10px 5px 0 0" textColor="tertiary"> Only Presentational </Text>
            </Fill>
            <Fill>
              <Text margin="10px 0 0 5px" textColor="tertiary"> Functions/No State </Text>
            </Fill>
          </Layout>
          <CodePane textSize="24px" margin="30px 0 0 0" lang="javascript" source={functionalExample}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading margin="0 0 30px 0" textFont="primary" size={3} textColor="primary" caps>React's Syntax - JSX</Heading>
          <Layout>
            <Fill>
              <Text margin="10px 5px 0 0" textColor="tertiary"> Syntax Extension </Text>       
            </Fill>
            <Fill>
              <Text margin="10px 5px 0 0" textColor="tertiary"> React Elements </Text>
            </Fill>
            <Fill>
              <Text margin="10px 0 0 5px" textColor="tertiary"> UI Logic </Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <CodePane margin="10px 5px 0 0" textSize="24px" lang="javascript" source={jsxElementExample}/>
            </Fill>
            <Fit></Fit>
            <Fill>
              <CodePane margin="10px 0 0 5px" textSize="24px" lang="javascript" source={jsxCreateElementExample}/>
            </Fill>
          </Layout>
        </Slide>


        <Slide transition={["fade"]} bgColor="secondary">
          <Heading margin="0 0 30px 0" textFont="primary" size={3} textColor="primary" caps>State</Heading>
          <Layout>
            <Fill>
              <Text margin="10px 5px 0 0" textColor="tertiary"> Mosting Confusing </Text>       
            </Fill>
            <Fill>
              <Text margin="10px 5px 0 0" textColor="tertiary"> Javascript Object - Recorderd/Reacts  </Text>
            </Fill>
            <Fill>
              <Text margin="10px 0 0 5px" textColor="tertiary"> Altered re-renders </Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <CodePane margin="10px 5px 0 0" textSize="24px" lang="javascript" source={stateExample}/>
            </Fill>
            <Fill>
              <CodePane margin="10px 0 0 5px" textSize="24px" lang="javascript" source={changeStateExample}/>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text margin="10px 0 0 5px" textColor="tertiary"> All children will have access to that data via props </Text>
            </Fill>
          </Layout>
        </Slide>


        <Slide transition={["fade"]} bgColor="secondary">
          <Heading margin="0 0 30px 0" textFont="primary" size={3} textColor="primary" caps>Props</Heading>
          <Layout>
            <Fill>
              <Text margin="10px 5px 0 0" textColor="tertiary"> Give by parent </Text>       
            </Fill>
            <Fill>
              <Text margin="10px 5px 0 0" textColor="tertiary"> Downward flow of data  </Text>
            </Fill>
            <Fill>
              <Text margin="10px 0 0 5px" textColor="tertiary"> Altered re-renders </Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <CodePane margin="10px 5px 0 0" textSize="24px" lang="javascript" source={propsExample}/>
            </Fill>
          </Layout>
        </Slide>



        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 20px 0" size={4} textColor="primary" caps> Reusable Components</Heading>
          <Layout>
            <Fill>
              <Image margin="10px 10px 0 0" src={require('../assets/badCode.png')}/>
            </Fill>
            <Fill>
              <Image margin="10px 0 0 10px" src={require('../assets/badCode1.png')}/>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 20px 0" size={4} textColor="primary" caps> Reusable Components</Heading>
          <Layout>
            <Fill>
              <Image height="600px" width="700px"  margin="10px 10px 0 0" src={require('../assets/goodCode.png')}/>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 20px 0" size={4} textColor="primary" caps> Lets See a Live Demo</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 20px 0" size={4} textColor="primary" caps> How to get started! </Heading>
          <Layout>
            <Fill>
              <Text margin="10px 0 0 0" textColor="tertiary">yarn create react-app my-app</Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text margin="20px 0 0 0" textColor="tertiary">npx create-react-app my-app</Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 20px 0" size={4} textColor="primary" caps> Helpful links </Heading>
          <Layout>
            <Fill>
              <Link textColor="primary" margin="10px 0 10px 0" href="https://reactjs.org/">
                https://reactjs.org/
              </Link>
            </Fill>
          </Layout>

          <Layout>
            <Fill>
              <Text margin="20px 0 20px 0"></Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Link textColor="primary" margin="20px 0 0 0" href="https://blog.usejournal.com/a-beginners-guide-to-react-36b19943d58f">
              https://blog.usejournal.com/a-beginners-guide-to-react-36b19943d58f
              </Link>
            </Fill>
          </Layout>
        </Slide>


        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 20px 0" size={4} textColor="primary" caps> Thank you!</Heading>
          <Layout>
            <Fill>
              <Text textColor="tertiary"> Question?</Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Link textColor="primary" margin="20px 0 0 0" href="http://local-hack-day-demo.surge.sh/#/">
                http://local-hack-day-demo.surge.sh/
              </Link>
            </Fill>
          </Layout>
        </Slide>
        


      </Deck>
    );
  }
}
