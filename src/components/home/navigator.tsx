import { useState} from 'react'
import styled from 'styled-components'
import { primaryLight, primaryDark,  white, greyDark, greyLight1, primary } from '../_styles/variables'

const ClosedMenu = styled.div`
     
     position: fixed;
     top: 6rem;
     right: 6rem;
     height: 7rem; 
     width: 7rem; 
     border-radius: 50%;
     background-color: ${white};
    
     z-index: 2; 
   
`

const Menu = styled.div`
     
     position: fixed;
     top:0;
     right:0; 
     height: 100%;
     width: 100%;
     z-index: 2;
     background-image: radial-gradient(farthest-corner at 4rem 4rem,
    ${primaryLight}, ${primaryDark});
     
     i {
         color: white;
         font-size: 4rem; 
         font-weight:700; 
         cursor: pointer; 
     }

     .close {
         position: absolute; 
         top: 5rem;
         right: 5rem;
     }

     ul {
         position: absolute;
         top: 50%;
         left: 50%;
         transform:  translate(-50%, -50%); 
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
    
`

export default function Navigator() {
    const [ menuOpen, setMenuOpen] = useState(false)

    if ( menuOpen === false)   return  <ClosedMenu  onClick={()=> setMenuOpen(true)} >
             
    </ClosedMenu>
    
    return <Menu>
           <div className='close'>
               <i className='icon-basic-world' onClick={()=> setMenuOpen(false)} />      
           </div>

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
    </Menu>

}