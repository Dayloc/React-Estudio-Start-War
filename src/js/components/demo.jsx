import React, { useEffect } from "react";
import { Link } from "react-router";
import useFlux from "../flux/flux";
import "./../../styles/demo.css";

const Demo = () => {
  const { store, actions } = useFlux();
 
  useEffect(() => {
   
  }, []);

 

  return (
    <div className="container p-3 bg-dark text-warning ">
      <h1>Soy la demo</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
     
    </div>
  );
};

export default Demo;
