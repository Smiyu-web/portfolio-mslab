import styled from "@emotion/styled";

const MenuPresenterWrapper = styled.nav`
  display: none;

  li {
    margin: 0 16px;

    ${({ theme }) => theme.media.tablet} {
      margin: 0 32px;
    }
  }

  a {
    text-decoration: none;
  }

  span {
    margin: 16px;
  }

  ${({ theme }) => theme.media.tabletS} {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 50px;
  }
`;

const MenuPresenter = () => {
  return (
    <MenuPresenterWrapper>
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
    </MenuPresenterWrapper>
  );
};

export default MenuPresenter;
