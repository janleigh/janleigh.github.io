export function MainContainer() {
	return (
		<div id="main" className="flex justify-center bg-verdant-bg">
			<div className="flex flex-col items-center justify-center lg:flex-row">
				<div className="mx-12 mb-8 mt-8 lg:mb-0 lg:mt-0">
					<img
						src="https://github.com/janleigh.png"
						alt="PFP"
						className="h-60 w-60 rounded-full bg-verdant-bg-light p-4"
					/>
				</div>
				<div className="mx-12 mb-8 items-center justify-center lg:mx-8 lg:mb-0">
					<div className="text-3xl font-bold text-verdant-fg">
						Heya! I'm <span className="text-verdant-blue">Jan Leigh</span>!
					</div>
					<div className="text-base text-verdant-fg-dark">
						I am a Filipino college student and self-taught full-stack developer.
						<br />
						<br />
						I've been programming since 2018, and I enjoy creating web applications,
						<br />
						and occasionally <span className="line-through">shitty</span> software.
						<br />
						<br />I am proficient in a variety of programming languages, such as{" "}
						<span className="text-verdant-blue">TypeScript</span>,{" "}
						<span className="text-verdant-orange">Python</span>, and{" "}
						<span className="text-verdant-">Java</span>.
						<br />I am also familiar with a range of web development frameworks and tools, such as{" "}
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
