import { useState} from 'react'
import styled from 'styled-components'
import { primaryLight, primaryDark,  white,  greyLight1, primary, greyDark3 } from '../_styles/variables'


const Wrapper = styled.div`
   
    .background {
      height: 6rem;
      width: 6rem;
      border-radius: 50%;
      position: fixed;
      top: 6.5rem;
      right: 6.5rem;
      background-image: radial-gradient(${primaryLight}, ${primaryDark});
      z-index: 1000;
      transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);
    }

    .nav-button  {
        background-color:  ${white};
        height: 7rem;
        width: 7rem; 
        border-radius: 50%;
        position: fixed;
        top: 6rem;
        right: 6rem;
        z-index: 2000;
        text-align: center;
        cursor: pointer;
     }
     
     .nav-icon {
        margin-top: 3.5rem;
        position: relative; 

        &,
        &::before,
        &::after {
           width: 3rem;
           height: 2px; 
           background-color: ${greyDark3}; 
           display: inline-block;
        }
        &::before,
        &::after {
           content:'';
           position: absolute; 
           left: 0;
           transition: all .2s;
        }

        &::before {
           top: -.8rem;
        }

        &::after {
            top: .8rem;
         }
         
     }

     .navigation {
         height: 100vh;
         position: fixed;
         top: 0;
         left: 0;
         z-index: 1500;

         opacity: 0;
         width: 0;
         transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
     }
      
     
     ul {
         position: absolute; 
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         list-style: none;
         text-align: center; 
     }

     li {
         
         list-style-type: none; 
         &:not(:last-of-type) {
             margin-bottom: 1rem; 
             
         }
     }

     a, a:link, a:visited{
         display: inline-block;
         text-decoration:none; 
         padding: .5rem 1rem;
         font-size: 2.5rem; 
         font-weight: 300; 
         color: ${greyLight1};
         background-image: linear-gradient(120deg, transparent 0,transparent 50%, ${white} 50%);
         background-size: 240%;
         transition: all .4s; 
         border-radius: 3px;
    }
   
     a:hover, a:active {
         color: ${primary};
         background-position: 100%; 
         transform: translateX(1rem);
     }

 

     .open .background {
          transform: scale(80);
     }
 
     .open  .navigation {
         opacity: 1;
         width: 100%;
     }

     .open  .nav-icon {
        background-color: transparent;
     }

     .open .nav-icon::before {
          top: 0rem;
         transform: rotate(-135deg);
     }

     .open .nav-icon::after {
        transform: rotate(135deg);
        top: 0rem;
     }
    
`

export default function Navigator() {
    const [ open,  setOpen] = useState(false)
    
    function getWrapperClass() {
         if (open === true)   return 'open'
         return ''
    }
    return <Wrapper>
         <div  className={getWrapperClass()}>
          <label className='nav-button' onClick={()=> setOpen(!open)}>
                  <span className='nav-icon'>
                  </span>
          </label>

          <div className='background'>
                  &nbsp;
          </div>
          <div className='navigation'>

            <ul>
                    <li>
                        <a href='#'>About Natours</a>
                    </li>
                    <li>
                        <a href='#'>Your Benefits</a>
                    </li>
                    <li>
                        <a href='#'>Popular Tours</a>
                    </li>
                    <li>
                        <a href='#'>Stories</a>
                    </li>
                    <li>
                        <a href='#'>Book Now</a>
                    </li>
                </ul> 
           </div>
           </div>
        </Wrapper>

}