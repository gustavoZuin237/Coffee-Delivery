import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    *:focus {
        border: 0;
        outline: 0;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 100vw;
    }

    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.purple};
        border-radius: 100vw;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme['purple-dark']};
    }

    body {
        padding-inline: 10rem;
    }

    body, input, button {
        -webkit-font-smoothing: antialiased;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
