import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import App from "./pages/App";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import "animate.css";
import "tuicss";
import "./styles/index.scss";

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="contact" element={<Contact />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	</Router>,
	document.getElementById("root")
);
