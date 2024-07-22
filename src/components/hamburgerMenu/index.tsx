import styled from "@emotion/styled";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const HamburgerMenuComponentContainer = styled.div`
  display: block;

  ${({ theme }) => theme.media.tabletS} {
    display: none;
  }
`;

const HamburgerMenuButton = styled.div<{ open: boolean }>`
  height: 24px;
  width: 24px;
  z-index: 10;
  margin: 8px;
`;

const MenuList = styled.nav<{ open: boolean }>`
  background-color: ${(props) => props.theme.colors.white};
  height: 100%;
  left: ${({ open }) => (open ? 0 : "-240px")};
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  overflow-y: scroll;
  padding-bottom: 0;
  position: fixed;
  scrollbar-width: none;
  top: 0;
  transition: 0.5s;
  width: 240px;

  z-index: 10;

  &::-webkit-scrollbar {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    padding: 0;

    li {
      margin: 32px;
    }

    a {
      text-decoration: none;
    }

    span {
      margin: 16px;
    }
  }
`;

const CloseButton = styled.div<{ open: boolean }>`
  height: 24px;
  left: ${({ open }) => (open ? "240px" : "-24px")};
  position: fixed;
  top: 0;
  transition: 0.5s;
  width: 24px;
  z-index: 10;
  color: ${(props) => props.theme.colors.white};
  margin: 8px;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  bottom: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  visibility: visible;
  z-index: 5;
`;

export const HamburgerMenuComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {isMenuOpen && <Overlay />}

      <HamburgerMenuComponentContainer>
        <HamburgerMenuButton
          onClick={() => setIsMenuOpen(true)}
          open={isMenuOpen}
        >
          <FontAwesomeIcon icon={faBars} size="xl" />
        </HamburgerMenuButton>
        <CloseButton onClick={() => setIsMenuOpen(false)} open={isMenuOpen}>
          <FontAwesomeIcon icon={faXmark} size="xl" />
        </CloseButton>
        <MenuList open={isMenuOpen}>
          <ul>
            <li>
              <a href="#top">TOP</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#works">WORKS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1XyZxBJGXY2UieLdbOsmYlmNYIfknjb4T/view">
                SKILL SHEET
              </a>
            </li>
          </ul>
        </MenuList>
      </HamburgerMenuComponentContainer>
    </>
  );
};
