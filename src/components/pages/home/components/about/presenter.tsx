import styled from "@emotion/styled";
import PageTitleComponent from "components/pageTitle";

const AboutPresenterWrapper = styled.div`
  text-align: center;
  margin-bottom: 104px;
  margin: 0 16px 104px;

  ${({ theme }) => theme.media.tablet} {
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p {
    margin: 48px 0;
  }
`;

const ViewButton = styled.div`
  padding: 16px 24px;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  display: inline-block;
  border-radius: 8px;
`;

const AboutPresenter = () => {
  return (
    <AboutPresenterWrapper id="about">
      <PageTitleComponent no="01" title="about" />
      <p>
        MS Lab. は関西とカナダを拠点に活動するフロントエンドエンジニアです。
        <br />
        『新しいことの挑戦し続けたい。』という思いを胸に、日本語と英語での開発、コミュニケーションを強みとしています。
        <br />
      </p>
      <a href="https://drive.google.com/file/d/1GSse0_OklM5fOwkSFzCqEIBLjg50ka_w/view">
        <ViewButton>view skill sheet</ViewButton>
      </a>
    </AboutPresenterWrapper>
  );
};

export default AboutPresenter;
