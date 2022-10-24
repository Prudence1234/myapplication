import React from "react";
function Nav(){
    return(
      <div>
         <nav className='nav'>
           <img src='./img/react-logo.png' width='60px'/>
         <ul className='nav-items'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
        </nav>
      </div>
    )
  }
  export default Nav;
