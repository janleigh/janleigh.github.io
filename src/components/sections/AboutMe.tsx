
export const AboutMe = () => {
    return (
        <section id="about" className="about section is-medium">
            <div className="about-container container">
                <h1 className="title">About</h1>
                <div className="columns">
                    <div className="column is-10">
                        <div className="content" style={{ marginLeft: "2.5em" }}>
                            Hello! I am a Filipino senior high school student an a self-taught full-stack developer.<br/>
                            My real name is <span className="blue-text">Jan Leigh</span> but I prefer the name <span className="blue-text">Kizu</span> on the internet.
                            <br/><br/>
                            I have been programming for about <span className="blue-text">4 years</span> now.<br/>
                            I am currently proficient at Node.js, React, and TypeScript<br/>
                            but I'm tinkering with other languages such as Rust and Lua.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;