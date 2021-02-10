import styled from "styled-components";

export const ButtonAction=styled.button`
float: right;
padding: 0 14px;
background-color: #02abac;;
color: $float-bouton-couleur !important;
text-transform: uppercase;
display: block;
margin-bottom: 20px;
transition: all 0.3s ease;
border: none;
cursor: pointer;
font-size: 13.0px;
height: 40px;
line-height: 40px;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
&:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

background: linear-gradient($bg, $bg) no-repeat $pos-bg,
linear-gradient($bg-hover, $bg-hover) no-repeat $pos-bg-hover;
background-color: $bg;
	transition: $time all ease;
    cursor: pointer;
    


&:not(:first-child) {
    margin-right: 10px;
}
margin-left: 30px;
`;

export const ButtonValid=styled.button`
text-transform: uppercase;
	text-align: center;
	font-size: 13.2px;
	padding: 0 15px;
	height: 40px;
	line-height: 40px;
	color: $inline-bouton-couleur;
	background-color: #02abac;
	text-decoration: none;
	display: inline-block;
	cursor: pointer;
	transition: background 0.2s;
	transition: background-color ease 0.25s;
	
	

	&:hover {
		color: #028080;;
	}
    margin-left: 30px;
`;
