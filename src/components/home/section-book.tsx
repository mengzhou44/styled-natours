import React from 'react'
import styled from 'styled-components'
import Button from '../_shared/button'
import { DeviceType, respond } from '../_styles/media'
import { primary, primaryDark, primaryLight, secondaryDark } from '../_styles/variables'


const Book = styled.section`
     background-image: linear-gradient(to right bottom, ${primaryLight}, ${primaryDark} );
     padding: 15rem 0; 

     .book {
        background-image: 
             linear-gradient(105deg, 
                 rgba(255,255,255, .9) 0%,
                 rgba(255,255,255, .9) 50%,
                   transparent 50%),
             url('./images/nat-10.jpg');

      
         
        background-size: cover; 
        height: 50rem; 
        border-radius:  .3rem; 
        box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .3);

        ${respond(DeviceType.largeTablet, `
                   background-image: 
                        linear-gradient(105deg, 
                            rgba(255,255,255, .9) 0%,
                            rgba(255,255,255, .9) 65%,
                            transparent 65%),
                        url('./images/nat-10.jpg');
                    background-size: 100%;
                        
         `)}

          ${respond(DeviceType.smallTablet, `
                   background-image: 
                        linear-gradient(to right, 
                            rgba(255,255,255, .9) 0%,
                            rgba(255,255,255, .9) 100%),
                        url('./images/nat-10.jpg');
                   
                        
         `)}
     }

     .form {
        padding: 6rem;
        width: 50%; 


        ${respond(DeviceType.largeTablet, `
                  width: 65%; 
         `)}
        ${respond(DeviceType.smallTablet, `
            width: 100%; 
         `)}
     }

  
     .field {

     input{
         
         font-family:inherit;
         color: inherit; 
         font-size: 1.5rem;
         padding: 1.5rem 2rem; 
         border-radius: 2px;
         background-color: rgba(255,255,255,.5);
         border: none;
         border-bottom: 3px solid  transparent;
         display: block;
         width: 90%;
         transition: all .3s; 

         ${respond(DeviceType.smallTablet, `
               width: 100%;
         `)}
         
       
         &:focus {
             box-shadow: 0 1rem 2rem rgba(0,0,0, .1);
             border-bottom: 3px solid ${primary};
         }

         &:focus:invalid {
            border-bottom: 3px solid  ${secondaryDark};
         }

         &::-webkit-input-placeholder {
            color: #999;
         }
       }
      
        label {
           font-size: 1.2rem;
           font-weight: 700; 
           margin-top: .7rem; 
           margin-left: 2rem; 
           display: block;
           transition: all .5s; 
           transform: translateY(0);
        }


        input:placeholder-shown + label {
             opacity: 0;
             visibility: hidden; 
             transform: translateY(-4rem);
        }
     }

     .radio-field {
         margin-left: -1rem;
         display: flex;
         flex-direction: row; 

         ${respond(DeviceType.smallTablet, `
                 flex-direction: column; 

                 .radio:not(:last-child) {
                     margin-bottom: 1rem; 
                 }
         `)}
         
         .radio {
             width: 50%;
             display: flex;
             align-items:center; 
             justify-content: flex-start;

             input {
                 visibility: hidden;
             }

             label {
                    font-size: 1.6rem; 
                    padding: .5rem; 
                    cursor: pointer;
             }

            .radio-button {
                
                 height: 2.5rem; 
                 width:  2.5rem; 
                 border: .3rem solid ${primary};
                 border-radius: 50%;
                 display: inline-block;
                 position: relative; 

                 &::after {
                     content: ''; 
                     width: 1rem;
                     height: 1rem;
                     border-radius: 50%;
                     display: block; 
                     position: absolute; 
                     left: 50%;
                     top: 50%;
                     transform: translate(-50%, -50%);
                     background-color: ${primary};
                     opacity: 0; 
                 }
            }

            input:checked ~ .radio-button::after  {
                opacity: 1; 
            }

          
         }
    
         button {
             text-align: center !important;
         }
        
     }

    
`


export default function SectionBook() {
     return <Book>
         <div className='row'>
             <div className='book'>
                  <div className='form'>
                      <form action='#'>
                           <div className='u-margin-bottom-medium'>
                            <h2 className='heading-secondary'>
                                    Start Booking now
                                </h2>
                           </div>
                            
                          <div className='field'>
                             <input  id='name' type='text' placeholder='Full Name' autoComplete='off' required />
                             <label htmlFor='name'>Full Name</label>
                          </div>
                          <div className='field'>
                              <input  id='email' type='email' placeholder='Email' autoComplete='off' required />
                              <label htmlFor='email'>Email</label>
                         </div>

                         <div className='radio-field u-margin-bottom-medium'>
                             <div className='radio'>
                                <input  id='small' type='radio' name='size' />
                                <span className='radio-button'></span>
                                <label htmlFor='small'>Small tour group</label>
                             </div>
                             <div className='radio'>
                                <input  id='large' type='radio' name='size' />
                                <span className='radio-button'></span>
                                <label htmlFor='large'>Large tour group</label>
                             </div>
                             
                         </div>
                         
                         <div className='field'>
                             <Button  size='small' >Next Step&rarr;</Button>
                         </div>

                      </form>

                  </div>
             </div>
         </div>
     </Book>
}