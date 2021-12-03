import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// PAGES
import App from "./pages/App";
import NotFound from "./pages/NotFound";

// CSS
import "bulma/css/bulma.css";
import "./styles/index.scss";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/" element={<App/>}/>
            <Route path="/404" element={<NotFound/>}/>
        </Routes>
    </Router>,
    document.getElementById("root")
);