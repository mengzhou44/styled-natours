import React, {useState } from 'react'
import styled from 'styled-components'
import Button from '../_shared/button'
import { DeviceType, respond } from '../_styles/media'
import { greyLight1, greyLight2, primary, white } from '../_styles/variables'


const About = styled.section`
    background-color: ${greyLight1};
    padding: 10rem 0; 
    margin-top: -20vh;


    ${respond(DeviceType.smallTablet, `
         padding-bottom: 50rem; 
    `)}
   
    ${respond(DeviceType.phone, `
         padding-top: 20rem; 
    `)}

    .row {
        width: 80%;
    }

    .text-box {
        margin: 8rem 0rem;
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

    }

   
    .popup{
        position: fixed; 
        z-index: 3000;
        left:0;
        top: 0;
        height: 100%;
        width: 100%;
        background-color:  rgba(0,0,0, .8);
        text-align: top;
    }

    .popup-content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width:  75%;
        height: 40rem;  
        background-color: ${white};
        box-shadow: 0 2rem 4rem rgba(0,0,0,.4);
        display: table;
        border-radius: 3px; 
        overflow: hidden; 
       
    }

    .popup-left{ 
        width: 33.3333333%;
        display: table-cell; 
        img {
           display: block;
           width: 100%;
        }
        ${respond(DeviceType.smallTablet, `
             width: 0; 
       `)}
   
    }
    .popup-right{ 
        padding: 0rem 5rem; 
        padding-bottom: 16rem; 
        width: 66.6666667%;
        display: table-cell; 
        vertical-align: middle; 
        ${respond(DeviceType.smallTablet, `
             width: 100%;
       `)}
    }

    .popup-text {
       font-size: 1.4rem; 
       column-count: 2;
       column-gap: 4rem;
       column-rule: 1px solid ${greyLight2};
       hyphens: auto;
    }

    .popup-close {
        position: absolute; 
        right: 2rem;
        top: 1rem; 
        font-size: 3rem;
        cursor: pointer; 
    }

`

export default function Sectionbout() {
      const [popupOpen, setPopupOpen] = useState(false)

      function renderPopup() {
           if (popupOpen === true) {
                return  <div className='popup'>
                                <div className='popup-content'>
                                   <a className="popup-close" onClick={()=> setPopupOpen(false)} >&times;</a>
                                     <div className='popup-left'>
                                          <img src='./images/nat-8.jpg' alt='nat-8' />
                                          <img src='./images/nat-9.jpg' alt='nat-9' />
                                     </div> 
                                     <div className='popup-right'>
                                        <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
                                        <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                                        <p className="popup-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Sed sed risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio facilisis mauris sit
                                            amet massa vitae 
                                        </p>
                                        
                                     </div> 
                                </div>
                         </div>
           }
      }
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
                         <div>
                            <Button  size='small' onClick={()=> setPopupOpen(true)} >Book Now</Button>
                         </div>
                      
              </div>
              <div className='col-1-of-2'>
                  <div className='image-container'>
                     <img src='./images/nat-1-large.jpg' alt='photo1'  className='image1' />
                     <img src='./images/nat-2-large.jpg' alt='photo2'  className='image2' />
                     <img src='./images/nat-3-large.jpg' alt='photo3'  className='image3' />
                  </div>
             </div>
              
          </div>
           
          {renderPopup()}
      </About>
}