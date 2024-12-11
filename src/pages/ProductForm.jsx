import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { schemaProduct } from "../schemas/productForm";
import { useParams } from "react-router-dom";

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaProduct),
  });
  const { id } = useParams();
  const [form, setForm] = useState("");
  const [value, setValue] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await fetch("http://localhost:3000/products");
        const json = await data.json();
        setForm(json);
      } catch (error) {
        return console.log(error);
      }
    };
    fetchdata();
  }, []);
  console.log(form);

  return (
    <>
      <div>
        <h2>{id ? "Update" : "Add"} Sản phẩm</h2>
        <form onSubmit={handleSubmit(handleSubmit)}>
          <div className="form-group">
            <label>Tên sản phẩm</label>
            <input
              type="text"
              className="form-control"
              value={value}
              {...register("title")}
            />
            {errors.title && (
              <p className="text-danger">{errors.title.message}</p>
            )}
          </div>
          <div className="form-group">
            <label>Prices</label>
            <input
              type="number"
              className="form-control"
              {...register("price")}
            />
            {errors.price && (
              <p className="text-danger">{errors.price.message}</p>
            )}
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              {...register("description")}
            />
            {errors.description && (
              <p className="text-danger">{errors.description.message}</p>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Thêm
          </button>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
