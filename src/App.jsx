import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutTheGame from "./components/AboutTheGame";
import PlayGame from "./components/PlayGame";
import Settings from "./components/Settings";
import ContactMe from "./components/ContactMe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import { useState, useEffect } from "react";

const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  display: border-box;
`;

const Wrapper = styled.div`
  max-width: 1280px;
  height: 100vh;
  margin: auto;
  ${"" /* background-color: #d7ccc8; */}
  font-family: Ubuntu, sans-serif;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => {
    document.body.className = isDarkTheme ? "dark" : "light";
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <Router>
      <MainDiv>
        <Wrapper>
          <Theme
            appearance={isDarkTheme ? "dark" : "light"}
            accentColor="indigo"
            style={{ flexGrow: "1" }}
          >
            <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            <Routes>
              <Route path="/" element={<AboutTheGame />} />
              <Route path="/about-the-game" element={<AboutTheGame />} />
              <Route path="/play-the-game" element={<PlayGame />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/contact-me" element={<ContactMe />} />
            </Routes>
            <Footer />
          </Theme>
        </Wrapper>
      </MainDiv>
    </Router>
  );
}

export default App;
