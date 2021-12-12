import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <section id="not-found" className="not-found section is-medium">
            <div className="not-found-container container">
                <h1 className="not-found-title">404</h1>
                <p className="not-found-description">
                    The page you are looking for does not exist.<br/>
                    You can always go back to the homepage by clicking <Link to="introduction" target="_blank" className="link">me!</Link>
                </p>
            </div>
        </section>    
    )
}

export default NotFound;