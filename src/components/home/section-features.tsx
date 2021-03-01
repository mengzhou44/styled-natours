import styled from 'styled-components'
import { DeviceType, respond } from '../_styles/media'

import {white, primaryLight, primaryDark} from '../_styles/variables'

const  Features = styled.section`
    padding: 20rem 0;
    margin-top: -10rem;
    background-image: linear-gradient(
       to right bottom,
       rgba(126,213,111,0.8), 
       rgba(40,180,131,0.8)),
       url('./images/nat-4.jpg');
    transform: skewY(-7deg);

    ${respond(DeviceType.smallTablet, `
           padding: 10rem 0;
    `)}

    & > * {
        transform: skewY(7deg);
    }   
     
    .box {
        background-color: rgba(255,255,255, 0.8);
        font-size: 1.4rem;
        padding: 2.5rem  2rem; 
        width: 100%;
        text-align:center;
        border-radius: 3px; 
        box-shadow: 0 1.5rem 4rem rgba(0,0,0,.15);
        transition: all  .2s;
        
        &:hover {
              transform: translateY(-1rem) scale(1.05); 
        }

        i {
            font-size: 6rem; 
            display: inline-block;
            background-image: linear-gradient(to right, ${primaryLight}, ${primaryDark});
            -webkit-background-clip: text; 
            color: transparent;  
        }
    }

    h3.heading-tertiary {
        margin-bottom:1.5rem;
    }

`

export default function SectionFeatures() {

    return <Features>
          
          <div className='row'>
              <div className='col-1-of-4'>
                  <div className='box'>
                     <i className='icon-basic-world' />    
                     <h3 className='heading-tertiary'>Explore the world</h3>
                     <div className="box-text">
                         Lorem ipsum dolor sit amet consectetur adipisicing
                     </div>
                  </div>   
              </div>
           
              <div className='col-1-of-4'>
                  <div className='box'>
                     <i className='icon-basic-compass' />    
                     <h3 className='heading-tertiary'>Meet Nature</h3>
                     <div className="box-text">
                         Lorem ipsum dolor sit amet consectetur adipisicing
                     </div>
                  </div>   
              </div>

              <div className='col-1-of-4'>
                  <div className='box'>
                     <i className='icon-basic-map' />    
                     <h3 className='heading-tertiary'>Find Your Way</h3>
                     <div className="box-text">
                         Lorem ipsum dolor sit amet consectetur adipisicing
                     </div>
                  </div>   
              </div>

              <div className='col-1-of-4'>
                  <div className='box'>
                     <i className='icon-basic-heart' />    
                     <h3 className='heading-tertiary'>Live Healthier Life</h3>
                     <div className="box-text">
                         Lorem ipsum dolor sit amet consectetur adipisicing
                     </div>
                  </div>   
              </div>
          </div>
    </Features>
}