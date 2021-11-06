import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import "bulma/css/bulma.css";
import "@creativebulma/bulma-tooltip/dist/bulma-tooltip.css";
import "./styles/scss/index.scss";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    </Router>,
    document.getElementById("root")
);