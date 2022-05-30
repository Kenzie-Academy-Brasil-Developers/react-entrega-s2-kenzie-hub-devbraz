import Routes from "./routes";
import GlobalStyle from './styles/global'
import { ToastContainer } from 'react-toastify';
import styled from "styled-components"
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";


const StyledContainer = styled(ToastContainer)`
  .Toastify__toast-container {}
  .Toastify__toast {
    background: var(--grey-2);
    font-family: 'Inter';
    font-weight: bold;
    color: var(--grey-0);
  }
  .Toastify__toast-body {
    background: var(--grey-2);
  }
  .Toastify__toast-icon {
    color: var(--negative);
  }
  .Toastify__progress-bar--error {

    background: var(--negative);

  }
  .Toastify__progress-bar--sucess {
    background: var(--sucess);
  }
`

function App() {

  const [dataUser, setDataUser] = useState([]); 

  return <>
      <GlobalStyle/>
        <StyledContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
        <StyledContainer />
      <Routes dataUser={dataUser} setDataUser={setDataUser}/>
    </>
}

export default App;
