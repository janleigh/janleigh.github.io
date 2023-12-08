import { useState, useEffect } from "react";

export function App() {
	const [reason, setReason] = useState("Not Found.");

	useEffect(() => {
		if (window.innerWidth < 768) {
			setReason("Screen too small.");
		} else {
			setReason("Not Found.");
		}
	}, []);

	return (
		<div id="404" className="flex h-screen w-screen justify-center bg-verdant-bg px-8 py-8">
			<div className="flex flex-col items-center justify-center">
				<span className="text-6xl text-verdant-fg">\(o_o)/</span>
				<span className="my-12 text-center text-3xl text-verdant-fg-dark">
					404.
					<br />
					{reason}
				</span>
				<span className="text-2xl text-verdant-fg-dark">
					<a href="/" className="text-verdant-blue">
						Back to Home
					</a>
				</span>
			</div>
		</div>
	);
}

export default App;
