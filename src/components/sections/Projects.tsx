import ProjectCard from "../ProjectCard";

export const Projects = () => {
    return (
        <section id="projects" className="projects section is-medium">
            <div className="projects-container">
                <h1>Projects</h1>
                <div className="columns">
                    <div className="column is-6">
                        <ProjectCard username="janleigh" repository="dotfiles" />
                        <ProjectCard username="janleigh" repository="trace.moe.ts" />
                    </div>
                    <div className="column is-half">
                        <ProjectCard username="janleigh" repository="janleigh.github.io" />
                        <ProjectCard username="janleigh" repository="mpd-discord-rpc" />
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
                            You can commission me <a href="http://ko-fi.com/janleigh/commissions">here</a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;