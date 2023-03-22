 import SearchIcon  from "@mui/icons-material/Search";
import { Link } from "@mui/material";
import React from "react";
import { Nav } from "react-bootstrap";
import './Header.css'


 function Header( ){
    return( 
        <nav className="header">
          <img className="header--logo"  alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
          <div className="header--search">
            <input type="text" className="header--searchInput"  />
             <SearchIcon className="header--searchIcon" />
          </div>
          <Link to="/" className="header--link">
              <div className="header--option"> 
                  <span className="header--optionLineOne">Hello, User</span>
                  <span className="header--optionLineTwo">Sign in or  Sign out</span>
              </div>
          </Link>
        </nav>
    )
 }
 export default Header