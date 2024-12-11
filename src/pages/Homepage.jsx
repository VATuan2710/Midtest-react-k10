import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import "../assets/scss/styles.scss";

const Homepage = () => {
  const { state, dispatch } = useContext(ProductContext);
  return (
    <>
      <Outlet />
      <div>
        {state.products &&
          state.products.map((item) => (
            <div className="itemContainer">
              <div className="imageContainer">
                <img src={item.thumbnail} alt="" />
              </div>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <button>
                <Link to="/products/detail">Xem chi tiết</Link>
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Homepage;
