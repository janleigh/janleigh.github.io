import { Introduction } from "./components/sections/Introduction";
import { Projects } from "./components/sections/Projects";
import { Footer } from "./components/sections/Footer";
import { Navbar } from "./components/Navbar";

export const App = () => {
    return (
        <div className="app">
            <Navbar/>
            <Introduction
                title="Hello!"
                description="Hello! I'm Kizu! I'm a Filipino senior high-school student, a full stack developer and a Linux enthusiast."
            />
            <Projects/>
            <Footer/>
        </div>
    )
}

export default App;