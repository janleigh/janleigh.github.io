import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";

export function App() {
	return (
		<div id="app" className="h-screen w-screen flex-col justify-center bg-verdant-bg lg:flex lg:px-8 lg:py-8">
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
			<div className="flex flex-col justify-center">
				<MainContainer />
			</div>
			<Footer />
		</div>
	);
}

export default App;
