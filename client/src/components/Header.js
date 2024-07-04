import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/auth.js";
// import { toast } from "react-toastify";
import toast from 'react-hot-toast';
import SearchInput from "./Form/SearchInput.js";
import useCategory from "../hooks/useCategory.js";
import {useCart} from "../context/cart.js"
import {Badge} from "antd"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [Cart] = useCart();
  const categories= useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" className="navbar-brand">
            🛒 UrbanGlow
          </Link>
          <ul className="navbar-nav ms-auto ps-5 mb-lg-0 ">
            <div className="me-5">
            <SearchInput />
            </div>

            <li className="nav-item">
              <NavLink to="/" className={({isActive})=>`nav-link fw-bolder ${isActive ?"text-danger":""}`}>
                Home
                {/* <HomeOutlinedIcon/>
                 */}
              </NavLink>
            </li>
            

            {!auth?.user ? (
              <>
                <li className="nav-item">
                  <NavLink to="/register"  className={({isActive})=>`nav-link fw-bolder ${isActive ?"text-danger":""}`}>
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login"  className={({isActive})=>`nav-link fw-bolder ${isActive ?"text-danger":""}`}
                  >
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    style={{ border: "none" }}
                  >
                    {auth?.user?.name}
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        to={`/dashboard/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`}
                        className="dropdown-item"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={handleLogout}
                        to="/login"
                        className="dropdown-item"
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </>
            )}
            <li className="nav-item">
              <Badge count={Cart?.length} showZero>
                <NavLink to="/cart" className={({isActive})=>`nav-link ${isActive ?"text-danger":""}`}>
                  Cart

                </NavLink>
              </Badge>
               {/* <ShoppingCartIcon/> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);
};

export default Header;
