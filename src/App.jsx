import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductTable from "./pages/ProductTable";
import ProductForm from "./pages/ProductForm";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import { ProductProvider } from "./contexts/ProductContext";
import ProductDetailPage from "./pages/ProductDetailPage";

const App = () => {
  return (
    <>
      <ProductProvider>
        {" "}
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route path="/" element={<Header />}></Route>
            <Route path="/" element={<Footer />}></Route>
          </Route>
          <Route path="/products" element={<ProductTable />}>
            <Route path="/products" element={<Header />}></Route>
            <Route path="/products" element={<Footer />}></Route>
          </Route>
          <Route path="/product/update/:id" element={<ProductForm />}></Route>
          <Route path="/product/add" element={<ProductForm />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route
            path="/products/detail"
            element={<ProductDetailPage />}
          ></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </ProductProvider>
    </>
  );
};

export default App;
