import styled from "styled-components";
import { Link } from "react-router-dom";


// toggle open menu rightop

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: white;
  display: flex;
  flex-direction: column;

  @media (min-width: 1020px) {
    height: 70px;
  }
`;


export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  padding-bottom: 1px;
  

/* 
  @media (max-width: 768px) {
    display: none;
  } */



`;

export const RightContainer = styled.div`
  flex: 50%;
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
  padding-top: 1.5%;
  font-size: 20px;
  text-align: center;
  
  /* padding:2% ; */
  
  /* @media (max-width: 768px) {
    display: none;
  } */
`;

export const NavbarInnerContainer = styled.div`
  width: 100%; 
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  font-size: 20px;
  padding-left: 1%;
 
`;

//Text 

export const NavbarLink = styled(Link)`
  color: black ;
  font-size: 15px;
  padding-top: 2%;
  margin-top: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  /* font-style: initial; */
  text-decoration: navy ;
  //to seperate all items in navbar
  margin: 10px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: black ;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-decoration: none;
  margin: 10px;
  font-size: 19px;
`;

export const Logo = styled.img`
  max-width: 75px;
  padding-right: 5%;
  margin-top: 20px;
  height: auto;
`;


//Toggle Responsive

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 65px;
  background: none;
  border: none;
  color: black;
  font-size: 30px;
  cursor: pointer;

  @media (min-width: 1100px) {
    display: none;
  }
`;

//Inside Toggle

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1100px) {
    display: none;
  }
`;

export const RegisterBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
 
`;

export const Title = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
`;

export const TitleCloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TitleCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

export const Body = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  text-align: center;
`;

export const FooterDiv = styled.div`
  flex: 20%;
  display: flex;
  justify-content: baseline;

  /* align-items: flex-end; */
`;

export const CancelBtn = styled.button`
  width: 150px;
  height: 45px;
  margin: 10px;
  border: none;
  background-color: red;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
`;

export const Footerbutton = styled.button`
  background-color: blue;
  width: 200px;
  height: 55px;
  margin: 10px;
  border: none;
  color: white;
  border-radius: 80px;
  font-size: 20px;
  cursor: pointer;
`;


//Register Button

export const RegisterBtn = styled.button`
  border-radius: 150px;
  margin-top: 10px;
  height: 40px;
  width: 25%;
  background: #dcdcdc ;
  padding: 13px 19px;
  color: #c0c0cc solid;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  /* Second Nav */
  margin-left: 14px;

  @media (max-width: 768px) {
    display: none;
  }


`;



//Login Button

export const LoginBtn = styled.button`
  margin-top: 10px;
  border-radius: 150px;
  height: 40px;
  width: 25%;
  background: #11a71c;
  padding: 13px 5%;
  color: #f8f8ff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  /* Second Nav */
  margin-left: 14px;


  @media (max-width: 576px) {
    display: none;
  }


`;



//search button

export const Input = styled.input`
   border-radius: 150px;
  margin-top: 20px;
  height: 15px;
  width: 25%;
  background: #dcdcdc ;
  padding: 13px 19px;
  color: #000000;
  /* font-style: ; */
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  /* Second Nav */
  margin-left: 14px;

  /* @media (max-width: 450px) {
    display: none;
  } */


`;
