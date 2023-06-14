import React, {useContext}from "react";
import campgroundContext from "../context/campgroundcontext";

const Campgrounds=()=>{
   const context = useContext(campgroundContext);
   const {camp,setcamp} = context;

  return (
     <div>
     <h3>All campgrounds</h3>
    
     </div>
  )
}

export default Campgrounds;