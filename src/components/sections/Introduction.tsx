import { Link } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";

export const Introduction = () => {
    return (
        <div id="introduction" className="introduction-container container">
            <section className="introduction section is-medium">
                <div className="columns">
                    <div className="column is-6">
                        <ScrollAnimation animateIn="animate__slideInLeft" animateOnce={true}>
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
                        <ScrollAnimation animateIn="animate__slideInRight" animateOnce={true}>
                            <div className="content">
                                <h1 className="title">Hello!</h1>
                                <p className="description">
                                    Hello! I'm Kizu! I'm a Filipino senior high-school student, a full stack developer and a Linux enthusiast.
                                </p>
                                <br/>
                                <a href="https://github.com/TheRealKizu" target="_blank" className="button">GitHub</a>
                                <Link to="projects" smooth={true} className="button">Projects</Link>
                                <a href="https://ko-fi.com/therealkizu" target="_blank" className="button">Donate</a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Introduction;