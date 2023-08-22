import styled from "@emotion/styled";

const ContactPresenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 16px;

  ${({ theme }) => theme.media.tablet} {
    margin: 0 auto;
  }
`;

const TextArea = styled.div`
  border-radius: 32px;
  width: 600px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span:first-of-type {
    font-size: 12px;
  }
`;

const EmailWrapper = styled.span`
  font-size: 18px;
  letter-spacing: 0.8px;
  margin: 48px 0;
`;

const ViewButton = styled.div`
  padding: 16px 24px;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  display: inline-block;
  border-radius: 8px;
`;

const ContactPresenter = () => {
  return (
    <ContactPresenterWrapper id="contact">
      <TextArea>
        <span>feel free to email me.</span>
        <EmailWrapper>miyusetoyama@gmail.com</EmailWrapper>
        <a href="https://drive.google.com/file/d/1GSse0_OklM5fOwkSFzCqEIBLjg50ka_w/view">
          <ViewButton>view skill sheet</ViewButton>
        </a>
      </TextArea>
    </ContactPresenterWrapper>
  );
};

export default ContactPresenter;
