import styled from "styled-components";

type Props= {
  done: boolean;
}


export const Container = styled.div(({done}: Props)=>(
 ` display: flex;
  background-color: #20212c;
  padding: 10px;
  border: 10px;
  margin-bottom: 10px;
  align-items: center;

  label {
    margin-left: 10px;
    text-decoration: ${ done ? 'line-through' : 'initial' }
  }

  input {
    width: 25px;
    height: 25px;
  }
  `
));