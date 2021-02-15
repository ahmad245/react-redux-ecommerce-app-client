import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {AiOutlineUserAdd, AiOutlineUser} from 'react-icons/ai'
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
 
  NavLinks,

  SpaceBetwen
} from './Navbar.element';
import { DropdownMenu } from '../../DropdownMenu';
import DropdownItem from '../../DropdownMenu/DropdownItem';
import { useTypedSelector } from '../../../hooks/useTypedSelector';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  

  const {email} = useTypedSelector((state) => state.authReducer)

  const handleClick = () => {
    setClick(!click);
    
  }
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>

          <NavbarContainer>
          <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            
        
             <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
            </NavLogo>
          
       
           

            <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to='/products' onClick={closeMobileMenu}>
                  {email ? email.split('@')[0] : 'Home'}
                </NavLinks>
              </NavItem>
              <NavItem>
              <DropdownMenu top="0">
               <DropdownItem path="/home" >My Profile</DropdownItem>
               <DropdownItem> Settings </DropdownItem>
               <DropdownItem>Animals </DropdownItem>
               <DropdownItem path="/user/history">History </DropdownItem>
               <DropdownItem path="/admin/history"> admin History </DropdownItem>
               <DropdownItem path="/logout" >Logout </DropdownItem>
            
              </DropdownMenu>
              </NavItem>
              <SpaceBetwen ></SpaceBetwen>
              <NavItem>
                <NavLinks to='/login' onClick={closeMobileMenu}>
                  Login
                 <AiOutlineUser/>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/register' onClick={closeMobileMenu}>
                  Register
                  <AiOutlineUserAdd/>
                </NavLinks>
              </NavItem>
              
              
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;