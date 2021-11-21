import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// PAGES
import App from "./pages/App";
import EasterEgg from "./pages/secrets/EasterEgg";
import PRC from "./pages/secrets/LongLiveChina";

// CSS
import "animate.css/animate.min.css";
import "bulma/css/bulma.css";
import "@creativebulma/bulma-tooltip/dist/bulma-tooltip.css";
import "./styles/scss/index.scss";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/how-did-you-find-this" element={<EasterEgg />} />
            <Route path="/prc" element={<PRC />} />
        </Routes>
    </Router>,
    document.getElementById("root")
);