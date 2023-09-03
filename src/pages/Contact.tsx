import Header from "../app/Header";
import Contact from "../app/contact/Contact";

export function App() {
	return (
		<>
			<section className="section is-small animate__animated animate__fadeIn">
				<Header />
				<Contact />
			</section>
		</>
	);
}

export default App;
