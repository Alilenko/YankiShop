import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getFavoriteFromStorage } from "./app/CatalogSlice";
import HomePage from "./pages/homePage/HomePage";
import TestPage from "./pages/testPage/TestPage";
import Header from "./components/header/Header";
import ProductPage from "./pages/productPage/ProductPage";
import CatalogPage from "./pages/catalogPage/CatalogPage";
import { BasketPage } from "./pages/basketPage/BasketPage";
import FavoritePage from "./pages/favoritePage/FavoritePage";

import "./App.css";
import AboutPage from "./pages/aboutPage/AboutPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const local = localStorage.getItem("favorite");
    if (local) {
      dispatch(getFavoriteFromStorage(JSON.parse(local)));
    }
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/" element={<CatalogPage />} />
        <Route path="/cart" element={<BasketPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
