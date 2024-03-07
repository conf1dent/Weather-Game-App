import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const Navbar = styled.nav`
  width: 100%;
  height: 100px;
  background-color: #0d47a1;
  display: flex;
  align-items: flex-end;
  margin-bottom: 40px;
`;

const MenuOptions = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: #c8e6c9;
  align-items: flex-end;
`;

const MenuOption = styled.li`
  font-size: 24px;
  align-items: center;
  list-style-type: none;
  text-decoration: none;
`;

const Link = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
`;

function Header() {
  return (
    <Navbar>
      <MenuOptions>
        <MenuOption>
          <Link to="/about-us">About Us</Link>
        </MenuOption>
        <MenuOption>
          <Link to="/play-game">Play the Game</Link>
        </MenuOption>
        <MenuOption>
          <Link to="/add-city-block">Add Cities</Link>
        </MenuOption>
        <MenuOption>
          <Link to="/contact-us"> Contact Us</Link>
        </MenuOption>
      </MenuOptions>
    </Navbar>
  );
}

export default Header;
