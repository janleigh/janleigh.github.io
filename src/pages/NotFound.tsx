import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="not-found-container container">
            <section className="not-found">
                <h1 className="not-found-title">404.</h1>
                <p className="not-found-description">
                    You can always go back to the <Link to="/" className="link">homepage</Link> or <Link to="/how-did-you-find-this" target="_blank" className="link">here.</Link>
                </p>
            </section>
        </div>
    )
}

export default NotFound;
