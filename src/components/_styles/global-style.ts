import { createGlobalStyle } from 'styled-components'

import  * as variables  from './variables'

import './grid.scss'
 

const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after
  {
      padding: 0px; 
      margin: 0px; 
      box-sizing: inherit;
  }

  *:focus {
      outline: none;
  }

  html {
      font-size: 62.5%;
  }

  body {
     color: #777;
     font-weight:400;
     font-family: ${variables.fontFamily};
     font-size: 1.6rem;
     line-height: 1.7;  
     text-rendering: optimizeLegibility;
     padding: 2rem;
     box-sizing: border-box;
  }


  h1 {
     text-transform: uppercase; 
     font-weight: 300; 
     color: #fff;
     font-size: 200%;
     line-height: 145%;
  }

  .heading-secondary {
      display: inline-block;
      font-size: 3rem;
      font-weight: 700; 
      text-transform: uppercase; 
      background-image: linear-gradient(to right, ${variables.primaryLight}, ${variables.primaryDark});
      -webkit-background-clip: text; 
      letter-spacing: 2px; 
      color: transparent;
      transition: transform .2s; 

      &:hover {
        transform:  skewY(2deg) skewX(15deg) scale(1.1);
        text-shadow: 0.5rem 1rem 2rem rgba(0,0,0, 0.2);
      }
  }

  .heading-tertiary {
    text-transform: uppercase;
    font-weight: 700;
    font-size: ${variables.defaultFontSize};  
  }
 
  .paragraph {
        font-size: ${variables.defaultFontSize};  

        &:not(:last-child) {
            margin-bottom: 3rem;
        }
   }
 
  @keyframes moveInLeft {
   0% {
       opacity: 0; 
       transform: translateX(-10rem);
   }

   80% {
       transform: translateX(1rem);
   }
  
   100% {
        opacity: 1; 
        transform: translateX(0);
    }

  }

  @keyframes moveInRight {
   0% {
       opacity: 0; 
       transform: translateX(10rem);
   }

   80% {
       transform: translateX(-1rem);
   }
  
   100% {
        opacity: 1; 
        transform: translateX(0);
    }

  }


  @keyframes moveInBottom {
   0% {
       opacity: 0; 
       transform: translateY(20rem);
   }

   80% {
       transform: translateX(-1rem);
   }
  
   100% {
        opacity: 1; 
        transform: translateY(0);
    }

  }


`

export default GlobalStyle
