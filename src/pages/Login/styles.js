import styled from 'styled-components'

export const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100vw;
  color: var(--primary);

`

export const Content = styled.div`

  height: 100vh;
  width: 22%;

  div {

    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    text-align: center;
    background: var(--grey-3);
    border-radius: 4px;
    height: 70%;
    margin-bottom: 10%;

    h5, h6, p, input, button {
      margin: 10px;
    } 

    h5 {
      font-size: 18px;
      color: var(--grey-0);
    }

    h6 {
      font-size: 12px;
      color: var(--grey-1);
    }

    p {
      text-align: start;
      color: var(--grey-0);
      font-weight: normal;
    } 

    input {
      border: none;
      background: var(--grey-2);
      padding: 15px 10px 15px 10px;
      border-radius: 4px;
      color: #868E96;
      border: 1.2182px solid var(--grey-0);
    }

    button{
      background: var(--primary);
      border: none;
      border-radius: 4px;
      color: #FFFFFF;
      font-weight: bold;
      padding: 15px 10px 15px 10px;
    }

    .button-register {
      background: var(--grey-1);
      color: var(--grey-0);
    }

  }

  h1 {
    height: 20%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }

`



