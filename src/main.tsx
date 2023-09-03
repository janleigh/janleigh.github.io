import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import App from "./pages/App";
import NotFound from "./app/NotFound";

import "animate.css";
import "tuicss";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/index.scss";

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	</Router>,
	document.getElementById("root")
);
