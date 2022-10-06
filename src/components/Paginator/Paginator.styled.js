import styled from "styled-components";

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin-left: 25px;
`;

export const Span = styled.span`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 25px;
  border: 1px solid #000;
  text-align: center;
`;
