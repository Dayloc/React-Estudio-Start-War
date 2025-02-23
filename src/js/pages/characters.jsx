import React, { useContext, useEffect } from 'react'
import useFlux from "../flux/flux";
import { Link } from 'react-router';


function Characters() {
    const {store,actions}=useFlux()

    useEffect(() => {

      actions.getCharacters()

 }, []);

 const {dataCharacters}=store;

console.log(dataCharacters)

  return (
    <div className='bg-white container aling-content-center mt-3'>
        
        <div>
        <Link to="/">Home</Link>
      </div>
       <h1>Characters</h1> 
       <div className="card-container bg-white mb-5">
        {dataCharacters &&
          dataCharacters.results && // Verifica que `items` exista
          dataCharacters.results.map((item, index) => (
            <div key={index} className="card mb-5">
             
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.gender}</p>
              </div>
            </div>
          ))}
      </div>
    
        
        </div>
  )
}

export default Characters