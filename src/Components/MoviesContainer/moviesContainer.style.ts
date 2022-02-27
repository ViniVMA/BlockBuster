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
  background-color: #ccc;
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
