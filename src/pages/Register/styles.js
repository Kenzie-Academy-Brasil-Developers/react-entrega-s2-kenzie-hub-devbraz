import styled from "styled-components"

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

  height: 100%;
  width: 22%;

  div {
    display: flex;
    justify-content: space-between;
    height: 15%;
    align-items: flex-end;
    padding-bottom: 10%;
    h1 {
      font-size: 20px;
    }
    button {
      background: var(--grey-3);
      color: var(--grey-0);
      border: none;
      font-size: 12px;
      width: 55.49px;
      height: 32px;
      border-radius: 4px;
      :hover {
        background: var(--grey-2);
      }
    }
  }

  form {
    display: flex;
    height: 80%;
    margin-bottom: 5%;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background: var(--grey-3);
    border-radius: 4px;
    padding: 10px;

    h3, h6, h5, input, button {
    margin: 10px;
    } 

    h5 {
      font-weight: normal;
      text-align: start;
      color: var(--grey-0);
    }
    h6{
      color: var(--grey-1);
      font-weight: normal;
    }
    h3 {
      color: var(--grey-0);
    }

    input {
      border: none;
      background: var(--grey-2);
      padding: 15px 10px 15px 10px;
      border-radius: 4px;
      color: #868E96;

   

    }






    button{
      background: var(--primary-negative);
      border: none;
      border-radius: 4px;
      color: #FFFFFF;
      font-weight: bold;
      padding: 15px 10px 15px 10px;
    }

  }

  

 
  


`
