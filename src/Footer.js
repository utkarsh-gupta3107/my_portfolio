import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Footer.css";
import logo from "./myport.png";

const Footer = () => {
  const scrollTop=()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <hope>
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossorigin="anonymous"
        />
      </head>
      <footer id="footer" className="footer-section">
        <div class="container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Hometown</h4>
                    <span>Charampa, Bhadrak, Odisha</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Call me</h4>
                    <span>91+ 7894015456</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail me</h4>
                    <span>utkarshgupta6203@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <a href="/">
                      <img
                        src={logo}
                        class="img-fluid"
                        alt="logo"
                        style={{ width: "200px", "border-radius": "10px" }}
                      />
                    </a>
                  </div>
                  <div class="footer-text">
                    <p>
                      My Portfolio website is here to showcase all 5 best academic projects,
                       7 best web development projects, skills, cover letter, involvement and personal details
                       of Mr. Utkarsh Gupta
                    </p>
                  </div>
                  
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                                <li><a href="/">Home</a></li>
           <li> <a href='https://drive.google.com/file/d/1SsuhGydBu-eA72Opg_B_zfRnkCwt1H3l/view?usp=drive_link' target='blank'>Cover Letter</a></li>
           <li> <a href='https://drive.google.com/file/d/1qed0tmbfv5Ei5kz92JkxhRLCCM0DnAOc/view?usp=drive_link' target='blank'>Resume</a></li>
           <li>  <Link to="/Academics" onClick={scrollTop}>Academics</Link></li>
           <li> <Link to="/WebDev" onClick={scrollTop}>Web Dev</Link></li>
           <li>  <Link to="/guesstimates" onClick={scrollTop}>Guesstimates</Link></li>
      {/* <Outlet /> */}
                               
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="copyright-area">
                  <div class="container">
                    <div class="row">
                      <div class="col-xl-10 col-lg-10 text-center text-lg-left">
                        <div class="copyright-text">
                          <p>
                            Copyright &copy; 2023, All Right Reserved{" "}
                            <a href="/">Utkarsh Gupta</a>
                          </p>
                          <br></br>
                          <div class="footer-social-icon">
                    <span>Follow me</span>
                    <a
                      href="https://www.facebook.com/profile.php?id=100056537050626"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        width="40"
                        height="40"
                        src="https://img.icons8.com/color/48/facebook-new.png"
                        alt="facebook-new"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/utkarsh-gupta-756b64219/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        width="40"
                        height="40"
                        src="https://img.icons8.com/fluency/48/linkedin.png"
                        alt="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/utkarshgupta3107/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        width="40"
                        height="40"
                        src="https://img.icons8.com/fluency/48/instagram-new.png"
                        alt="instagram-new"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UC8hwbkg2rq9LuBHXI5ykUQQ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        width="40"
                        height="40"
                        src="https://img.icons8.com/color/48/youtube-play.png"
                        alt="youtube-play"
                      />
                    </a>
                  </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </hope>
  );
};

export default Footer;
