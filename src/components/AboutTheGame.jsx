import styled from "styled-components";

const About = styled.div`
  width: 100%;
  min-height: 600px;
  height: 80vh;
  font-size: 18px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #7b7b7b;
`;

const StyledParagraph = styled.p`
  margin: 0px 200px;
  color: #7b7b7b;
`;

function AboutTheGame() {
  return (
    <About>
      <StyledParagraph>
        <p>
          Welcome to
          <strong>
            <span style={{ color: "#0EB39E" }}> W</span>
            <span style={{ color: "#23AFD0" }}>e</span>
            <span style={{ color: "#3B9EFF" }}>a</span>
            <span style={{ color: "#5472E4" }}>t</span>
            <span style={{ color: "#6E6ADE" }}>h</span>
            <span style={{ color: "#7D66D9" }}>e</span>
            <span style={{ color: "#9A5CD0" }}>r </span>
            <span style={{ color: "#B658C4" }}>Q</span>
            <span style={{ color: "#DE51A8" }}>u</span>
            <span style={{ color: "#EE518A" }}>e</span>
            <span style={{ color: "#EC5A72" }}>s</span>
            <span style={{ color: "#EC5D5E" }}>t</span>
          </strong>
          , an engaging and interactive game designed for weather enthusiasts
          and curious minds alike! This unique experience offers a fun and
          educational journey through the world of meteorology. The game
          challenges players to deduce city names based on their current weather
          conditions, testing their weather wisdom, geographical knowledge, and
          detective skills all at once.
        </p>
        <p>
          Weather Quest is more than just a game — it's a platform for
          connection and learning. Whether you're a weather aficionado, a
          geography guru, or simply someone looking for a fun way to pass the
          time, you've come to the right place. As you embark on this
          atmospheric adventure, you'll not only sharpen your mind but also gain
          fascinating insights into the diverse climates that shape our world.
        </p>
        <p>
          Let's explore the vast and varied skies of our planet together, one
          city at a time. Happy weather hunting!
        </p>
      </StyledParagraph>
    </About>
  );
}

export default AboutTheGame;
