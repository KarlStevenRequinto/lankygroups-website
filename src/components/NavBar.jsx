import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        const handleScroll = () => {
            if (Window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.addEventListener("scroll", handleScroll);
        };
    });
    const navItems = [
        { link: "Home", path: "home" },
        { link: "Service", path: "service" },
        { link: "About", path: "about" },
        { link: "Product", path: "product" },
        { link: "Testimonial", path: "testimonial" },
        { link: "FAQ", path: "faq" },
    ];
    return (
        <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
            <nav>
                <div>
                    <a href="" className="text-2xl font-semibold flex items-center space-x-3">
                        <img src={logo} alt="logo" className="w-10 inline-block items-center" />
                        <span className="text-[#263238]">LANKY GROUPS</span>
                    </a>
                    <ul className="md:flex space-x-12 hidden">
                        {navItems.map(({ link, path }) => (
                            <Link key={path} to={path}>
                                {link}
                            </Link>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
