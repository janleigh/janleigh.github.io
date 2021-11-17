import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    Powered using <a href="https://bulma.io">Bulma</a> and <a href="https://reactjs.org">React</a>.
                    <br/>
                    Copyright © 2021 TheRealKizu. <Link to="/nostalgia" target="_blank">All Rights Reserved.</Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer;