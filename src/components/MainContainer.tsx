export function MainContainer() {
	return (
		<div id="main" className="flex w-screen justify-center bg-verdant-bg">
			<div className="flex items-center justify-center">
				<div className="mx-12">
					<img
						src="https://github.com/janleigh.png"
						alt="PFP"
						className="h-60 w-60 rounded-full bg-verdant-bg-light p-4"
					/>
				</div>
				<div className="mx-8 items-center justify-center">
					<div className="text-3xl font-bold text-verdant-fg">
						Heya! I'm <span className="text-verdant-blue">Jan Leigh</span>!
					</div>
					<div className="text-base text-verdant-fg-dark">
						I am a Filipino first-year college student and a self-taught full-stack developer.
						<br />
						<br />
						I have been programming since 2018, and I have a passion
						<br />
						for creating web applications, and sometimes <span className="line-through">shitty</span>{" "}
						software.
						<br />
						<br />I am proficient in a variety of programming languages, including{" "}
						<span className="text-verdant-blue">TypeScript</span>,{" "}
						<span className="text-verdant-purple">Rust</span>, and{" "}
						<span className="text-verdant-red">C</span>.
						<br />I am also familiar with a variety of web development frameworks and tools such as{" "}
						<span className="text-verdant-orange">React</span>,
						<br />
						<span className="text-verdant-blue">Next.js</span>, and{" "}
						<span className="text-verdant-orange">Vite</span> and database management systems such as{" "}
						<span className="text-verdant-green">MongoDB</span> and{" "}
						<span className="text-verdant-purple">Prisma</span>.
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainContainer;