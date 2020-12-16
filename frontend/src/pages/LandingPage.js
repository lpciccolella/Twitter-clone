import React from 'react'
import twitter  from "../twitter.png";
import { Link } from "react-router-dom";

const LandingPage = () =>  {
    return (
<div className="landing-wrapper">
      <div className="text-wrapper">
        <div className="text-header-wrapper">
          <p className="text-header font__p p__size">BIENVENIDO</p>
          <span>Twitter Clone </span>
        </div>

        <div className="text-section font__p p__size">
          <div className="text-button-wrapper">
            <Link to="/register">Registrate</Link> y publica un tweet
          </div>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={twitter} className="landing-image" alt="" />
      </div>
    </div>
    )
}

export default LandingPage;