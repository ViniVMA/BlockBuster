import * as S from "./footer.style";

import FooterLogo from "../../../public/assets/footerLogo.svg";

import Facebook from "../../../public/assets/facebook.svg";
import Twitter from "../../../public/assets/twitter.svg";
import Instagram from "../../../public/assets/instagram.svg";

export const Footer = () => {
  return (
    <S.Footer>
      <S.Content>
        <S.TopContent>
          <S.LogoWrapper>
            <img src={FooterLogo} />
          </S.LogoWrapper>
        </S.TopContent>

        <S.BotContent>
          <div>
            <ul>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <S.SocialLinks>
              <img src={Facebook} />
              <img src={Twitter} />
              <img src={Instagram} />
            </S.SocialLinks>
          </div>
        </S.BotContent>
      </S.Content>
    </S.Footer>
  );
};
