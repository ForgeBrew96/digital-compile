import React, { useState } from 'react'
import { Link } from "react-router-dom"


const NavBar = ({ user, handleSignout }) => {
 const [isOpen, setIsOpen] = useState(false); 

 const openNav = () => { 
    setIsOpen(true); 
}; 

const closeNav = () => { 
    setIsOpen(false);
};
  return (
    <div>

    {user ? (
        <nav>
          <div id="mySidebar" className={`sidebar ${isOpen ? 'open': ''}`}>
            <button className="closebtn" onClick={closeNav}>X</button>

            <ul>

                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/protocldb">Protocol DataBase</Link>
                </li>

                <li>
                    <Link to="/customcard">Create Your Own Card!</Link>
                </li>

                <li>
                    <Link to="/howtoplay">How To Play!</Link>
                </li>

                <li>
                    <Link to="/shop">Buy it now!</Link>
                </li>

                <li>
                    <Link to="" onClick={handleSignout}>Sign Out</Link>
                </li>
            </ul>
          </div>
          <button className="openbtn" onClick={openNav}>☰</button>
        </nav>

    ) : (
       <p></p>
    )
}
    </div>
  );
};

export default NavBar;