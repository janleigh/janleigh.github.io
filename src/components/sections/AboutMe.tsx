export const AboutMe = ({
    title,
    description,
}: {
    title: string;
    description: string;
})  => {
    return (
        <div id="about" className="about-me container">
            <section className="introduction">
                <div className="columns">
                    <div className="column is-6">
                        <figure className="animate__animated animate__slideInLeft">
                            <img
                                className="image-title"
                                src="https://avatars.githubusercontent.com/u/40911019?v=4"
                                alt="My Avatar"
                            />
                        </figure>
                    </div>
                    <div className="column is-half">
                        <div className="content animate__animated animate__slideInRight">
                            <h1 className="title">{ title }</h1>
                            <p className="description">{ description }</p>
                            <br/>
                            <a href="https://github.com/TheRealKizu" target="_blank" className="button">GitHub</a>
                            <a href="https://twitter.com/KizuWasTaken" target="_blank" className="button">Twitter</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

AboutMe.defaultProps = {
    title: "Lorem ipsum",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
}

export default AboutMe;