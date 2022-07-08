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

  width: 40%;
  height: 100%;

  nav, header, main, div {
    display: flex;
    justify-content: space-between;
    
  }

  nav {

    align-items: center;
    height: 10%;

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

  header {

    align-items: center;
    height: 20%;

    h3 {
      color: var(--grey-0);
    }

    h6 {
      color: var(--grey-1);
      font-weight: normal;
    }

  }

  div {

    display: flex;
    justify-content: space-between;
    height: 10%;
    align-items: center;
    background: var(--grey-4);

    button {
      
      font-size: 20px;
      width: 32px;
      background: var(--grey-3);
      color: var(--grey-0);
      border: none;
      height: 32px;
      border-radius: 4px;
      min-width: 10px;

      img {
        filter: invert(1);
        opacity: 0.5;
      }

      :hover {
        background: var(--grey-2);
      }
 
    } 

    
    h5 {
      color: var(--grey-0); 
    }


  }

  main {

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    min-height: 55%;
    height: auto;
    background: var(--grey-3);
    border-radius: 4px;
    padding: 0 15px 15px 15px;

    div {
      min-height: 50px;
      height: 50px;
    }
    
  }


`

