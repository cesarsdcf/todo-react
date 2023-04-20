import styled from "styled-components";

export const Container = styled.div`
  border-radius: 15px;
  margin: 20px 0;
  border: 1px solid #555;
  display: flex;
  align-items: center;

  .img {
    padding:10px;
    font-size:50px;
    margin: 5px;
    cursor: pointer;
  }

  input{
    width: 100%;
    padding: 20px;
    border: none;
    background-color: transparent;
    outline: 0;
    color: white;
    font-size:20px;
  }
`;