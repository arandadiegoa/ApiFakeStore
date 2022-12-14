import styled from "styled-components";

export const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 10px;
  width: 100%;
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
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-style: italic;
  aling-text: center;
`;
