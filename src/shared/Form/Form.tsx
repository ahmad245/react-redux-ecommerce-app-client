import styled from "styled-components";

export const Form=styled.form`
padding-bottom: 10px;
& fieldset{
    box-sizing: border-box;
    border: none;
    padding: 0 0 30px 0;
    margin: 0;
    width: 100%;
}
&.field{
    width: 100%;
    margin-top: 16px;
}
&.field label{
    display: block;
    margin-bottom: 4px;
}
&.field label.inline{
    display: inline-block;
}
&.form-footer {
    position: absolute;
    bottom: 0;
    left:0;
    background: #fff;
    height: 50px;
    text-align: center;
    text-transform: uppercase;
    margin: 0 auto;
    width: 100%;
}

`;

export const FormContainer=styled.div`
 width:70%;
 max-width:70%;
 display:flex;
 flex-direction:column;
 
`;