import React, { useState } from "react";
import "./App.css";
import Userdata from "./test/Userdata";
// import Darkmode from "./test/Darkmode";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../src/test/themes";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <button className="darkMode" onClick={() => themeToggler()}>
            Change Theme
          </button>
        </StyledApp>
      </ThemeProvider>
      <Userdata />
    </>
  );
}

export default App;
// ! note!  and Request  
// ! due to time shortage, i haven't much concentrated on the styling part.