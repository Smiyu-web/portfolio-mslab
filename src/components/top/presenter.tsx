import Head from "next/head";
import styled from "@emotion/styled";
import BusinessCard from "/public/businessCard.jpg";
import Image from "next/image";

const TopPresenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CenterBeltWrapper = styled.div`
  background-color: #f6f6f6;
  position: relative;
  width: 100%;
  display: flex;
  height: 300px;
`;

const ImageWrapper = styled.div`
  box-shadow: rgba(159, 159, 159, 0.5) 0px 8px 10px 0px;
  width: 200px;
  height: 300px;
  position: absolute;
  left: 30%;
  bottom: 40px;
`;

const CompanyInfo = styled.div`
  position: absolute;
  left: 55%;
  color: #717171;
  bottom: 40px;
`;

const TopPresenter = () => {
  return (
    <TopPresenterWrapper>
      <CenterBeltWrapper>
        <ImageWrapper>
          <Image src={BusinessCard} alt="MS Lab." width={200} height={300} />
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
