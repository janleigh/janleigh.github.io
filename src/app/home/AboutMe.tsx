function AboutMe() {
	return (
		<div>
			<div className="column tui-window" id="about">
				<fieldset className="tui-fieldset tui-border-solid">
					<legend className="center">About Me</legend>
					<div className="is-flex">
						<div className="columns is mobile" style={{ margin: "0.5rem" }}>
							<div className="column is-one-quarter">
								<img src="/term.png" alt="Profile" />
							</div>
							<div className="column is-flex is-align-items-center">
								<p>
									<h1 className="is-accent">Hello, dear reader!</h1>
									I am a Filipino senior high school student and a self-taught full-stack developer.
									<br />
									My real name is <span className="is-accent">Jan Leigh</span>, but I prefer the name{" "}
									<span className="is-accent">Kizu</span> on the internet.
									<br />
									<br />I have been programming for about{" "}
									<span className="is-accent">6 years now</span>, and I have a passion for creating
									web applications, and sometimes{" "}
									<span style={{ textDecoration: "line-through" }}>shitty</span> software.
									<br />
									<br />I am proficient in a variety of programming languages, including{" "}
									<span className="is-accent">TypeScript</span>, <span className="is-accent">Go</span>
									, and <span className="is-accent">C</span>. I am also familiar with a variety of web
									development frameworks and tools such as <span className="is-accent">React</span>,{" "}
									<span className="is-accent">Next.js</span>, and{" "}
									<span className="is-accent">Vite</span>.
								</p>
							</div>
						</div>
					</div>
				</fieldset>
			</div>
		</div>
	);
}

export default AboutMe;
