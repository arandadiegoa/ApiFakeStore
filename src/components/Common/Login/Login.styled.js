import styled from "styled-components";

export const Container = styled.div`
  border-style: solid;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 150px;
  width:15%;
  padding: 60px;
`;

export const Label = styled.label`
  font-family: cursive;
  font-size: 1em;
`;

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin-left: 250px;
  margin-top: 25px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;
