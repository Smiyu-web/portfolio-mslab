import Head from "next/head";
import TopContainer from "@/components/top";

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
      <TopContainer />
    </>
  );
};

export default Home;
