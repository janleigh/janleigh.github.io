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
                            <div className="content">
                                <h1 className="title">Hey! I'm <span style={{ color: "#5EE26B" }}>Kizu!</span></h1>
                                <p className="description">
                                    An Filipino senior full-stack developer and a Linux enthusiast.
                                </p>
                                <br/>
                                <a href="https://discord.com/users/380307921952833537" target="_blank" className="button">Discord</a>
                                <a href="https://github.com/TheRealKizu" target="_blank" className="button">GitHub</a>
                                <a href="https://ko-fi.com/therealkizu" target="_blank" className="button">Donate</a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction;