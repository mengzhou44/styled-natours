import React from 'react'
import styled from 'styled-components'
import { defaultFontSize,   white } from '../_styles/variables'


const Stories = styled.section`
   padding: 25rem 0; 
   margin-top: -10rem; 
   position: relative;
  
   .bg-video {
     position:  absolute; 
     top:  0;
     left: 0;
     width: 100%;
     height: 100%;
     opacity: .15;
     z-index: -1; 
      
     video {
        width: 100%;
        height: 100%;
        object-fit:cover;
     }
   }

    .text-box {
        
        margin-left: 8rem;
        text-align: center;  
    }

    .story{ 
        width: 75%;
        margin: 0 auto; 
        margin-bottom: 3rem; 
        box-shadow: 0 3rem 6rem rgba(0,0,0,.1);
        background-color: ${white};
        border-radius: 3px; 
        font-size: ${defaultFontSize};
        padding: 6rem; 
        transform: skewX(-12deg);
        transition: all 1s;
    
    }

    .shape {
        width: 12rem;
        height: 12rem;
        float: left;
        border: none; 
        -webkit-shape-outside: circle(50% at 50% 50%);
        shape-outside: circle(50% at 50% 50%);
        -webkit-clip-path: circle(50% at 50% 50%);
        clip-path: circle(50% at 50% 50%);
        transform: translateX(-3rem) skewX(12deg);
        position: relative;
        
        img {
            height: 100% !important;
            transform: translateX(-4rem) scale(1.4);
            backface-visibility: hidden;
            transition: all .5s;
        }

        figCaption{
            position: absolute; 
            left: 50%;
            top: 50%;
            transform: translate(-50%, 20%);
            color: ${white};
            text-align: center; 
            opacity: 0; 
            transition: all .5s;  
            backface-visibility: hidden;       
        }
    }
    
    .text {
        transform:  skewX(12deg);
    }
    .story:hover figCaption {
        transform: translate(-50%,-50%);
        opacity: 1; 
    }

    .story:hover img {
      transform:   translateX(-4rem)   scale(1);
      filter:   blur(3px)  brightness(80%);
    }
    
`

export default function SectionStories() {
     
    return  <Stories> 
        <div className='bg-video'>
            <video autoPlay loop muted>
               <source src='./images/video.mp4' type='video/mp4'></source>
            </video>
        </div>
        <div className='text-box'>
            <h2 className='heading-secondary '>
                We make people genuinely happy
            </h2>
        </div>
        <div className='row'>
            <div className='story'>
                 <figure className='shape'>
                      <img src='./images/nat-8.jpg' alt='nat8' />
                      <figcaption>
                           Mary Smith
                      </figcaption>
                       
                 </figure>
                 <div className='text'>
                     <h3 className='heading-tertiary u-margin-bottom-small'>
                           I had the best week ever with my family
                     </h3>
                     <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero 
                     </p>
                 </div>
            </div>

            <div className='story'>
                 <figure className='shape'>
                      <img src='./images/nat-9.jpg' alt='nat9' />
                      <figcaption>
                           Tom Hughs
                      </figcaption>
                       
                 </figure>
                 <div className='text'>
                     <h3 className='heading-tertiary u-margin-bottom-small'>
                          Wow! My life is completely different now!  
                     </h3>
                     <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero 
                     </p>
                 </div>
            </div>
            
            <div className='u-center-text u-margin-top-huge'>
                 <a href='#' className='btn-text' >Read all stories &rarr;</a>
            </div>
          
        </div>
    </Stories>
}