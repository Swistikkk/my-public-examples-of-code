import { Link, Route, Routes } from "react-router-dom";
import './index.scss';
import { Suspense } from "react";
import { AboutPageAsync } from "./pages/AboutPage/About.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

const App = () => {
    return (
        <div className="app">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync />} />
                    <Route path="/" element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
};

export default App;