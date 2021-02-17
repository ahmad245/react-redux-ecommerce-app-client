import { Link } from "react-router-dom"
import styled from "styled-components"


export const CardStyledContainer = styled.div`
max-width: 100%;
position: relative;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
width: 290px;
min-height: 0;
background: #fff;
padding: 0;
border: none;
border-radius: .28571429rem;
-webkit-box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
-webkit-transition: -webkit-box-shadow .1s ease,-webkit-transform .1s ease;
transition: -webkit-box-shadow .1s ease,-webkit-transform .1s ease;
transition: box-shadow .1s ease,transform .1s ease;
transition: box-shadow .1s ease,transform .1s ease,-webkit-box-shadow .1s ease,-webkit-transform .1s ease;
z-index: '';
`
export const CardContent = styled.div`
-webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    border: none;
    border-top: 1px solid rgba(34,36,38,.1);
    background: 0 0;
    margin: 0;
    padding: 1em 1em;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-size: 1em;
    border-radius: 0;
    &:after {
      display: block;
      content: ' ';
      height: 0;
      clear: both;
      overflow: hidden;
      visibility: hidden;
  }
`;

export const CardHeader = styled.h2`
font-weight: 700;
font-size: 1.28571429em;
margin-top: -.21425em;
line-height: 1.28571429em;
display: block;   
font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
color: rgba(0,0,0,.85);
cursor: pointer;
`

export const CardDate = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`

export const CardDescription = styled.p`
clear: both;
color: rgba(0,0,0,.68);
margin-top: .5em;
`

export const CardActions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`

export const CardAction = styled(Link)`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  :active {
    
  }
`

export const CardStyledPhoto = styled.img`
position: relative;
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding: 0;
    background: rgba(0,0,0,.05);
`