import MainColumn from "../components/MainColumn";
import Sidebar from "../components/Sidebar";

export function App() {
	return (
		<>
			<section className="section is-small">
				<div className="columns">
					<Sidebar />
					<MainColumn />
				</div>
			</section>
		</>
	);
}

export default App;
