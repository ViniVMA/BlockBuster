import styled from "styled-components";

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 259px;
  width: 100%;
  max-height: 600px;
  height: 100%;
  font-family: Inter;
  font-weight: 400;
  font-size: 1.4rem;
  padding: 16px 16px 24px 16px;
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  h4 {
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 150%;
    letter-spacing: 0.0275em;
    margin-bottom: 6px;
  }

  span {
    color: #451099;
    font-size: 1.4rem;
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 15px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 30ch;
    color: #787885;
  }

  .genderDate {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: inherit;
      margin: 0;
    }

    .gender {
      border: 1px solid #451099;
      padding: 6px 12px;
      border-radius: 4px;
      max-width: 160px;
      width: 100%;
    }
  }

  button {
    position: relative;
    margin-top: 10px;
    height: 48px;
    background-color: #000;
    border: 1px solid #451099;
    color: #fff;
    font-size: 1.6rem;
    vertical-align: baseline;
    :after {
      padding-left: 10px;
      position: absolute;
      content: url("data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3E%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 1200.000000 1200.000000' preserveAspectRatio='xMidYMid meet'%3E%3Cg transform='translate(0.000000,1200.000000) scale(0.100000,-0.100000)'%0Afill='%23ffffff' stroke='none'%3E%3Cpath d='M4815 11295 c-211 -39 -475 -195 -605 -359 -83 -103 -114 -168 -359%0A-754 l-243 -582 -1067 -2 -1066 -3 -45 -25 c-49 -28 -84 -73 -100 -129 -13%0A-48 -13 -505 1 -554 13 -49 63 -105 114 -128 36 -17 73 -19 387 -19 l348 0 3%0A-3302 3 -3303 21 -95 c40 -178 100 -337 170 -454 170 -283 388 -461 652 -535%0Al96 -26 2910 0 2910 0 96 26 c166 46 293 122 425 254 225 225 373 533 413 860%0A8 63 11 1051 11 3333 l0 3242 344 0 c236 0 354 4 377 12 54 18 87 48 114 102%0A25 49 25 53 25 305 0 145 -5 272 -10 293 -14 49 -52 93 -104 121 l-41 22%0A-1065 3 -1065 2 -139 333 c-402 959 -389 933 -525 1067 -130 129 -310 235%0A-479 283 l-77 22 -1180 2 c-931 1 -1195 -1 -1250 -12z m2333 -859 c15 -8 37%0A-25 48 -38 17 -18 334 -771 334 -792 0 -3 -673 -6 -1496 -6 -1193 0 -1495 3%0A-1491 13 121 296 323 767 335 781 10 10 31 27 47 37 29 18 76 19 1113 19 911%0A0 1087 -2 1110 -14z m1892 -4868 c0 -1940 -4 -3208 -10 -3263 -16 -150 -76%0A-299 -153 -380 l-44 -45 -2798 0 -2799 0 -42 45 c-43 47 -99 151 -130 245 -18%0A53 -19 171 -22 3313 l-2 3257 3000 0 3000 0 0 -3172z'/%3E%3Cpath d='M4020 7434 c-19 -8 -50 -29 -68 -47 -66 -64 -62 70 -62 -2077 0%0A-2172 -5 -2016 69 -2083 61 -55 85 -59 388 -55 l271 3 43 30 c23 17 52 48 63%0A70 l21 40 0 1995 0 1995 -21 40 c-11 22 -40 54 -63 70 l-43 30 -281 2 c-236 2%0A-288 0 -317 -13z'/%3E%3Cpath d='M5720 7428 c-26 -14 -57 -41 -75 -66 l-30 -44 0 -2008 0 -2008 30%0A-44 c18 -25 49 -52 75 -65 43 -22 54 -23 312 -23 220 0 275 3 306 15 47 20 79%0A50 103 97 18 36 19 91 19 2028 0 1937 -1 1992 -19 2028 -24 47 -56 77 -103 97%0A-31 12 -86 15 -306 15 -258 0 -269 -1 -312 -22z'/%3E%3Cpath d='M7439 7430 c-48 -25 -96 -81 -108 -127 -15 -53 -15 -3933 0 -3986 13%0A-47 60 -102 110 -128 35 -17 61 -19 312 -19 267 0 275 1 318 23 29 16 54 40%0A74 72 l30 48 0 1997 0 1997 -30 48 c-20 32 -45 56 -74 72 -43 23 -50 23 -320%0A23 -252 -1 -279 -3 -312 -20z'/%3E%3C/g%3E%3C/svg%3E%0A");
    }
  }
`;

export const ImageContainer = styled.div`
  margin: 0 auto;
  border-radius: 20px;
  max-width: 227px;
  width: 100%;
  max-height: 224px;
  margin-bottom: 12px;
  img {
    width: 100%;
    max-width: 227px;
    height: 100%;
    max-height: 224px;
  }
`;
