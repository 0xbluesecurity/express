import React, { useState } from "react";
import "./index.css";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-scroll"

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <Link to="story" spy={true} smooth={true}>Story</Link>
            </li>
            <li>
              <Link to="fire" spy={true} smooth={true}>The Multi-box</Link>
            </li>
            <li>
              <Link to="roadmap" spy={true} smooth={true}>Roadmap</Link>
            </li>
            <li>
              <Link to="faq" spy={true} smooth={true}>FAQ</Link>
            </li>
            <li>
              <Link to="team" spy={true} smooth={true}>Meet the Team</Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu style={{color:"black"}}/>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;