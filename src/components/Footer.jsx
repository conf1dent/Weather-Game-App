import styled from "styled-components";

const FooterText = styled.div`
  min-height: 20px;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: grey;
`;

const dateToday = new Date().getFullYear();

function Footer() {
  return <FooterText>{dateToday}</FooterText>;
}

export default Footer;
