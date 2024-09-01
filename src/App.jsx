import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Products from "./components/Products";
import Blog from "./components/Blog";
import NewsLetter from "./components/NewsLetter";
import MyFooter from "./components/MyFooter";

function App() {
    return (
        <>
            <NavBar />
            <Home />
            <Services />
            <About />
            <Products />
            <Blog />
            <NewsLetter/>
            <MyFooter/>
        </>
    );
}

export default App;
