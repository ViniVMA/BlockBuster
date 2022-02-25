import styled from "styled-components";

export const Container = styled.div`
  max-width: 1135px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(259px, 1fr));
  justify-content: space-between;
  gap: 24px 5px;
  justify-items: center;

  @media (max-width: 260px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;
