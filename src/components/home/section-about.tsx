import styled from 'styled-components'
import { greyLight1, primary } from '../_styles/variables'


const About = styled.section`
    background-color: ${greyLight1};
    padding: 25rem 0; 
    margin-top: -20vh;

    .row {
        width: 80%;
    }

    .text-box {
        margin-bottom: 8rem;
        text-align: center;  
    }

    h3 {
        margin-top: 2rem; 
    }

    a.btn-text {
        color: ${primary};
        text-decoration: none; 
        cursor: pointer; 
        box-shadow: 0,  1rem 1rem rgba(0,0,0, .2);
        transition: all  .2s; 
        padding: .5rem; 
        border-radius: .3rem; 
        
        &:hover {
            background-color: ${primary};
            color: #fff;
            transform: translateY(3px);
            box-shadow: 0rem 1rem 2rem  rgba(0,0,0, .5);
        }
    }


`


export default function Sectionbout() {
      return <About>
          <div className='text-box'>
               <h2 className='heading-secondary'>
                 Exciting tours for adventurous people
               </h2>
          </div>
          <div className='row'>
              <div className='col-1-of-2'>
                     <h3 className='heading-tertiary'>You're going to fall in love with nature</h3>
                        <p className='paragraph'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                            ducimus quam nisi exercitationem omnis earum qui.
                        </p>

                        <h3 className='heading-tertiary'>Live adventures like you never have before</h3>
                        <p className='paragraph'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                        </p>

                        <a href='#' className='btn-text'>Learn more &rarr;</a>
              </div>
              <div className='col-1-of-2'>
                  col2 
             </div>
          </div>
           
      </About>
}