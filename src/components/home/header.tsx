import styled from 'styled-components'

import  Button from '../_shared/button'
import { DeviceType, respond } from '../_styles/media'

interface WrapperProps {
    background:string 
}

const Wrapper  = styled.header<WrapperProps>`
    height: 95vh;
    background-image: linear-gradient(
        to right bottom,
       rgba(126,213,111,0.8), 
       rgba(40,180,131,0.8)), 
       url(${props => props.background});
    background-size: cover;
    background-position: top;  
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    position: relative;

    ${respond(DeviceType.phone, `
             clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
    `)}
   
    img {
        position: absolute; 
        left: 4rem;
        top: 4rem;
        height: 3.5rem; 
        width: auto; 
    }

    .box {
        position: absolute; 
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
   
     h1 {
        color: #fff;
        margin-bottom: 6rem;  
     }

     h1 span:nth-child(1){
            display: block;
            font-size: 6rem;
            font-weight: 300; 
            letter-spacing: 2.5rem; 
            animation: moveInLeft;
            animation-duration: 1s; 
            animation-timing-function: ease-out;

            ${respond(DeviceType.phone, `
                  letter-spacing: 1rem; 
            `)}
      }

     h1 span:nth-child(2){ 
            margin-top: .5rem;
            display: block;
            font-size: 2rem; 
            font-weight: 700; 
            letter-spacing: 1.5rem; 
            animation: moveInRight;
            animation-duration: 1s; 
            animation-timing-function: ease-out;

            ${respond(DeviceType.phone, `
                  letter-spacing: .5rem; 
            `)}
    } 

`


export default function Header() {
     return <Wrapper background='./images/hero.jpg' >
          <img src='./images/logo-white.png' alt='logo' />
          <div className='box'>
                <h1>
                    <span>Outdoors</span>
                    <span>is where life begins</span>
                </h1>
                <Button kind='white'  animated={true} >Discover our tours</Button>
          </div>
         
     </Wrapper>
}