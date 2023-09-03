import Footer from "../app/Footer";
import Header from "../app/Header";
import AboutMe from "../app/home/AboutMe";
import Navbar from "../app/home/Navbar";

export function App() {
	return (
		<>
			<section className="section is-small animate__animated animate__fadeIn">
				<Header />
				<div style={{ margin: "1rem 2rem" }}>
					<Navbar />
					<AboutMe />
				</div>
				<Footer />
			</section>
		</>
	);
}

export default App;
