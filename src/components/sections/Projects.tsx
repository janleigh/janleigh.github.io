import ProjectCard from "../ProjectCard";

export const Projects = () => {
    return (
        <div id="projects" className="projects-container">
            <section className="projects-list">
                <h1>Projects</h1>
                <div className="columns">
                    <div className="column is-6">
                        <ProjectCard repository="trace.moe.ts" />
                    </div>
                    <div className="column is-half">
                        <ProjectCard repository="therealkizu.github.io" />
                    </div>
                </div>
                <h1>Commissions</h1>
                <div className="columns">
                    <div className="column is-full">
                        <p
                            style={{ 
                                textAlign: "center",

                                color: "#fbf1c7",
                                fontSize: "1.2rem",
                            }}
                        >
                            Hm. Well, this is awkward. There seems nothing in <a target="_blank" href="/secret">here</a>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects;