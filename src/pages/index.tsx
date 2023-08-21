import Head from "next/head";
import styled from "@emotion/styled";

const HomeWrapper = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const ViewSkillSheetAnchor = styled.a`
  margin-top: 16px;
  color: #111;
  text-decoration: none;
`;

const ViewSkillSheet = styled.div`
  padding: 16px 24px;
  border: 1px solid #111;
  border-radius: 8px;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>MS Lab.</title>
        <meta
          name="description"
          content="Miyu Setoyama is a passionate Frontend Developer who loves creating new things. Expert knowledge of HTML, CSS, JavaScript, and React. Familiar with Fullstack development, particularly the MERN stack."
        />
      </Head>
      <HomeWrapper>
        <span>Comming soon...</span>
        <ViewSkillSheetAnchor href="https://drive.google.com/file/d/1GSse0_OklM5fOwkSFzCqEIBLjg50ka_w/view?usp=sharing">
          <ViewSkillSheet>view skill sheet</ViewSkillSheet>
        </ViewSkillSheetAnchor>
      </HomeWrapper>
    </>
  );
};

export default Home;
