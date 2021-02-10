import { Link } from 'react-router-dom';
import styled  from 'styled-components';
type OtherDataWrapperType = {
    menuHeight?: any;
    top?:any;
}
export const DropdownMenuStyle=styled.div<OtherDataWrapperType>`
  position: absolute;
  top: ${(props:any)=>props.top ? props.top : '58px'} ;
  width: 300px;
  height:${(props:any)=>props.menuHeight? props.menuHeight : ''};
   transform: ${(props:any)=> props.transformEnd ? 'translateX(-45%)' :'' }; 
  background-color: var(--bg);
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 1rem;
  overflow: hidden;
  transition: height var(--speed) ease;
`;

export const MenuItemContainer=styled('div')`
border-top:1px solid #fff;
width: 100%;
`;

export const MenuItem=styled(Link)`
height: 50px;
display: flex;
align-items: center;
border-radius: var(--border-radius);
transition: background var(--speed);
padding: 0.5rem;
&:hover {
    background-color: #525357;
  }
`;

export const MenuItemIcon=styled('span')`
margin-right: 0.5rem;
&:hover{
    filter: none;
}
`


export const DropdownLink=styled.div`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;

cursor: pointer;
@media screen and (max-width: 960px) {
  text-align: center;
  padding: 2rem;
  width: 100%;
  display: table;
  &:hover {
    color: #4b59f7;
    transition: all 0.3s ease;
  }
}

`;



