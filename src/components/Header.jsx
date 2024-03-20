import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Text, Heading, IconButton } from "@radix-ui/themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const Navbar = styled.nav`
  width: 100%;
  min-height: 100px;
  height: 10vh;
  ${"" /* background-color: #0d47a1; */}
  display: flex;
  align-items: center;
  ${"" /* margin-bottom: 40px; */}
`;

const MenuOptions = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${"" /* background-color: #c8e6c9; */}
  ${"" /* align-items: flex-end; */}
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

function Header({ toggleTheme, isDarkTheme }) {
  return (
    <Navbar>
      <MenuOptions>
        <MenuOption>
          <Link to="/about-the-game">
            <div
              style={{
                display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <img
                style={{ width: "56px", height: "56px" }}
                // src="./src/assets/logo.svg"
                // src="./public/logo.svg"
                src="https://raw.githubusercontent.com/conf1dent/Weather-Game-App/3828fa32d2123292c120a727007ea8ded8e3e39c/public/logo.svg"
              />
            </div>
          </Link>
        </MenuOption>

        <MenuOption>
          <Link to="/about-the-game">
            {/* <Heading as="h1" style={{ color: "#E93D82" }}> */}
            <Heading
              as="h1"
              style={{
                color: isDarkTheme ? "#1DE9B6" : "#D6409F",
              }}
            >
              About the Game
            </Heading>
          </Link>
        </MenuOption>
        <MenuOption>
          <Link to="/play-the-game">
            {/* <Heading as="h1" style={{ color: "#AB4ABA" }}> */}
            <Heading
              as="h1"
              style={{
                color: isDarkTheme ? "#00E5FF" : "#AB4ABA",
              }}
            >
              Play the Game
            </Heading>
          </Link>
        </MenuOption>
        <MenuOption>
          <Link to="/settings">
            {/* <Heading as="h1" style={{ color: "#6E56CF" }}> */}
            <Heading
              as="h1"
              style={{
                color: isDarkTheme ? "#00B0FF" : "#6E56CF",
              }}
            >
              Settings
            </Heading>
          </Link>
        </MenuOption>
        <MenuOption>
          <Link to="/contact-me">
            {/* <Heading as="h1" style={{ color: "#3E63DD" }}> */}
            <Heading
              as="h1"
              style={{
                color: isDarkTheme ? "#2979FF" : "#3E63DD",
              }}
            >
              Contact Me
            </Heading>
          </Link>
        </MenuOption>

        <Text
          as="label"
          size="6"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <IconButton
            style={{
              backgroundColor: isDarkTheme ? "#304FFE" : "#FFD600",
              color: isDarkTheme ? "#FFD600" : "#304FFE",
            }}
          >
            {isDarkTheme ? (
              <MoonIcon
                onClick={toggleTheme}
                width="24"
                height="24"
                // style={{
                //   color: isDarkTheme ? "#FAFAFA" : "#212121",
                // }}
              />
            ) : (
              <SunIcon
                onClick={toggleTheme}
                width="24"
                height="24"
                // style={{
                //   color: isDarkTheme ? "#FAFAFA" : "#212121",
                // }}
              />
            )}
          </IconButton>
        </Text>
      </MenuOptions>
    </Navbar>
  );
}

export default Header;
