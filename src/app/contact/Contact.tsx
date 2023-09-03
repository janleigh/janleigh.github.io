function Contact() {
	return (
		<>
			<section className="section is-small animate__animated animate__fadeIn" id="contact">
				<div className="columns">
					<div className="column is-three-fifths is-centered tui-window">
						<fieldset className="tui-fieldset tui-border-solid">
							<legend className="center">Contact</legend>
							<div className="is-flex is-align-content-center" style={{ margin: "1rem 3rem" }}>
								<p>
									<span className="is-accent main-font">E</span>mail:{" "}
									<a href="mailto:janleigh@pm.me">mailto:janleigh@pm.me</a>
									<br />
									<span className="is-accent main-font">I</span>nstagram:{" "}
									<a href="https://www.instagram.com/jnlghmz/">https://www.instagram.com/jnlghmz</a>
									<br />
									<span className="is-accent main-font">K</span>o-fi:{" "}
									<a href="https://ko-fi.com/janleigh/">https://ko-fi.com/janleigh</a>
									<br />
									<span className="is-accent main-font">G</span>itHub:{" "}
									<a href="https://github.com/janleigh">https://github.com/janleigh</a>
								</p>
							</div>
							<div className="is-flex is-justify-content-center" style={{ padding: "2rem 3rem 2.5rem" }}>
								<a href="/" className="tui-button active-button">
									Return to Home Page
								</a>
							</div>
						</fieldset>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact;
