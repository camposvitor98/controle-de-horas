import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: transparent;
  box-sizing: border-box;
  
  font-family: sans-serif;


  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
    background-color: #777;
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 1rem;
  }
}


html {
  font-size: 81.25%;
  
  @media screen and (min-width: 640px) {
    font-size: 87.5%;
  }
  
  @media screen and (min-width: 768px) {
    font-size: 93.75%;
  }
  
  @media screen and (min-width: 1024px) {
    font-size: 100%;
  }
}

a {
  color: inherit;
  text-decoration: none;
}

input:-webkit-autofill,
input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
}
input[data-autocompleted] {
    background-color: transparent !important;
}


ul, li, ol {
  list-style: none;
}

button {
  border: none;
  background: transparent;

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
}

svg {
  font-size: 1.5rem;
  stroke-width: 1.5px;
}
`;
