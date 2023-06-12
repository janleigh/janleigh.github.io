import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import App from "./pages/App";

import "./styles/index.css";

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" element={<App />} />
		</Routes>
	</Router>,
	document.getElementById("root")
);
