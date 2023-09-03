function NotFound() {
	return (
		<>
			<section className="section is-small animate__animated animate__fadeIn" id="not-found">
				<div className="columns">
					<div className="column is-three-fifths is-centered tui-window">
						<fieldset className="tui-fieldset tui-border-solid">
							<legend className="center">Error</legend>
							<div className="is-flex is-align-content-center">
								<p>
									It seems that you have stumbled upon a page that does not exist. Do you want to go
									back to the <span className="is-accent main-font">home page</span>?
								</p>
							</div>
							<div className="is-flex is-justify-content-center" style={{ padding: "3rem" }}>
								<a href="/" className="tui-button active-button">
									Yes
								</a>
								<button className="tui-button disabled-button disabled" disabled>
									No
								</button>
							</div>
						</fieldset>
					</div>
				</div>
			</section>
		</>
	);
}

export default NotFound;
