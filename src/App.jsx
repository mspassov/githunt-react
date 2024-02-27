import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GithubProvider } from "./components/context/UserContext";
import { AlertProvider } from "./components/context/AlertContext";
import Home from "./components/layouts/Home";
import AboutPage from "./components/layouts/AboutPage";
import NotFoundPage from "./components/layouts/NotFoundPage";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Alert from "./components/Alert";
import UserPage from "./components/layouts/UserPage";

const App = () => {
  return (
    <AlertProvider>
      <GithubProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar title="GitHunt Search" />
            <main className="container mx-auto px-5 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/user/:login" element={<UserPage />} />
                <Route path="/*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </GithubProvider>
    </AlertProvider>
  );
};

export default App;
