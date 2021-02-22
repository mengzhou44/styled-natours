import  styled from 'styled-components'
import { greyDark3, greyLight1, greyLight2, primary, white } from '../_styles/variables'
 

const Footer = styled.footer`
     background-color: ${greyDark3};
     min-height: 20rem;

     .row {
         width: 100%; 
     }

     .logo {
         width: 100%; 
         height: 6rem; 
         padding: 1rem;
         display: flex; 
         justify-content: center;
         margin-bottom: 3rem; 
         img {
            height: 100%;
            width: auto;
            filter:  brightness(80%);
        }
     }
     
     ul {

         border-top: 1px solid ${greyLight2};
         padding-top: .5rem; 
         display: inline-block; 
     }

     li {
         display: inline-block; 
         
         &:not(:last-child){
            margin-right: 1rem; 
         }

         a, a:link, a:visited {
             color: ${greyLight1};
             text-transform: uppercase;
             font-size: 1.2rem;
             transition: all .3s; 
             display: block; 
             text-decoration: none;    
         }

         a:hover, a:active {
                    color: ${primary};
                    transform: rotate(5deg) scale(1.1);
                    box-shadow: 0 1rem 2rem rgba(0,0,0, .4);
         }
     }

     .copyright {
        color: ${greyLight1};
        font-size: 1.2rem; 
        border-top: 1px solid ${greyLight2};
        padding-top: 1rem; 
        display: inline-block; 

        a, a:link, a:visited {
           color: #777;
           transition: all .3s; 
           display: inline-block;
        }

        a:hover, a:active {
             color: ${primary};
             transform: rotate(5deg) scale(1.1);
             box-shadow: 0 1rem 2rem rgba(0,0,0, .4);
         }
     }

  

`

export default function Wrapper() {
    return <Footer>
        <div className='logo'>
            <img src='./images/logo-white.png' alt='logo' />
        </div>

        <div className='row'>
            <div className='col-1-of-2'>
                  <div className='navigation'>
                     <ul>
                        <li><a href='#'>Company</a></li>
                        <li><a href='#'>Contact Us</a></li>
                        <li><a href='#'>Careers</a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                        <li><a href='#'>Terms</a></li>
                    </ul>
                  </div>
                   
            </div>
            <div className='col-1-of-2'>
                <div className='copyright'>
                         Built by <a href="#" >Jonas Schmedtmann</a> for his online course <a href="#" >Advanced CSS and Sass</a>.
                        Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal
                        and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas
                        Schmedtmann, is of course highly appreciated!

                </div>
           </div>
        </div>
    </Footer>
}