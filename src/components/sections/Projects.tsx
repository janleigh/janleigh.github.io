import ProjectCard from "../ProjectCard";

export const Projects = () => {
    return (
        <div id="projects" className="projects-container">
            <section className="projects-list">
                <h1>Projects</h1>
                <div className="columns">
                    <div className="column is-6">
                        <ProjectCard repository="trace.moe.ts" />
                        <ProjectCard repository="latte" />
                    </div>
                    <div className="column is-half">
                        <ProjectCard repository="therealkizu.github.io" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects;