import React, { useContext } from "react";
import { use } from "react";
import { Link, Outlet } from "react-router-dom";
import instance from "../service";
import { ProductContext } from "../contexts/ProductContext";
import ProductForm from "./ProductForm";

const ProductTable = () => {
  const { state, dispatch } = useContext(ProductContext);
  const handleRemove = async (id) => {
    if (confirm("sure")) {
      await instance.delete(`/products/${id}`);
      dispatch({ type: "REMOVE_PRODUCT", payload: id });
    }
  };

  return (
    <>
      <Outlet />
      <Link to="/product/add">Thêm sản phẩm</Link>
      <table className="table table-border table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.products &&
            state.products.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img src={item.thumbnail} />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <Link to={`/product/update/${item.id}`}>Update</Link>
                </td>
                <td>
                  <Link onClick={() => handleRemove(item.id)}>Remove</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
