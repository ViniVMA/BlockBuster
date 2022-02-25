import styled from "styled-components";

export const Footer = styled.footer`
  height: 270px;
  background-color: #1e2833;
  margin-top: 84px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1135px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  color: #fff;
`;

export const TopContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom: 1px solid #979797;
`;
export const BotContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  ul {
    display: flex;
    list-style-type: none;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 20px;

    li:not(:last-child) {
      /* margin-right: 40px; */
    }

    a {
      text-transform: capitalize;
      font-family: "Roboto";
      color: inherit;

      text-decoration: inherit;
      a:visited {
        text-decoration: none;
      }
    }

    @media (max-width: 205px) {
      flex-direction: column;
    }
  }
  @media (max-width: 300px) {
    flex-direction: column;
  }
`;

export const LogoWrapper = styled.div``;

export const SocialLinks = styled.div`
  display: flex;
  img {
    margin-left: 40px;

    @media (max-width: 300px) {
      margin: 0;
    }
  }
`;
