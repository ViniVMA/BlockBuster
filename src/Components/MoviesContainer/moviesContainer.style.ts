import styled, { css } from "styled-components";

interface ButtonProps {
  disabled?: boolean | undefined;
}

export const Container = styled.div`
  max-width: 1135px;
  width: 100%;
  margin: 0 auto;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(259px, 1fr));
  justify-content: space-between;
  gap: 24px 5px;
  justify-items: center;
  margin-top: 30px;

  @media (max-width: 260px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const TopContentWrapper = styled.div``;

export const ContainerModal = styled.div<ButtonProps>`
  ${({ disabled }) => css`
    display: flex;
    justify-content: center;
    background: rgba(255, 255, 255, 0);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    width: 100%;
    height: auto;
    padding: 30px;
    
    
    

    form {
      max-width: 400px;
      width: 100%;
      display: flex;
      flex-direction: column;

      input {
        color: #fff;
        height: 36px;
        margin-bottom: 30px;
        border: none;
        background-color: #00000080;
        border: 1px solid #45109950;
        padding-left: 10px;
      }

      input[type=submit] {
  cursor: pointer;

        background-color: #45109810;
        :hover {
          background-color: #45109999;
        }
      }
      
      
     
  `}
`;

export const CollapseWrapper = styled.div``;

export const CollapseButton = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  color: #fff;
  font-size: 3.6rem;
  font-weight: 200;
  margin-top: 20px;
  border-bottom: 0.3px solid #ffffff50;
  animation-name: glow;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  cursor: pointer;

  @keyframes glow {
    from {
      text-shadow: 0px 0px 5px #fff, 0px 0px 5px #614ad3;
    }
    to {
      text-shadow: 0px 0px 20px #fff, 0px 0px 20px #614ad3;
    }
  }

  :after {
    position: absolute;
    top: 5px;
    content: url("data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3E%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 768.000000 768.000000' preserveAspectRatio='xMidYMid meet'%3E%3Cg transform='translate(0.000000,768.000000) scale(0.100000,-0.100000)'%0Afill='%23ffffff' stroke='none'%3E%3Cpath d='M2142 4707 l-222 -222 960 -960 960 -960 960 960 960 960 -225 225%0A-225 225 -735 -735 -735 -735 -733 733 c-402 402 -734 732 -737 732 -3 0 -105%0A-100 -228 -223z'/%3E%3C/g%3E%3C/svg%3E");
  }
`;

export const Labels = styled.span`
  font-size: 1.6rem;
`;

export const Title = styled.span`
  color: #fff;
  font-size: 3.6rem;
  font-weight: 200;
  margin-bottom: 20px;
  border-bottom: 0.3px solid #ffffff50;
  animation-name: glow;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  @keyframes glow {
    from {
      text-shadow: 0px 0px 5px #fff, 0px 0px 5px #614ad3;
    }
    to {
      text-shadow: 0px 0px 20px #fff, 0px 0px 20px #614ad3;
    }
  }
`;
