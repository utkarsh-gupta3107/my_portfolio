import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  const scrollTop=()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>    
      <nav id="main-nav">
      <div class="row">
        <div class="container">
  
          <div class="logo">
            <a href="/"><img src="images/myport.png" alt="logo"/></a>
          </div>
  
          <div class="responsive"><i data-icon="m" class="ion-navicon-round"></i></div>
  
          <ul class="nav-menu list-unstyled">
            <li>
           <a href="/" class="smoothScroll">Home</a>
          </li>
          <li>
            <Link to="/WebDev" onClick={scrollTop}>Web Dev</Link>
          </li>
          <li>
            <Link to="/Academics" onClick={scrollTop}>Academics</Link>
          </li>
          <li>
            <Link to="/Guesstimates" onClick={scrollTop}>Guesstimates</Link>
          </li>
        
          <li>
            <a href='https://drive.google.com/file/d/1SsuhGydBu-eA72Opg_B_zfRnkCwt1H3l/view?usp=drive_link' target='blank'>Cover</a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1qed0tmbfv5Ei5kz92JkxhRLCCM0DnAOc/view?usp=drive_link' target='blank'>Resume</a>
          </li>
          <li>
            <Link to="/linkedin" onClick={scrollTop}>LinkedIn</Link>
          </li>
          </ul>
  
        </div>
      </div>
    </nav>
      <Outlet />

    </div>
  )
}

export default Layout
