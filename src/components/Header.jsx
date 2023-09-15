import { logo } from "../assets"
import { navLinks } from "../constants"

const Header = () => {
    return (
        <div className="header">
             <div className="header__logo">
                <img src={logo} alt="" />
             </div>
             <nav className="header__menu">
                <ul className="header__menu-nav">
                    {navLinks.map((link) => (
                        <li className="nav-item">
                            <a className="nav-link" href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
             </nav>
        </div>
    )
}

export default Header