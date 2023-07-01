// import React from 'react'
import './Footer.css'
import Logo from '../assets/Img/logo2.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div>
            <img src={Logo} alt="Logo" />
            
            {/* <h1>Trippy</h1> */}
            <p>behind far the countries Vokalia</p>
        </div>

        <div>
            <a href="/">
                <i className='bi bi-facebook'></i>
            </a>

            <a href="/">
                <i className='bi bi-whatsapp'></i>
            </a>
        
            <a href="/">
                <i className='bi bi-linkedin'></i>
            </a>

            <a href="/">
                <i className='bi bi-twitter'></i>
            </a>
        </div>
      </div>

      <div className="bottom">
        <div>
            <h4>Project</h4>
            <a href="/">About Qesco</a>
            <a href="/">Our Portfolio</a>
            <a href="/">Investor Relation</a>
            <a href="/">Careers</a>
        </div>

        <div>
            <h4>Community</h4>
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">Twitter</a>
            <a href="/">Linkedin</a>
        </div>

        <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact Us</a>
            <a href="/">News Room</a>
        </div>

        <div>
            <h4>Others</h4>
            <a href="/">Terms of Service</a>
            <a href="/">Policy Privacy</a>
            <a href="/">License</a>
            <a href="/">Quesco Compatible</a>
        </div>
      </div>

    </div>
  )
}

export default Footer
