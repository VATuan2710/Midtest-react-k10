import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="headerContainer">
      <div>
        <Link to="/">Logo</Link>
      </div>
      <Link to="/products">Quản lý sản phẩm </Link>
      <Link to="login">Đăng nhập</Link>
    </div>
  );
};

export default Header;
