import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 99px;
  border-bottom: 1px solid #fff;
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
  border-radius: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
`;

export const NavBar = styled.nav`
  z-index: 999;
  margin: 0 auto;
  font-size: 1.4rem;
  max-width: 611px;
  width: 100%;
  display: flex;
  align-items: center;

  a {
    text-transform: capitalize;
    font-family: "Roboto";
    color: inherit;

    text-decoration: inherit;
    a:visited {
      text-decoration: none;
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    flex: 0 0 100%;
    /* margin-right: 60px; */

    li {
      transition: 150ms;
      padding: 3px 12px;

      :hover {
        color: #fff;
        border: 2px solid #451099;
      }
    }

    li:not(:last-child) {
      margin-right: 5px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Content = styled.div`
  max-width: 1135px;
  display: flex;
  width: 100%;
  height: 40px;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const MobileNavBar = styled.nav`
  display: none;
  position: relative;
  z-index: 999;

  @media (max-width: 768px) {
    display: block;
  }

  .navBar {
    background: rgba(255, 255, 255, 0);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    position: absolute;
    top: 39px;
    right: 19%;
    width: 200px;

    a {
      text-transform: capitalize;
      font-family: "Roboto";
      color: inherit;

      text-decoration: inherit;
      a:visited {
        text-decoration: none;
      }
    }

    ul {
      font-size: 2rem;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 0 50%;
      height: 100%;
    }
  }

  .active {
    display: none;
  }

  img {
    display: none;
  }
`;

export const HamburguerMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 3px solid #451099;
  border-radius: 10px;
  height: 40px;
  width: 40px;
  background-color: #000;
  justify-content: space-evenly;
  margin-right: 10px;

  span {
    width: 17px;
    height: 5px;
    background-color: #451099;
    border: 1px solid #451099;
  }
`;
