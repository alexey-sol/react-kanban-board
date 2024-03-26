import {
  createGlobalStyle,
  css,
} from 'styled-components';

const FONT_FAMILY = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", sans-serif';

const resetStyle = css`
  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    font-family: ${FONT_FAMILY};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, p, ul {
    margin: 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  
  textarea {
    font-family: ${FONT_FAMILY};
  }
`;

export const GlobalStyle = createGlobalStyle`
    ${resetStyle};
`;
