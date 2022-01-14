import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// PAGES
import App from "./pages/App";

// CSS
import "bulma/css/bulma.css";
import "./styles/index.scss";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App/>}/>
        </Routes>
    </Router>,
    document.getElementById("root")
);