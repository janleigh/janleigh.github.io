import ProjectCard from "../ProjectCard";

export const Projects = () => {
    return (
        <section id="projects" className="projects section is-medium" style={{ padding: "8em 4.5em" }}>
            <div className="projects-container">
                <h1>Projects</h1>
                <div className="columns">
                    <div className="column is-6">
                        <ProjectCard username="TheRealKizu" repository="trace.moe.ts" />
                        <ProjectCard username="TheRealKizu" repository="emi" />
                    </div>
                    <div className="column is-half">
                        <ProjectCard username="TheRealKizu" repository="therealkizu.github.io" />
                        <ProjectCard username="TheRealKizu" repository="dotfiles" />
                    </div>
                </div>
                <h1>Commissions</h1>
                <div className="colums">
                    <div className="column is-full">
                        <p
                            style={{ 
                                textAlign: "center",
                                fontSize: "1.2rem",
                            }}
                        >
                            Hm. Well, this is awkward. There seems nothing in here.<br/>
                            You can commission me <a href="http://ko-fi.com/therealkizu/commissions">here</a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;