import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  RegisterBtn,
  LoginBtn,
  Input,
  
} from "./Navbar.styles";
import LogoImg from "../components/BMW_logo_blue.png";
import Register from "./register";



function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
   const [RegisterOpen, setRegisterOpen] = useState(false);
  return (
    <>
    <NavbarContainer extendNavbar={extendNavbar}>
      

      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={LogoImg}></Logo>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/Become-a-teacher">Become a Teacher</NavbarLink>
          <Input type="text" className={`search ${Text}`} placeholder='Search'/>
        </LeftContainer>

        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/English,usd">English,USD</NavbarLink>
            <NavbarLink to="/About-us">About us</NavbarLink>
            <NavbarLink to="/contact">Contact</NavbarLink>
          </NavbarLinkContainer>
     
     
      <RegisterBtn
        variant="RegisterOpen"
        onClick={() => {
          setRegisterOpen(true);
        }}
      >
        Register
      </RegisterBtn>
      
<br></br>

      <LoginBtn
        className="LoginOpen"
        onClick={() => {
          setRegisterOpen(true);
        }}
      >
        Login
      </LoginBtn>
      
      

      {RegisterOpen && <Register closeRegister={setRegisterOpen} />}
        </RightContainer>
        <OpenLinksButton
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        >
          {extendNavbar ? <> &#10005;</> : <> &#8801;</>}
        </OpenLinksButton>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/home">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/Become-a-teacher">Become a Teacher

          </NavbarLinkExtended>
          <NavbarLinkExtended to="/English,usd">English,USD</NavbarLinkExtended>
          <NavbarLinkExtended to="/About-us">About Us</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact">Contact</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
      </NavbarContainer>
    



</>);
}

export default Navbar;
































