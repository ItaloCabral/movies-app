import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }


  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .container {
    max-width: 1200px;
    height: calc(100vh - 60px);
    background-color: #aaa;
    background-image: url("https://wallpaperaccess.com/full/4249199.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0 auto;
    padding: 0 20px;
    overflow-y: auto;
  }

  .container::-webkit-scrollbar {
    width: 16px;
    background-color: #3b546d;
  }

  .container::-webkit-scrollbar-thumb {
    background-color: #1c283d;
    width: 16px;
    border: 3px solid #3b546d;
  }
`;
