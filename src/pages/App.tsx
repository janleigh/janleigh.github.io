import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";

export function App() {
	return (
		<div id="app" className="flex h-screen w-screen justify-center bg-verdant-bg lg:px-8 lg:py-8">
			{/* {window.innerWidth > 768 ? (
				<>
					<Navbar />
					<MainContainer />
					<Footer />
				</>
			) : (
				<NotFound />
			)} */}
			<Navbar />
			<MainContainer />
			<Footer />
		</div>
	);
}

export default App;
