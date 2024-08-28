import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
function App() {
    return (
        <>
            <NavBar />
            <Home/>
            <Services/>
            <About/>
        </>
    );
}

export default App;
