import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// PAGES
import App from "./pages/App";
import Secret from "./pages/Secret";

// CSS
import "bulma/css/bulma.css";
import "@creativebulma/bulma-tooltip/dist/bulma-tooltip.css";
import "./styles/scss/index.scss";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/secret" element={<Secret />} />
        </Routes>
    </Router>,
    document.getElementById("root")
);