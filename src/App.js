import React from "react";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import { Routes, Route } from "react-router-dom";
import TestPage from "./pages/testPage/TestPage";
import Header from "./components/header/Header";
import ProductPage from "./pages/productPage/ProductPage";
import CatalogPage from "./pages/catalogPage/CatalogPage";
import { BasketPage } from "./pages/basketPage/BasketPage";
import FavoritePage from "./pages/favoritePage/FavoritePage";

function App() {
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
