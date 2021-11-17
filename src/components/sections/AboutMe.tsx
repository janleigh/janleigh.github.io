import ScrollAnimation from "react-animate-on-scroll";

export const AboutMe = () => {
    return (
        <div id="about" className="about-container container">
            <section className="about">
                <ScrollAnimation animateIn="animate__slideInLeft">
                    <div className="columns">
                        <div className="column is-12">
                            <div className="content">
                                <h1 className="title">About Me</h1>
                                <p className="about-description">
                                    I am a 16 year old Filipino self taught full stack developer.<br/>
                                    My real name is <span className="aqua" style={{ fontWeight: "bold" }}>Jan Leigh</span> but I go by the name of <span className="aqua" style={{ fontWeight: "bold" }}>Kizu</span> on the internet.<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-12">
                            <div className="content">
                                <h1 className="title">My Skills</h1>
                                <p className="about-description">
                                    I have been programming for about 4 years now.<br/>
                                    I am currently proficient at Node.js, React, and TypeScript.<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </section>
        </div>
    )
}

export default AboutMe;