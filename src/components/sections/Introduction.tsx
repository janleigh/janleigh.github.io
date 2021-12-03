import ScrollAnimation from "react-animate-on-scroll";

export const Introduction = () => {
    return (
        <section id="introduction" className="introduction section is-medium">
            <div className="introduction-container container">
                <div className="columns">
                    <div className="column is-5">
                        <ScrollAnimation animateIn="animate__slideInLeft" animateOnce={true}>
                            <figure className="avatar">
                                <img
                                    className="image-title"
                                    src="https://avatars.githubusercontent.com/u/40911019?v=4"
                                    alt="My Avatar"
                                />
                            </figure>
                        </ScrollAnimation>
                    </div>
                    <div className="column is-8">
                        <ScrollAnimation animateIn="animate__slideInRight" animateOnce={true}>
                            <div className="content" style={{ textAlign: "center" }}>
                                <h1 className="title">Hey! I'm <span style={{ color: "#758cb0" }}>Kizu!</span></h1>
                                <p className="description">
                                    An Filipino full-stack developer and a Linux enthusiast.
                                </p>
                                <br/>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction;