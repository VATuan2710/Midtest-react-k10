import { createContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducers/ProductReducer";
import instance from "../service";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, { products: [] });
  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/products");
      dispatch({ type: "SET_PRODUCT", payload: data });
    })();
  }, []);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
