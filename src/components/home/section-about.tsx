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

    .image-container {
        position: relative; 
        &:hover img:not(:hover) {
            transform: scale(0.8);
        }
    }

    img {
        width: 55%;
        height: auto; 
        box-shadow:  0 2rem 4rem rgba(0,0,0,.4);
        border-radius: 2px; 
        position: absolute; 
        transition: all .2s; 
        outline-offset: 2rem;

        &:hover{
            outline: 1rem solid ${primary};
            transform: scale(1.05);
            box-shadow: 0 2.5rem  4rem rgba(0,0,0, .5); 
            z-index: 2;
        }
    }

    .image1 {
          left: 0;
          top: -2rem;
    }

    .image2 {
        right: 0rem;
        top:  2rem;
    }

    .image3{
        left: 20%;
        top: 10rem; 
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
                  <div className="image-container">
                     <img src='./images/nat-1-large.jpg' alt='photo1'  className='image1' />
                     <img src='./images/nat-2-large.jpg' alt='photo2'  className='image2' />
                     <img src='./images/nat-3-large.jpg' alt='photo3'  className='image3' />
                  </div>
                
             </div>
          </div>
           
      </About>
}