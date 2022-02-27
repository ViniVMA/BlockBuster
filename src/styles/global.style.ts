import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
    }
    html {
        font-size: 62.5%;
    }
    html, body {
       
    }
    body {
        font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #fff;
        font-size: 62.5%;
        position: relative;

    }

    button {
      cursor: pointer;

    }

    a:hover {
 cursor:pointer;
}

    
`;
