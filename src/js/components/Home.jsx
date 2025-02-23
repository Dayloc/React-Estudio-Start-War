import React from "react";
import { Link } from "react-router";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="text-center text-warning-emphasis">
      <h1 className="text-center mt-5">Hello Rigo!</h1>
      <p>
        <img src={rigoImage} />
      </p>
      <a href="#" className="btn btn-success">
        If you see this green button... bootstrap is working...
      </a>
      <p>
        Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
        love!
      </p>
      <div>
        <Link to="/demo">Demo</Link>
      </div>
      <div>
        <Link to="/characters">Characters</Link>
      </div>
    </div>
  );
};

export default Home;
