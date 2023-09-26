import { icon, logo } from "../assets"
import { footerLinks } from "../constants"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-company-info">
                <div className="footer-img">
                    <img src={icon} alt="" />
                    <span>
                        Nexcent
                    </span>
                </div>
                
                <div className='infos'>             
                    <span>
                        Copyright © 2020 Nexcent ltd.
                    </span>
                    <span>
                        All rights reserved
                    </span>
                </div>
                <div className="footer-icons">
                    {/* <FaInstagram/>
                    <FaDribbble/>
                    <FaXTwitter/>
                    <FaYoutube/> */}
                </div>
            </div>
            <div className="footer-links">
                    {footerLinks.map((col,index) => (
                        <ul className={`col col-${index+1}`} key={`col-${index}`}>
                            {col.map((link,index) => (
                                <li key={`link-${col}-${index}`}>
                                    {link.label}
                                </li>
                            ))}
                        </ul>
                    ))}
            </div>
            <div className="footer-form">
                <label htmlFor="">
                    Stay up to date
                </label>
                <input type="email" name="" id="" />
            </div>
        </div>
    )
}

export default  Footer 