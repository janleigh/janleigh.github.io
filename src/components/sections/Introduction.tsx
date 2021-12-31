import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-scroll";

export const Introduction = () => {
    return (
        <section id="introduction" className="introduction section is-medium">
            <div className="introduction-container container">
                <div className="columns">
                    <div className="column is-12">
                        <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
                            <div className="content" style={{ textAlign: "center" }}>
                                <h1 className="title">Hello, I'm <span className="blue-text">Jan Leigh</span>.</h1>
                                <p className="description">
                                    A Filipino full-stack web developer.
                                </p>
                                <Link to="about" smooth={true} className="button floating">
                                    View More
                                    <span>→</span>
                                </Link>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction;