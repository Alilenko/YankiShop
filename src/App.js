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
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/cart" element={<BasketPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </div>
  );
}

export default App;
