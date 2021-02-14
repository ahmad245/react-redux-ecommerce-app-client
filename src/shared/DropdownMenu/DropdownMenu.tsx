import * as React  from 'react';
import '../../index.css'


import { CSSTransition } from 'react-transition-group';
import DropdownItem from './DropdownItem';
import { DropdownMenuStyle, MenuItemContainer, DropdownLink } from './DropdownMenu.element';
import { BrowserRouter, Route } from 'react-router-dom';
import {AiFillHome,AiFillSetting} from 'react-icons/ai';
import App from '../../App';

interface DropdownProps{
    children?:any;
    leftIcon?:any;
    rightIcon?:any;
    top?:string;
}
const DropdownMenu=({children,leftIcon,rightIcon,top}:DropdownProps)=>{
    const [menuHeight,setMenuHeight]=React.useState(0);
    const [activeMenu, setActiveMenu] = React.useState('main');
    const [open, setOpen] = React.useState(false);

   
    
    const dropdownRef=React.useRef<any>(null);

   

    const onClickDom=(e:any)=>{ 
      if(dropdownRef && dropdownRef.current && dropdownRef.current.contains(e.target)) return;
          setOpen(false);
        }
        
    React.useEffect(()=>{
        if(dropdownRef && dropdownRef.current){
            setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
          }

          document.addEventListener('click',onClickDom);
          return ()=>{
              document.removeEventListener('click',onClickDom)
          }

        
    },[])
   
    const calcHeight=(el:any)=>{
       const height=el.offsetHeight;
      
       setMenuHeight(height);

    }

    
  return (
     
    <DropdownMenuStyle  top={top ? top : '10px'} menuHeight={menuHeight} ref={dropdownRef}>
      <DropdownLink onClick={()=>setOpen(!open)}>my dropdwon</DropdownLink>
      {open && 
       
        <MenuItemContainer onClick={()=>setOpen(!open)}>
         {children}
        </MenuItemContainer>
      

      }
     </DropdownMenuStyle>

  )

}
export default DropdownMenu;