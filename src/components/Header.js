import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from "react-icons/bs"

const Header = () => {
  return (
   <div classNmae="container">
    <header className="header-top-strip  py-2 d-lg-flex justify-content-between d-none " >
          <div className=" ">
            <p className="px-5 text-white mb-0">
              Free Shipping Over $100 & Free Returns
              </p>
          </div>
          <div className=" px-5">
            <p className="text-end text-white mb-0">Hotline: 
            <a className="text-white" href="tel:+91 6302283732"></a>+91 630228372
            </p>
          </div>
    </header>

    <header className="header-upper py-3 overflow-hidden">
      <div className="">
        <div className="d-flex justify-content-between" >
          <div className="">
            <h2>
              <Link className="text-white ps-5 alan-co">Alan.<span>co</span></Link>
            </h2>
          </div>
          <div className=" header-search-bar col-lg-6 col-5 col-sm-9 pe-5 pe-lg-0">
            <div className="input-group ">
              <input type="text" 
              className="form-control py-2"
              placeholder="Search Product Here..." 
              aria-label="Search Product Here..." 
              aria-describedby="basic-addon2"
              />
              <span class="input-group-text p-3" id="basic-addon2">
                <BsSearch className="fs-6"/>
                </span>
              </div>
          </div>
          <div className="col-4 header-upper-nav d-lg-inline d-none">
            <div className="header-upper-links d-flex align-items-center justify-content-between">
              <div>
                <Link className="d-flex align-items-center gap-10 text-white">
                   <img src="images/compare.svg" alt="Compare"/>
                   <p className="mb-0">Compare  <br /> Products</p>
                </Link>
              </div>
              <div>
                <Link className="d-flex align-items-center gap-10 text-white">
                <img src="images/Wishlist.svg" alt="Wishlist"/>
                   <p className="mb-0">Favourite <br /> Wishlist</p>
                </Link>
              </div>
              <div>
                <Link className="d-flex align-items-center gap-10 text-white">
                <img src="images/user.svg" alt="user"/>
                   <p className="mb-0">Login <br /> My Account</p>
                </Link>
              </div>
              <div>
                <Link className="d-flex align-items-center gap-10 text-white">
                <img src="images/cart.svg" alt="cart"/>
                   <div className="d-flex flex-column">
                    <sapn className="badge bg-white text-dark">0</sapn>
                    <p className="mb-0">$ 500</p>
                   </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <header className="header-bottom py-md-3  ">
      <div className="">
        <div className="d-none d-md-inline">
          <div className="ps-5 ">
            <div className="menu-bottom d-flex align-items-center gap-30">
              <div>
              <div class="dropdown ">
                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15   d-flex align-items-center"
                type="button" 
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                   <img src="images/menu.svg" alt="menu" className="img-icon"/>
                   <span className="me-4 d-inline-block ">Shop Categories</span>
               </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
               <li>
                <Link className="dropdown-item text-white" to="">
                  Action
                </Link>
                </li>
               <li>
                <Link className="dropdown-item text-white" to="">
                  Another action
                </Link>
                </li>
               <li>
                <Link className="dropdown-item text-white" to="">
                  Something else here
                </Link>
                </li>
              </ul>
              </div>
              </div>
              <div className="menu-links">
                <div className="d-flex align-items-center gap-20 ">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/store">Our Store</NavLink>
                  <NavLink to="/">Blogs</NavLink>
                  <NavLink to="/">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
   </div>
  )
}

export default Header;
