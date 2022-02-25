import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 99px;
  border-bottom: 1px solid #ccc;
`;

export const NavBar = styled.nav`
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
        color: #48d3fe;
        border: 2px solid #48d3fe;
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
  @media (max-width: 768px) {
    display: block;
  }

  .navBar {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    background-color: #fff;
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
  border: 3px solid #48d3fe;
  border-radius: 10px;
  height: 40px;
  width: 40px;
  background-color: #fff;
  justify-content: space-evenly;

  span {
    width: 17px;
    height: 5px;
    background-color: #48d3fe;
    border: 1px solid #48d3fe;
  }
`;
