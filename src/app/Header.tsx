import { useLocation } from "react-router-dom";

function Header() {
	let location = "";
	switch (useLocation().pathname) {
		case "/":
			location = "home";
			break;
		case "/contact":
			location = "contact";
			break;
		default:
			location = "404";
			break;
	}

	return (
		<div>
			<div className="terminal is-accent">
				<div className="prompt">
					<span>RUN ./{location}.o</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
