import { RepoIcon, StarFillIcon, QuestionIcon } from "@primer/octicons-react";
import { useEffect, useState } from "react";

const getRepository = (repository: string): any => {
    const [response, setResponse] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/repos/TheRealKizu/${repository}`, {
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
    repository
}: {
    repository: string;
}) => {
    const [data, _hasError, loading] = getRepository(repository);

    if (loading) 
        return (
            <div className="card" style={{ width: "420px !important", margin: "12px" }}>
                <div className="card-content">
                    <div className="c-content">
                        <p>Loading...</p>
                    </div>
                </div>
            </div>
        )

    const icon = getLanguageIcon(data.language);

    return (
        <div className="card" style={{ width: "420px !important", margin: "12px" }}>
            <div className="card-content">
                <div className="media-content">
                    <a href={data.html_url} target="_blank">
                        <RepoIcon size={16} /> {data.name}
                    </a>
                </div>
                <div className="c-content">
                    <p>{data.description}</p>
                    <br/>
                    <div style={{ display: "flex" }}>
                        <div style={{ marginRight: "12px" }}>
                            <span className="has-tooltip-arrow" data-tooltip="Language"><i className={icon}></i>  {data.language}</span>
                        </div>
                        <div style={{ marginRight: "12px" }}>
                            <span className="has-tooltip-arrow" data-tooltip="Stars"><StarFillIcon size={16} /> {data.stargazers_count}</span>
                        </div>
                        <div style={{ marginRight: "12px" }}>
                            <span className="has-tooltip-arrow" data-tooltip="Is Maintained?"><QuestionIcon size={16} /> {data.archived ? "Archived" : "Maintained"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;