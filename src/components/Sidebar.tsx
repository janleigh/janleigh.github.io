export function Sidebar() {
	return (
		<div className="sidebar column is-one-quarter">
			<div className="top-part py-6 ">
				<div className="pfp-icon is-flex is-justify-content-center">
					<figure className="image is-128x128">
						<img className="avatar is-rounded" src="https://github.com/janleigh.png" />
					</figure>
				</div>
				<div className="pfp-info mt-5 is-flex is-justify-content-center">
					<h1 className="subtitle is-size-4 is-italic">@jnlghmz</h1>
				</div>
			</div>
			<div className="bottom-part pt-3 pb-3">
				<div className="social-media px-4">
					<div className="btn is-flex is-flex-direction-row is-justify-content-center">
						<a className="" href="https://github.com/janleigh" target="_blank">
							<span className="fa-brands fa-github" />
						</a>
						<p className="ml-2 mr-5 my-3">GitHub</p>
					</div>
					<div className="btn is-flex is-flex-direction-row is-justify-content-center">
						<a href="https://discord.com/users/380307921952833537" target="_blank">
							<span className="fa-brands fa-discord" />
						</a>
						<p className="ml-2 mr-5 my-3">Discord</p>
					</div>
					<div className="btn is-flex is-flex-direction-row is-justify-content-center">
						<a href="mailto:janleigh@pm.me" target="_blank">
							<span className="fa-regular fa-envelope" />
						</a>
						<p className="ml-2 mr-5 my-3">Email</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
