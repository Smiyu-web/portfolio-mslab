import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const FooterPresenterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 16px;

  ${({ theme }) => theme.media.tablet} {
    margin: 0 auto;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    font-size: 18px;
    margin: 0 8px;
  }
`;

const FooterPresenter = () => {
  return (
    <FooterPresenterWrapper>
      <ul>
        <li>
          <a
            href="https://github.com/Smiyu-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/miyu-setoyama-35789219a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
      </ul>
      <p>&copy; MS Lab. All Rights Reserved.</p>
    </FooterPresenterWrapper>
  );
};

export default FooterPresenter;
