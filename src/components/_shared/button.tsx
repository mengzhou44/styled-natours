import styled from 'styled-components'

import { greyDark,  primary} from '../_styles/variables'

interface ButtonProps {
     size?: string
     kind?: string,
     animated?:  boolean; 
}

const Button = styled.button<ButtonProps>`

     cursor: pointer;
     display: inline-block;
     border: none; 
     border-radius: 10rem; 
     font-size: 1.6rem; 
     transition: transform .2s; 
     box-shadow: 0 .5rem 1rem  rgba(0,0,0, .2);

     &:hover, &:focus {
        transform: translateY(-.3rem);
        box-shadow: 0 1rem 2rem rgba(0,0,0, .2);
     }

     ${(props: ButtonProps)=> {
          const {size} = props

          if (size === 'small')
                   return `
                        padding: 1rem 2rem;
                    `

          return    `
                         padding: 1.5rem 4rem;
                         text-transform: uppercase;
                    `
     }}
    
     ${(props: ButtonProps)=> {
         const {kind} = props

         if (kind === 'white')  return  `
                         background-color: #fff;
                         color:  ${greyDark};
                   `

         return `
                         background-color: ${primary};
                         color:   #fff;
                  `
         

     }}

    ${(props: ButtonProps)=> {
        const {animated} = props

        if (animated === true)  return  `
                 animation: moveInBottom;
                 animation-timing-function: ease-out;
                 animation-duration: 1s; 
               ` 
     }}
      
`

export default Button 