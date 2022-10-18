import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 15px;
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    }
  @media (max-width: 470px) {
    grid-template-columns: repeat(1, 1fr);
      }
`;

