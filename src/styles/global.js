import {createGlobalStyle} from 'styled-components'


export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --primary: #FF577F;
    --primary-focus: #FF427F;
    --primary-negative: #59323F;
    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;
    --sucess: #3FE864;
    --negative: #E83F5B;
    --toastify-icon-color-error: #E83F5B;
    --toastify-icon-color-sucess: #3FE864;

  }

  body {
    background-color: #121214;
    color: var(--grey-0);
  }

  body, input, button {
    font-family: 'Inter', serif;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

`