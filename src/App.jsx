import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import WhyTrustUs from "./components/WhyTrustUs";
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
            <WhyTrustUs />
            <Blog />
            <NewsLetter/>
            <MyFooter/>
        </>
    );
}

export default App;
