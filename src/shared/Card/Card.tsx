import  React from 'react';


import { CardAction, CardActions, CardDescription, CardStyledContainer, CardStyledPhoto, CardTitle } from '.';
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
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardActions>
        {actions.map(({ label,to }) => (
          <CardAction to={to} >{label}</CardAction>
        ))}
      </CardActions>
    </CardStyledContainer>
  )
  
  export default Card