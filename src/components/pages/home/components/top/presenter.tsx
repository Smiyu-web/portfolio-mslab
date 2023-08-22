import styled from "@emotion/styled";
import BusinessCard from "/public/businessCard.jpg";
import Image from "next/image";
import MenuPresenter from "../menu/presenter";
import { HamburgerMenuComponent } from "components/hamburgerMenu";

const TopPresenterWrapper = styled.div`
  height: 100vh;
`;

const CenterBeltWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  position: relative;
  top: 40%;
  width: 100%;
  display: flex;
  height: 300px;

  ${({ theme }) => theme.media.tabletS} {
    top: 35%;
  }
`;

const ImageWrapper = styled.div`
  box-shadow: rgba(159, 159, 159, 0.5) 2px 8px 10px 2px;
  width: 220px;
  height: 364px;
  position: absolute;
  left: 5%;
  bottom: 110px;

  ${({ theme }) => theme.media.tabletS} {
    left: 15%;
    bottom: 50px;
  }

  ${({ theme }) => theme.media.tablet} {
    left: 25%;
  }
`;

const CompanyInfo = styled.div`
  position: absolute;
  right: 5%;
  bottom: 0;

  ${({ theme }) => theme.media.tabletS} {
    right: 20%;
    bottom: 40px;
  }
`;

const TopPresenter = () => {
  return (
    <TopPresenterWrapper id="top">
      <MenuPresenter />
      <HamburgerMenuComponent />
      <CenterBeltWrapper>
        <ImageWrapper>
          <Image src={BusinessCard} alt="MS Lab." width={220} height={364} />
        </ImageWrapper>
        <CompanyInfo>
          <h1>MS Lab.</h1>
          <p>freelance professional engineer</p>
        </CompanyInfo>
      </CenterBeltWrapper>
    </TopPresenterWrapper>
  );
};

export default TopPresenter;
