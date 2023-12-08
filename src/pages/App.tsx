import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";

export function App() {
	return (
		<div id="app" className="bg-verdant-bg flex h-screen w-screen justify-center px-8 py-8">
			<Navbar />
			<MainContainer />
			<Footer />
		</div>
	);
}

export default App;
