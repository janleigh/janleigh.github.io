import { Link } from "react-scroll";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    Powered using <a href="https://bulma.io">Bulma</a> and <a href="https://reactjs.org">React</a>.
                    <br/>
                    Copyright © 2021 <Link to="projects" smooth={true}><span style={{ color: "#d63737" }}>TheRealKizu</span></Link>. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;