import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        text-decoration: none;
    }

    form {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
    }
    body {
        background-color: #fff;
    }

    h1, h2, h3, h4, h5, h6, p {
        color: #264653;
    }

    .font-bits {
        font-family: 'Press Start 2P', cursive;
    }

`

export default GlobalStyle;