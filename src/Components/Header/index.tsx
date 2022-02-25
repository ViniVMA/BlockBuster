import * as S from "./header.style";

import Logo from "../../../public/assets/Logo.svg";
import SearchIco from "../../../public/assets/ico-loupe.svg";
import { useState } from "react";

const Links = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About",
    link: "/",
  },
  {
    text: "Features",
    link: "/",
  },
  {
    text: "Pricing",
    link: "/",
  },
  {
    text: "Gallery",
    link: "/",
  },
  {
    text: "Team",
    link: "/",
  },
];

export const Header = () => {
  const [dropdown, setDropdown] = useState(true);

  const showDropdown = () => setDropdown(!dropdown);
  return (
    <S.Header>
      <S.Content>
        <img src={Logo} />
        <S.NavBar>
          <ul>
            {Links.map(({ text, link }) => {
              return (
                <li>
                  <a href={link}>{text}</a>
                </li>
              );
            })}
            <img src={SearchIco} />
          </ul>
        </S.NavBar>

        <S.MobileNavBar>
          <S.HamburguerMenu onClick={showDropdown}>
            <span />
            <span />
            <span></span>
          </S.HamburguerMenu>
          <div className={dropdown ? "navBar active" : "navBar"}>
            <ul>
              {Links.map(({ text, link }) => {
                return (
                  <li>
                    <a href={link}>{text}</a>
                  </li>
                );
              })}
              <img src={SearchIco} />
            </ul>
          </div>
        </S.MobileNavBar>
      </S.Content>
    </S.Header>
  );
};
