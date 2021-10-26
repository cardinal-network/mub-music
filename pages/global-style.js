import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body {
    background: ${({ theme }) => theme.colors.background};
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    overflow-x: hidden;
  }
  *{
    margin: 0;
    -webkit-transition: 0.25s;
    -moz-transition: 0.25s;
    -o-transition: 0.25s;
    -ms-transition: 0.25s;
    transition: 0.25s;
    &:hover {
      -webkit-transition: 0.2s;
      -moz-transition: 0.2s;
      -o-transition: 0.2s;
      -ms-transition: 0.2s;
      transition: 0.2s;
    }
  }
  button, a{
    cursor: pointer;
    outline: none;
    text-decoration: none;
  }
  image{
    width: 100%;
  }
  .row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .row-centered{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .cursorPointer{
    cursor: pointer;
  }
  .title-border{
    color: ${({ theme }) => theme.colors.text_4};
    font-weight: 500;
    border-left: 5px solid ${({ theme }) => theme.colors.primary};
    padding-left: 10px;
  }
`;

export default GlobalStyle;