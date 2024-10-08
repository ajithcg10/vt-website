import React from "react";
import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// components
import About from "../components/screens/About";
import Contacts from "../components/screens/Contacts";
import Home from "../components/screens/Home";
import Projects from "../components/screens/Projects";
import Qualifications from "../components/screens/Qualifications";

function AnimRoutes() {
    const location = useLocation();
    const navigate = useNavigate();
    
    return (
        <AnimatePresence initial={true} mode="wait">
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Navigate to="/portfolio-website" replace />} />
                <Route path="/portfolio-website" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/works" element={<Projects />} />
                <Route path="/skills" element={<Qualifications />} />
                <Route path="/contact" element={<Contacts />} />
                <Route path="*" element={<Navigate to="/portfolio-website" replace />} /> {/* Catch-all route */}
            </Routes>
        </AnimatePresence>
    );
}

export default AnimRoutes;
