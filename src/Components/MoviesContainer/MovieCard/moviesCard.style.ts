import styled from "styled-components";

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 259px;
  width: 100%;
  max-height: 416px;
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
    color: #787885;
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
    color: #2264d1;

    span {
      color: inherit;
      margin: 0;
    }

    .gender {
      border: 1px solid #9dc2ff;
      padding: 6px 12px;
      border-radius: 4px;
      max-width: 160px;
      width: 100%;
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
