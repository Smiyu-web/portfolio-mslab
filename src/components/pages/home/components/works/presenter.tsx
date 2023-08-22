import styled from "@emotion/styled";
import PageTitleComponent from "components/pageTitle";
import {
  WorkProjectType,
  WORK_PROJECTS,
  MY_WORK_PROJECTS,
  MyWorkProjectType,
} from "consts/worksConsts";
import Image from "next/image";

const WorksPresenterWrapper = styled.div`
  text-align: center;
  margin: 0 16px 104px;

  ${({ theme }) => theme.media.tablet} {
    margin: 0 auto 104px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p {
    margin: 48px 0;
  }
`;

const WorkCardsWrapper = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(1, 1fr);

  ${({ theme }) => theme.media.tabletS} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const WorkCard = ({
  project,
}: {
  project: WorkProjectType | MyWorkProjectType;
}) => {
  const WorkCardWrapper = styled.a`
    box-shadow: rgba(159, 159, 159, 0.5) 4px 8px 8px 2px;
    width: 100%;
    display: inline-block;
  `;

  const TextArea = styled.div`
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      margin: 8px 0;
    }

    span {
      font-size: 14px;
    }
  `;

  return (
    <WorkCardWrapper href={project.url}>
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={200}
        layout={"responsive"}
      />
      <TextArea>
        <h3>{project.title}</h3>
        <span>{project.type}</span>
      </TextArea>
    </WorkCardWrapper>
  );
};

const WorksPresenter = () => {
  return (
    <WorksPresenterWrapper id="works">
      <PageTitleComponent no="02" title="works" />

      <WorkCardsWrapper>
        {WORK_PROJECTS.map((project: WorkProjectType) => (
          <WorkCard project={project} key={project.id} />
        ))}
        {MY_WORK_PROJECTS.map((project: MyWorkProjectType) => (
          <WorkCard project={project} key={project.id} />
        ))}
      </WorkCardsWrapper>
    </WorksPresenterWrapper>
  );
};

export default WorksPresenter;
