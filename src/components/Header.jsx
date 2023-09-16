import { useState } from "react";
import { logo } from "../assets"
import { navLinks } from "../constants"
import { motion } from "framer-motion";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    // framer motion props 
    const headerInitial = {y: -100, height: 0, overflow: 'hidden'}
    const headerAnimate = {y: 0, height: 75, overflow: 'visible'}
    const headerTransition = {duration : .5 ,overflow : {delay: .75}}

    const sidebar = {
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 90% 40px)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: ( ) => ({
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
        <motion.div 
            className="header section"
            initial={headerInitial}
            animate={headerAnimate}
            transition={headerTransition}
        >
             <div className="header__logo">
                <img src={logo} alt="" />
             </div>
             <i 
                className="uil uil-bars header__icon"
                onClick={() => setIsOpen(isOpen => !isOpen)}
            />
             <motion.nav 
                className="header__menu"
                animate={isOpen ? 'open' : 'closed'}
                variants={sidebar}
            >
                <ul className="header__menu-nav">
                    {navLinks.map((link) => (
                        <li className="nav-item" key={link.label}>
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
        </motion.div>
    )
}

export default Header