import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import App from "./pages/App";

import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/index.scss";

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" element={<App />} />
		</Routes>
	</Router>,
	document.getElementById("root")
);
