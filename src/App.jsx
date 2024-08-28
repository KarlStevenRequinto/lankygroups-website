import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Products from "./components/Products";

function App() {
    return (
        <>
            <NavBar />
            <Home/>
            <Services/>
            <About/>
            <Products/>
        </>
    );
}

export default App;
