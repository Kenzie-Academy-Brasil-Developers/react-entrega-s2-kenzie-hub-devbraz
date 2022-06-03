import styled from "styled-components"

export const Container = styled.div`

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 22%;
  height: 35%;
  box-shadow: 24;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  div {
    display: flex;
    flex-direction: column;
    background: var(--grey-2);
    height: 15%;
    justify-content: space-evenly;
    padding: 10px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .div-contain {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 85%;
    background: var(--grey-3);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    form {

      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      height: 100%;

      button {
      background: var(--primary);
      border: none;
      border-radius: 4px;
      color: #FFFFFF;
      font-weight: bold;
      padding: 15px 10px 15px 10px;
      padding: 10px;
      }
    
      input {
        border: none;
        background: var(--grey-2);
        padding: 15px 10px 15px 10px;
        border-radius: 4px;
        color: #868E96;
        border: 1.2182px solid var(--grey-0);
        padding: 10px;
      }

    }


  }


`
  




