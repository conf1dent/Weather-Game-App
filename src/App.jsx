import styled from "styled-components";
import Header from "./components/Header";
// import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import PlayGame from "./components/PlayGame";
import AddCityBlock from "./components/AddCityBlock";
import ContactUs from "./components/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  display: border-box;
`;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  background-color: #d7ccc8;
  font-family: Ubuntu, sans-serif;
  padding: 3%;
`;

function App() {
  return (
    <Router>
      <MainDiv>
        <Wrapper>
          <Header />
          <Routes>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/play-game" element={<PlayGame />} />
            <Route path="/add-city-block" element={<AddCityBlock />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
          {/* <Body /> */}
          <Footer />
        </Wrapper>
      </MainDiv>
    </Router>
  );
}

export default App;
