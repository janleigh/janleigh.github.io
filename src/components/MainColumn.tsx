import { useState } from "react";
import { Link } from "react-router-dom";

function MainColumn() {
	const [x, setX] = useState(true);

	return (
		<div>
			<div className="column is-three-thirds ml-6 mr-6">
				<div className="mb-6">
					<div className="tabs is-centered">
						<ul>
							<li className={x ? "tab is-active" : "tab"} onClick={() => setX(!x)}>
								<a>About</a>
							</li>
							<li className={x ? "tab" : "tab is-active"} onClick={() => setX(!x)}>
								<a>Projects</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="main-column content">
					<div
						className={
							x ? "animate__animated animate__fadeIn" : "animate__animatedanimate__fadeIn is-hidden"
						}
					>
						<h1 className="is-accent">Hello, dear reader!</h1>
						<p>
							I am a Filipino senior high school student and a self-taught full-stack developer.
							<br />
							My real name is <span className="is-accent">Jan Leigh</span>, but I prefer the name{" "}
							<span className="is-accent">Kizu</span> on the internet.
							<br />
							<br />I have been programming for about <span className="is-accent">6 years now</span>, and
							I have a passion for creating web applications, and sometimes{" "}
							<span style={{ textDecoration: "line-through" }}>shitty</span> software.
							<br />
							<br />I am proficient in a variety of programming languages, including{" "}
							<span className="is-accent">Rust</span>, <span className="is-accent">TypeScript</span>, and{" "}
							<span className="is-accent">PHP</span>. I am also familiar with a variety of web development
							frameworks and tools such as <span className="is-accent">React</span>,{" "}
							<span className="is-accent">Next.js</span>, and <span className="is-accent">Vite</span>.
						</p>
					</div>
					<div
						className={
							x ? "animate__animated animate__fadeIn is-hidden" : "animate__animated animate__fadeIn"
						}
					>
						<h1 className="is-accent" style={{ wordBreak: "break-word" }}>
							This section is under
							<br />
							construction.
						</h1>
					</div>
				</div>
			</div>
			<footer>
				<div className="content mt-6 has-text-centered">
					<p>
						Powered using <a href="https://bulma.io">Bulma</a> and <a href="https://reactjs.org">React</a>.
						<br />
						Copyright © 2023{" "}
						<Link to="/404">
							<span className="is-accent">Jan Leigh Muñoz</span>
						</Link>
						. All Rights Reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}

export default MainColumn;
