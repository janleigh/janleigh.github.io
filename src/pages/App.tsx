import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";

import NotFound from "./404";

export function App() {
	return (
		<div id="app" className="flex h-screen w-screen justify-center bg-verdant-bg px-8 py-8">
			{window.innerWidth > 768 ? (
				<>
					<Navbar />
					<MainContainer />
					<Footer />
				</>
			) : (
				<NotFound />
			)}
		</div>
	);
}

export default App;
