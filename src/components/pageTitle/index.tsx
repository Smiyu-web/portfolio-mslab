import styled from "@emotion/styled";

const PageTitleComponentWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 16px;
    margin-right: 8px;
  }
`;

type Props = {
  no: string;
  title: string;
};

const PageTitleComponent = ({ no, title }: Props) => {
  return (
    <PageTitleComponentWrapper>
      <span>{no}/</span>
      <h1>{title}</h1>
    </PageTitleComponentWrapper>
  );
};

export default PageTitleComponent;
