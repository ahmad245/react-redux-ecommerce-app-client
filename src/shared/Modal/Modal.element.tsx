import styled from "styled-components";

export const Dimmer=styled.div`
display: flex !important;
 position: fixed; 
-webkit-transform-style: '';
transform-style: '';
-webkit-perspective: 2000px;
perspective: 2000px;
-webkit-transform-origin: center center;
transform-origin: center center;
top: 0!important;
left: 0!important;
width: 100%;
height: 100%;
text-align: center;
vertical-align: middle;
padding: 1em;
background-color: rgba(0,0,0,.85);
opacity: 0;
line-height: 1;
-webkit-animation-fill-mode: both;
animation-fill-mode: both;
-webkit-animation-duration: .5s;
animation-duration: .5s;
-webkit-transition: background-color .5s linear;
transition: background-color .5s linear;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
will-change: opacity;
z-index: 1000;
&.active{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    opacity: 1;
}
&.visible{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    opacity: 1;
}
&.transition{
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-timing-function: ease;
    animation-timing-function: ease;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
&.modal {
    position: absolute;
    display: none;
    z-index: 1001;
    text-align: left;
    background: #fff;
    border: none;
    -webkit-box-shadow: 1px 3px 3px 0 rgb(0 0 0 / 20%), 1px 3px 15px 2px rgb(0 0 0 / 20%);
    box-shadow: 1px 3px 3px 0 rgb(0 0 0 / 20%), 1px 3px 15px 2px rgb(0 0 0 / 20%);
    -webkit-transform-origin: 50% 25%;
    transform-origin: 50% 25%;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    border-radius: .28571429rem;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
    will-change: top,left,margin,transform,opacity;
}
@media only screen and (min-width: 1200px)
.ui.modal {
    width: 900px;
    margin: 0;
}
@media only screen and (min-width: 992px)
&.modal {
    width: 850px;
    margin: 0;
}
&.modal>:first-child:not(.icon) {
    border-top-left-radius: .28571429rem;
    border-top-right-radius: .28571429rem;
}
&.modal>:last-child {
    border-bottom-left-radius: .28571429rem;
    border-bottom-right-radius: .28571429rem;
}
@media only screen and (min-width: 768px)
&.modal {
    width: 88%;
    margin: 0;
}
`;

export const Header=styled.div`
display: block;
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    background: #fff;
    margin: 0;
    padding: 1.25rem 1.5rem;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: rgba(0,0,0,.85);
    border-bottom: 1px solid rgba(34,36,38,.15);
`;
export const Content=styled.div`
display: block;
    width: 100%;
    font-size: 1em;
    line-height: 1.4;
    padding: 1.5rem;
    background: #fff;
`;

export const Actions=styled.div`
background: #f9fafb;
    padding: 1rem 1rem;
    border-top: 1px solid rgba(34,36,38,.15);
    text-align: right;
`;

export const Standard=styled.div`
&.modal{
    position: absolute;
    display: none;
    z-index: 1001;
    text-align: left;
    background: #fff;
    border: none;
    -webkit-box-shadow: 1px 3px 3px 0 rgb(0 0 0 / 20%), 1px 3px 15px 2px rgb(0 0 0 / 20%);
    box-shadow: 1px 3px 3px 0 rgb(0 0 0 / 20%), 1px 3px 15px 2px rgb(0 0 0 / 20%);
    -webkit-transform-origin: 50% 25%;
    transform-origin: 50% 25%;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    border-radius: .28571429rem;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
    will-change: top,left,margin,transform,opacity;
}
&.transition {
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-timing-function: ease;
    animation-timing-function: ease;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
&.hidden.transition {
    display: none;
    visibility: hidden;
}
&.modal {
    font-size: 1rem;
}
@media only screen and (min-width: 1200px)
&.modal {
    width: 900px;
    margin: 0;
}
@media only screen and (min-width: 992px)
&.modal {
    width: 850px;
    margin: 0;
}
@media only screen and (min-width: 768px)
&.modal {
    width: 88%;
    margin: 0;
}

`;

