import { Link } from "react-router-dom";
import ProjectCard from "../ProjectCard";

export const Projects = () => {
    return (
        <section id="projects" className="projects section is-medium">
            <div className="projects-container">
                <h1>Projects</h1>
                <div className="columns">
                    <div className="column is-6">
                        <ProjectCard username="TheRealKizu" repository="trace.moe.ts" />
                        <ProjectCard username="elyxrdev" repository="haumea" />
                    </div>
                    <div className="column is-half">
                        <ProjectCard username="TheRealKizu" repository="therealkizu.github.io" />
                    </div>
                </div>
                <h1>Commissions</h1>
                <div className="columns">
                    <div className="column is-full">
                        <p
                            style={{ 
                                textAlign: "center",

                                fontSize: "1.2rem",
                            }}
                        >
                            Hm. Well, this is awkward. There seems nothing in <Link to="/how-did-you-find-this" target="_blank">here</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;