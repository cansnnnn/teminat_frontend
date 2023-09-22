import React from "react";
import OnayCommandBox from "../onayComponents/OnayCommandBox";

const Onay = ({...props}) => {
    return (
      <OnayCommandBox username= {props.username} />
    );
  };
  
  export default Onay;