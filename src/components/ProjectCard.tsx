import { RepoIcon, StarFillIcon, QuestionIcon } from "@primer/octicons-react";
import { useEffect, useState } from "react";

const getRepository = (username: string, repository: string): any => {
    const [response, setResponse] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/repos/${username}/${repository}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(async (response) => {
                setResponse(await response.json());
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [repository]);

    return [ response, error, loading ];
};

const getLanguageIcon = (language: string): string => {
    if (!(language))
        language = "github";

    switch (language.toLowerCase()) {
        case "shell":
            language = "bash";
            break;
        case "scss":
            language = "css3";
            break
    }

    return `devicon-${language.toLowerCase()}-plain`;
}

export const ProjectCard = ({
    username,
    repository
}: {
    username: string,
    repository: string;
}) => {
    const [data, _hasError, loading] = getRepository(username, repository);

    if (!(data.name)) data.name = "I'm a placeholder!"
    if (!(data.description)) data.description = "You are seeing this cause you are rate limited."
    if (!(data.html_url)) data.html_url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    if (!(data.language)) data.language = "GitHub";
    if (!(data.stargazers_count)) data.stargazers_count = 69;

    if (loading) 
        return (
            <div className="card">
                <div className="card-content">
                    <div className="repo-description">
                        <p>Loading...</p>
                    </div>
                </div>
            </div>
        )

    const icon = getLanguageIcon(data.language);

    return (
        <div className="card">
            <div className="card-content">
                <div className="repo-title">
                    <a href={data.html_url} target="_blank">
                        <RepoIcon size={16} /> {data.name}
                    </a>
                </div>
                <div className="repo-description">
                    <p>{data.description}</p>
                    <br/>
                    <div style={{ display: "flex" }}>
                        <div style={{ marginRight: "3rem" }}>
                            <i className={icon}></i>  {data.language}
                        </div>
                        <div>
                            <StarFillIcon size={16} /> {data.stargazers_count} Stars
                        </div>
                        {/* <div style={{ marginRight: "12px" }}>
                           <QuestionIcon size={16} /> {data.archived ? "Archived" : "Maintained"}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;