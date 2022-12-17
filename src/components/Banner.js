import React from 'react';
import { FaFacebook, FaTwitterSquare, FaPinterest, FaInstagram,FaGooglePlay } from "react-icons/fa";

const Banner = () => {
const [state] =React.useState({
  title: "I am Al Amin",
  text: 
  "I'm Al Amin, Professional web designer with long time experience in this fiel",
  image: "/images/Alamin-01.png"
});
  return <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="header_contant">
            <div className="header_section">
              <ul className="header_ul">
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaTwitterSquare />
                </li>
                <li>
                  <FaPinterest />
                </li>
                <li>
                  <FaInstagram />
                </li>
              </ul>
              <h1>{state.title}</h1>
              <p>{state.text}</p>
              <div className="header_buttons">
                <a href="" className='btn btn-outline'>
                  My Portfolio
                </a>
                &nbsp; &nbsp; &nbsp;
                <a href="" className='btn btn-smart'>
                 <FaGooglePlay className='play' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="banner_img">
            <img src={state.image} alt="man" />
          </div>
        </div>
      </div>
    </div>
  </header>

};

export default Banner;
