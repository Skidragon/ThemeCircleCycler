import React from "react";
import ReactDOM from "react-dom";
import { CircleToggler } from "./components/CircleToggler";
import ThemeCycler from "./components/ThemeCycler";
import "./styles.css";
import styled from "styled-components";
const yellowTheme = {
  primaryColor: "yellow",
  secondaryColor: "black"
};
const redTheme = {
  primaryColor: "red",
  secondaryColor: "black"
};
const greenTheme = {
  primaryColor: "green",
  secondaryColor: "black"
};

const Heading = styled.h1`
  color: ${props => props.theme.primaryColor};
  background: ${props => props.theme.secondaryColor};
`;

function App() {
  return (
    <div className="App">
      <ThemeCycler themes={[yellowTheme, redTheme, greenTheme]}>
        {({ prevThemeHandler, nextThemeHandler, themeIndex }) => (
          <>
            <Heading>
              Left Click circle to go clockwise and right click to go
              counter-clockwise
            </Heading>
            <CircleToggler
              onClick={nextThemeHandler}
              themeIndex={themeIndex}
              onContextMenu={e => {
                e.preventDefault();
                prevThemeHandler();
                console.log(themeIndex);
              }}
            />
          </>
        )}
      </ThemeCycler>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
