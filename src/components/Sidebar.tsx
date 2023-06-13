import { useEffect, useState } from "react";

function getGithubDescription() {
	const [description, setDescription] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://api.github.com/users/janleigh")
			.then((res) => res.json())
			.then((data) => {
				setDescription(data.bio);
				setLoading(false);
			});
	}, []);

	return { description, loading };
}

export function Sidebar() {
	const { description } = getGithubDescription();

	return (
		<div className="sidebar column is-one-quarter is-mobile">
			<div className="top-part py-5">
				<div className="pfp-icon is-flex is-justify-content-center">
					<figure className="image is-128x128">
						<img className="avatar is-rounded" src="https://github.com/janleigh.png" />
					</figure>
				</div>
				<div className="pfp-info mt-5">
					<div>
						<h1 className="subtitle is-size-4 is-italic">@jnlghmz</h1>
					</div>
					<div>
						<p className="subtitle is-size-6" style={{ fontStyle: "italic", textAlign: "center" }}>
							{description}
						</p>
					</div>
				</div>
			</div>
			<div className="bottom-part pt-5 pb-3">
				<div className="social-media px-4">
					<div className="btn is-flex is-flex-direction-row is-justify-content-center">
						<a className="" href="https://github.com/janleigh" target="_blank">
							<span className="fa-brands fa-github" />
						</a>
						<a className="" href="https://github.com/janleigh" target="_blank">
							<p className="ml-2 mr-5 my-3">GitHub</p>{" "}
						</a>
					</div>
					<div className="btn is-flex is-flex-direction-row is-justify-content-center">
						<a href="https://discord.com/users/380307921952833537" target="_blank">
							<span className="fa-brands fa-discord" />
						</a>
						<a className="" href="https://discord.com/users/380307921952833537" target="_blank">
							<p className="ml-2 mr-5 my-3">Discord</p>
						</a>
					</div>
					<div className="btn is-flex is-flex-direction-row is-justify-content-center">
						<a href="mailto:janleigh@pm.me" target="_blank">
							<span className="fa-regular fa-envelope" />
						</a>
						<a href="mailto:janleigh@pm.me" target="_blank">
							<p className="ml-2 mr-5 my-3">Email</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
