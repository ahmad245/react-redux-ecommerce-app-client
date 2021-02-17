import  React from 'react';


import { CardAction, CardActions, CardDescription, CardStyledContainer, CardStyledPhoto, CardHeader } from '.';
import { CardContent } from './Card.element';
interface Actions{
  label:JSX.Element;
  to:string;
}
interface PropsCard{
    title:string;
    description:string;
    src:string;
    actions:Actions[];
}

const Card = ({
    title,
    description,
    actions,
    src
  }:PropsCard) => (
    <CardStyledContainer>
    <CardStyledPhoto src={src}/>
    <CardContent>
    <CardHeader>{title}</CardHeader>
      <CardDescription>{description}</CardDescription>
      <CardActions>
        {actions.map(({ label,to }) => (
          <CardAction to={to} >{label}</CardAction>
        ))}
      </CardActions>
    </CardContent>
     
    </CardStyledContainer>
  )
  
  export default Card