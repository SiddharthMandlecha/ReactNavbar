  import React from "react";
import {
 RegisterBackground,
 RegisterContainer,
 CancelBtn,
 Footerbutton,
 TitleCloseDiv,
 TitleCloseBtn,
 FooterDiv,
 Title,
 Body

} from "./Navbar.styles";


function Register({ closeRegister }) {
  return (<>
{/* <section>
             <div className="register">
                  <div className="col-1">
                     <h2>Sign In</h2>
                        <span>register and enjoy the service</span>

                           <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

                            <input type="text" {...register("username",{ required : true, maxLength: 15 })} placeholder='Username' />
                             {errors.username?.type === "required" && "Username is required"}
                             {errors.username?.type === "maxLength" && "Max Length Exceed"}

<br></br>

                             <input type="password" {...register("password",{ required : true, maxLength: 15 })} placeholder='Password' />
                             {errors.password?.type === "required" && "Password is required"}
                             {errors.password?.type === "maxLength" && "Max Length Exceed"}

<br></br>                   
                            
                            <input type="password" {...register("confirmpwd",{ required : true, maxLength: 15 })} placeholder='Confirm password' />
                            
                            {errors.confirmpwd?.type === "required" && "Confirm Password is required"}
                             {errors.confirmpwd?.type === "maxLength" && "Max Length Exceed"}
<br></br>
                                                         
                            <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='Mobile Number' />
                            
                             {errors.mobile?.type === "required" && "Mobile Number is required"}
                             {errors.mobile?.type === "maxLength" && "Max Length Exceed"}

                            <button className='btn'>Sign In</button>
                           </form>
                       </div>
                   <div className="col-2">
               
           </div>
       </div>
</section> */}

<RegisterBackground>
<RegisterContainer>
<TitleCloseDiv>

          <TitleCloseBtn
            onClick={() => 
              closeRegister(false)
            }
          >
            X
          </TitleCloseBtn>
        </TitleCloseDiv>
        <Title>
          <h1>Are You Sure You Want to Continue?</h1>
        </Title>
        <Body>
          <p>The next page looks amazing. Hope you want to go there!</p>
        </Body>
        <FooterDiv>
          <CancelBtn
            onClick={() => 
              closeRegister(false)
            }
            id="cancelBtn"
          >
            Cancel
          </CancelBtn>
          </FooterDiv>
          <Footerbutton>Continue</Footerbutton>
          </RegisterContainer>
          </RegisterBackground>



          </>);
        }
        
export default Register;