import React from "react";
import ReactDom from "react-dom";
import { Dimmer, Header, Standard ,Content,Actions} from ".";


const Modal = (props:any) => {
    let doc=document.getElementById("modal")!
    // if(!doc) return <div></div>
    // if(doc){
        return ReactDom.createPortal(
            <Dimmer onClick={props.onDismiss} className="ui dimmer modals  visible active">
              <Standard onClick={(e)=>e.stopPropagation()} className="ui standard modal visible active">
                <Header className="header">{props.title}</Header>
                <Content className="content">{props.content}</Content>
                <Actions className="actions">{props.actions}</Actions>
              </Standard>
            </Dimmer>,
           doc 
          );
   // }

};

export default Modal;