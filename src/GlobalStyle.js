import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.colors.body};
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.05em;
    transition: background-color 0.2s linear;
    overflow-wrap: anywhere;
  }
`;