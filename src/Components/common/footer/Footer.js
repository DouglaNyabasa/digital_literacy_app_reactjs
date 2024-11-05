import React from 'react'
import './footer.css'
import { assets } from '../../common/navbar/assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
     <div className="footer-content">
       <div className="footer-content-left">
       <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
           <p >Digital literacy empowers you to communicate and solve problems
              effectively in a digital world. Master these skills to unlock new
              opportunities and succeed in today’s tech-driven landscape! </p>
           {/* <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon}alt="" />
           </div> */}
       </div>
       <div className="footer-content-center">
          <h2>COMPANY</h2>
           <ul>
            <li>Home</li>
            <li>About us</li>
            <li>News & Updates</li>
            <li>Privacy Policy</li>
           </ul>
          </div>
       <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
             <li>+263-774-420-424</li>
             <li>contact@digitalEdu.com</li>
             <li>Harare,Zimbabwe</li>
             <li>Robert Mugabe Crn First Ave</li>
             
          </ul>
          </div>
     </div>
         <hr />
         <p className="footer-copyright">Copyright 2024 DigitalEdu.com - All rights Reserved</p>
    </div>
  )
}

export default Footer
