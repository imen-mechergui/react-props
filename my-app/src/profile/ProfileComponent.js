import React from 'react'
import PropTypes from "prop-types";
 function Child(props ){
     console.log (props);
    
         const {
             FullName,
             Bio,
             Profession,
             HandelName,
             children,
         }=props
         return (
<div>

{children}
<h1> {FullName} </h1>
<h2> {Profession}</h2>
          <ul>
         {Bio.map((el,i)=> (
         <li key={i}>{el}</li>
     ))}
      </ul>
      <button onClick={() => HandelName(FullName)}>Click Here</button>
        </div>       
     )
 }
 Child.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.array,
    Profession: PropTypes.string,
    handleAlert: PropTypes.func.isRequired
  };
 export default Child 

 
