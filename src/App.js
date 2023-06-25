import React from "react";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import IntroPage from "./components/pages/IntroPage";
import Home from "./components/pages/Home";
import MemberPage from "./components/pages/MemberPage";
import Portpage from "./components/pages/Portpage";
import YoutubePage from "./components/pages/YoutubePage";
import MoviePage from "./components/pages/MoviePage";
import UnsplashPage from "./components/pages/UnsplashPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header attr={"header__wrap cafe5 bg-blue"} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/member" element={<MemberPage />} />
        <Route path="/port" element={<Portpage />} />
        <Route path="/youtube" element={<YoutubePage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/unsplash" element={<UnsplashPage />} />
      </Routes>
      <Footer attr={"footer__wrap cafe5 section"} />
    </BrowserRouter>
  );
};

export default App;
