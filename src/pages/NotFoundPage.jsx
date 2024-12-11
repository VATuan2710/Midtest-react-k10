import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div>NotFoundPage</div>
      <h1>404</h1>
      <Link to="/">Về trang chủ</Link>
    </>
  );
};

export default NotFoundPage;
