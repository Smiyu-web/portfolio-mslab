import styled from "@emotion/styled";
import TopPresenter from "./components/top/presenter";
import AboutPresenter from "./components/about/presenter";
import WorksPresenter from "./components/works/presenter";
import ContactPresenter from "./components/contact/presenter";
import FooterPresenter from "./components/footer/presenter";

const HomePresenterWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.darkGrey};

  p {
    font-size: 14px;
    letter-spacing: 0.5px;
    line-height: 1.8;
  }

  a {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  ul {
    display: flex;
    list-style: none;
    align-items: center;
  }
`;

const HomePresenter = () => {
  return (
    <HomePresenterWrapper>
      <TopPresenter />
      <AboutPresenter />
      <WorksPresenter />
      <ContactPresenter />
      <FooterPresenter />
    </HomePresenterWrapper>
  );
};

export default HomePresenter;
