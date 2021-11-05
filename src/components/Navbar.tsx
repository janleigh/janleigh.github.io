import { useState } from "react";

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
                    <a href="#about" className="navbar-item">
                        Home
                    </a>
                    <a href="#projects" className="navbar-item">
                        Projects
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;