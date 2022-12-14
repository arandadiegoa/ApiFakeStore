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
  width: 15%;
  padding: 50px;
  @media (max-width: 700px) {
    padding: 10px;
    width: 50%;
    }
`;

export const Label = styled.label`
  font-family: cursive;
  font-size: 1em;
  margin-left: 15px;
`;

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
 
  margin-top: 25px;
`;

export const Input = styled.input`
  width: 90%;
  padding: 10px 20px;
  margin: 9px 0;
  box-sizing: border-box;
  margin-left: 15px;
  border-radius: 6px;
`;
