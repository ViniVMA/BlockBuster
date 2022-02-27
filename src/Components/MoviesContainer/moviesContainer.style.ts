import styled from "styled-components";

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

  @media (max-width: 260px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const TopContentWrapper = styled.div``;

export const ContainerModal = styled.div`
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 30px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      height: 36px;
      margin-top: 30px;
    }
  }
`;
