import { useState } from "react";
import { logo } from "../assets"
import { navLinks } from "../constants"
import { motion } from "framer-motion";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const sidebar = {
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 90% 40px)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: (width ) => ({
          clipPath: `circle(0 at 90% 40px)`,
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        })
    };

    return (
        <div className="header section">
             <div className="header__logo">
                <img src={logo} alt="" />
             </div>
             <i 
                class="uil uil-bars header__icon"
                onClick={() => setIsOpen(isOpen => !isOpen)}
            />
             <motion.nav 
                className="header__menu"
                animate={isOpen ? 'open' : 'closed'}
                variants={sidebar}
            >
                <ul className="header__menu-nav">
                    {navLinks.map((link) => (
                        <li className="nav-item">
                            <a className="nav-link" href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="header__menu-btns">
                    <button className="login-btn">
                        Login
                    </button>
                    <button className="singup-btn">
                        Singup
                    </button>
                </div>
             </motion.nav>
        </div>
    )
}

export default Header