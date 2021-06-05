// import styled from "styled-components";

// export const TextCenter = styled.div`
//   text-align: center;
// `;

// export const Title = styled.h2`
//   text-transform: uppercase;
// `;

import styled, { createGlobalStyle } from "styled-components";

//App

export const GlobalStyle = createGlobalStyle`
body{
background-color: #262626;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
`;

//Head
export const TextCenter = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
 a{
  text-transform: uppercase;
  margin : 2.5%;
  color: whitesmoke; 
  text-shadow: 3px 3px 50px #fff000;
  text-decoration:none;
 }
`;
