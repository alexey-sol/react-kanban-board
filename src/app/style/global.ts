import {
  createGlobalStyle,
  css,
} from 'styled-components';

const globalStyle = css`
  body {
    background-color: LightBlue;
  }
`;

const resetStyle = css`
  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', sans-serif;
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
`;

export const GlobalStyle = createGlobalStyle`
    ${resetStyle};
    ${globalStyle};
`;
