import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }
    html, body, #__next {
        height: 100%;
    }
    body {
        font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        /* color: #fff; */
    }

    .overlayModal {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000050;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    
  }
  .modal {
    width: 100%;
   max-width: 700px;
   padding: 3rem;
    
  }
`;
