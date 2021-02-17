import styled from "styled-components";

export const Pagination=styled.div`

&>.pagination{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 1rem 0;
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    background: #fff;
    font-weight: 400;
    border: 1px solid rgba(34,36,38,.15);
    -webkit-box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
    box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
    border-radius: .28571429rem;
    min-height: 2.85714286em;
    vertical-align: middle;
}
&>.pagination a{
    cursor: pointer;
    display:flex;
    position: relative;
    vertical-align: middle;
    line-height: 1;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background: 0 0;
    padding: .92857143em 1.14285714em;
    text-transform: none;
    color: rgba(0,0,0,.87) !important;
    font-weight: 400;
    -webkit-transition: background .1s ease,color .1s ease,-webkit-box-shadow .1s ease;
    transition: background .1s ease,color .1s ease,-webkit-box-shadow .1s ease;
    transition: background .1s ease,box-shadow .1s ease,color .1s ease;
    transition: background .1s ease,box-shadow .1s ease,color .1s ease,-webkit-box-shadow .1s ease;
    
    min-width: 3em;
    text-align: center;

    &:before {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        height: 100%;
        width: 1px;
        background: rgba(34,36,38,.1);
    }
    
    
}
&>.pagination li:first-child {
    border-radius: .28571429rem 0 0 .28571429rem;
}
&>.pagination li:last-child {
    border-radius: 0 .28571429rem .28571429rem 0;
}
`