import { useState } from "react";

function MainColumn() {
	const [x, setX] = useState(true);

	return (
		<div>
			<div className="column is-three-thirds ml-6 mr-6">
				<div className="mb-6 mr-6">
					<div className="tabs is-centered">
						<ul>
							<li className={x ? "tab is-active" : "tab"} onClick={() => setX(!x)}>
								<a>Introduction</a>
							</li>
							<li className={x ? "tab" : "tab is-active"} onClick={() => setX(!x)}>
								<a>Projects</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="main-column content">
					<div className={x ? "" : "is-hidden"}>
						<h1 className="blue-text">Hello, dear reader!</h1>
						<p>
							I am a Filipino senior high school student and a self-taught full-stack developer.
							<br />
							My real name is Jan Leigh, but I prefer the name Kizu on the internet.
							<br />
							<br />I have been programming for about <span className="blue-text">4 years now</span>, and
							I have a passion for creating web applications, and sometimes{" "}
							<span style={{ textDecoration: "line-through" }}>shitty</span> software.
							<br />
							<br />I am proficient in a variety of programming languages, including{" "}
							<span className="blue-text">Rust</span>, <span className="blue-text">TypeScript</span>, and{" "}
							<span className="blue-text">PHP</span>. I am also familiar with a variety of web development
							frameworks and tools such as <span className="blue-text">React</span>,{" "}
							<span className="blue-text">Next.js</span>, and <span className="blue-text">Vite</span>.
						</p>
					</div>
					<div className={x ? "is-hidden" : ""}>
						<h1 className="blue-text">
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
						Copyright © 2023 <span className="blue-text">Jan Leigh Muñoz</span>. All Rights Reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}

export default MainColumn;
