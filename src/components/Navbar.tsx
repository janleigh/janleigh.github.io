import { useState } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <nav className="navbar" role="navigation">
            <div className="navbar-brand">
            <a
                onClick={() => {
                    setIsActive(!isActive);
                }}
                role="button"
                className={`navbar-burger burger ${isActive ? "is-active" : "" }`}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbar-menu"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            </div>
            <div
                id="navbar-menu"
                className={`navbar-menu ${isActive ? "is-active" : "" }`}
            >
                <div className="navbar-end">
                    <Link to="introduction" smooth={true} className="navbar-item">Home</Link>
                    <Link to="projects" smooth={true} className="navbar-item">Projects</Link>
                    <Link to="about" smooth={true} className="navbar-item">About</Link>
                    <a href="mailto:therealkizu.protonmail.com" className="navbar-item is-icon">
                        <span className="is-hidden-touch gg-mail"/>
                        <span className="is-hidden-desktop">Email Me</span>
                    </a>
                    <a href="https://discord.gg/2RfJb3CVfb" className="navbar-item is-icon">
                        <span className="is-hidden-touch gg-comment"/>
                        <span className="is-hidden-desktop">Discord Server</span>
                    </a>
                    <a href="https://ko-fi.com/therealkizu" className="navbar-item is-icon">
                        <span className="is-hidden-touch gg-coffee"/>
                        <span className="is-hidden-desktop">Donate</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;