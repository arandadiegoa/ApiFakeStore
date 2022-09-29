import styled from "styled-components";

export const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 15px;
  padding: 10px;
  :hover {
    background-color: #ece4e4;
  }
`;

export const Img = styled.img`
  width: 150px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: black;
  font-size: 20px;
  font-style: italic;
  aling-text: center;
`;
