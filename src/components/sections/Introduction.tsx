import { Link } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";

export const Introduction = () => {
    return (
        <div id="introduction" className="introduction-container container">
            <section className="introduction section is-medium">
                <div className="columns">
                    <div className="column is-6">
                        <ScrollAnimation animateIn="animate__slideInLeft" animateOut="animate__slideOutUp">
                            <figure>
                                <img
                                    className="image-title"
                                    src="https://avatars.githubusercontent.com/u/40911019?v=4"
                                    alt="My Avatar"
                                />
                            </figure>
                        </ScrollAnimation>
                    </div>
                    <div className="column is-half">
                        <ScrollAnimation animateIn="animate__slideInRight" animateOut="animate__slideOutUp">
                            <div className="content animate__animated animate__slideInRight">
                                <h1 className="title">Hello!</h1>
                                <p className="description">
                                    Hello! I'm Kizu! I'm a Filipino senior high-school student, a full stack developer and a Linux enthusiast.
                                </p>
                                <br/>
                                <a href="https://github.com/TheRealKizu" target="_blank" className="button">GitHub</a>
                                <Link to="projects" smooth={true} className="button">Projects</Link>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Introduction;