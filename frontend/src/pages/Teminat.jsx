import React from "react";
import CommandBox from "../components/CommandBox";
import BottomBox from "../components/BottomBox";

const Teminat = ({...props}) => {
    return (

      //props.username olarak var


        <div className="App">

        <CommandBox username = {props.username}/>
        <br/>
        
        <br/>
        <br/>
        <BottomBox/>
        <br/>
        <br/>
        <br/>
  
      </div>
    );
};
  
  export default Teminat;