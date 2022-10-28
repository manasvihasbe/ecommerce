import "./styles.css";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { DataProvider } from "./Context/DataContext";
import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishlistContext";
import { FeedbackProvider } from "./Context/FeedbackContext";
import Feedback from "./Components/Feedback";
import { FilterProvider } from "./Context/FilterContext";

const LandingPage = lazy(() => import("./Pages/LandingPage"));
const ProductsDisplay = lazy(() => import("./Pages/ProductsDisplay"));
const WishlistPage = lazy(() => import("./Pages/WishlistPage"));
const CartPage = lazy(() => import("./Pages/CartPage"));

export default function App() {
  return (
    <div className="App">
      <DataProvider>
        <Navbar />
        <CartProvider>
          <WishlistProvider>
            <FeedbackProvider>
              <FilterProvider>
                <Feedback />
                <Routes>
                  <Route path="/" element={
                    <Suspense fallback={<div>Loading...</div>}>
                    <LandingPage />
                    </Suspense>

                  } />
                  <Route
                    path="/products/:category"
                    element={
                      <Suspense fallback={<div>Loading...</div>}>
                      <ProductsDisplay />
                      </Suspense>
                    }
                  />
                  <Route path="wishlist" element={
                    <Suspense fallback={<div>Loading...</div>}>
                    <WishlistPage />
                    </Suspense>
                  } />
                  <Route path="cart" element={
                    <Suspense fallback={<div>Loading...</div>}>
                    <CartPage />
                    </Suspense>
                  } />
                  </Routes>
              </FilterProvider>
            </FeedbackProvider>
          </WishlistProvider>
        </CartProvider>
      </DataProvider>
    </div>
  );
}
