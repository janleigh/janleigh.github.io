
export const AboutMe = () => {
    return (
        <section id="about" className="about section is-medium">
            <div className="about-container container">
                <h1 className="title">About</h1>
                <div className="columns">
                    <div className="column is-2">
                        <a href="https://github.com/KizuWasTaken" target="_blank" className="button btn-alt">GitHub</a>
                        <a href="https://twitter.com/KizuWasTaken" target="_blank" className="button btn-alt">Twitter</a>
                        <a href="https://discord.com/users/380307921952833537" target="_blank" className="button btn-alt">Discord</a>
                        <a href="mailto:therealkizu.protonmail.com" className="button btn-alt">
                            Email Me
                        </a>
                    </div>
                    <div className="column is-8">
                        <div className="content">
                            <p>
                                Hello! I am a Filipino senior high school student an a self-taught full-stack developer.<br/>
                                My real name is <span className="blue-text">Jan Leigh</span> but I prefer the name <span className="blue-text">Kizu</span> on the internet.
                                <br/><br/>
                                I have been programming for about <span className="blue-text">4 years</span> now.<br/>
                                Here is my current stack:
                                <div className="columns" style={{ marginTop: "1%" }}>
                                    <div className="column is-3">
                                        <h6>Languages</h6>
                                        <ul>
                                            <li>TypeScript</li>
                                            <li>JavaScript</li>
                                            <li>Lua</li>
                                        </ul>
                                    </div>
                                    <div className="column is-3">
                                        <h6>Frameworks</h6>
                                        <ul>
                                            <li>React.js</li>
                                            <li>Node.js</li>
                                            <li>Bulma</li>
                                            <li>Sass</li>
                                        </ul>
                                    </div>
                                    <div className="column is-3">
                                        <h6>Databases</h6>
                                        <ul>
                                            <li>MongoDB</li>
                                            <li>MySQL</li>
                                        </ul>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;