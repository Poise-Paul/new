import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
// import CarouselPage from "./Cart";
// import Category from "./Category";


export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <div>
      <header>
        <div className="container top-nav pt-3 p-0">
          <MDBNavbar expand="lg" light bgColor="white">
            <MDBContainer fluid>
              <MDBNavbarBrand href="#" className="p-0">
                <img src="./Images/logo2.png" alt="" />
              </MDBNavbarBrand>

              <MDBNavbarToggler
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShowBasic(!showBasic)}
              >
                <MDBIcon icon="bars" fas />
              </MDBNavbarToggler>
              <MDBCollapse navbar show={showBasic}>
                <form className="d-flex input-group w-auto">
                  <input
                    type="search"
                    className="form-control mt-2"
                    placeholder="Search Item, Brands and filter Names"
                    aria-label="Search"
                    style={{ width: "30rem" }}
                  />
                  <MDBIcon
                    fas
                    icon="search"
                    className="pl-2"
                    style={{ paddingTop: "1.2rem", color: "#bab8b8" }}
                  />
                </form>

                <div className="cart-container pr-3 p-2">
                  <a href="">
                    <i class="fas fa-shopping-cart fa-lg"></i>
                    <span class="badge rounded-pill badge-notification bg-danger">
                      12
                    </span>
                  </a>
                </div>

                <div className="profile">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                    class="rounded-circle"
                    height="25"
                    alt=""
                    loading="lazy"
                  />

                  <span className="pl-2 pr-2">
                    <strong>Hi Adeola</strong>
                  </span>
                  <a
                    class="dropdown-toggle align-items-center hidden-arrow d-inline"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  ></a>

                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        My profile
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>

          <hr />
        </div>

        {/* <!-- Navbar --> */}
        <div className="second-nav">
          <nav class="navbar navbar-expand-lg navbar-light bg-white container-fluid">
            <div class="container">
              <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fas fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item ">
                    <a class="nav-link active" aria-current="page" href="#">
                      All Categories
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Health and Beauty
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Home and Office
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Phones and Tablets
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Computing
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Electronics
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Fashion
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Gaming
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Others
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>  
      </header>
        
          <div className="container bg-white  mt-4">
            <div className="row">
                  <div className="col-sm-9">
                      <div className="p-3 selected-container">
                          <h5> <strong>Cart (10 Items)</strong></h5>
                            <hr />
                            <div className="table">
                             
                                  <table class="table table-bordered">
                                      <thead className="bg-primary">
                                          <tr>
                                          <th scope="col"> <span className="text-white"> <strong>ITEMS</strong> </span> </th>
                                          <th scope="col"> <span className="text-white"> <strong>QUANTITY</strong> </span></th>
                                          <th scope="col"> <span className="text-white"> <strong>UNIT PRICE</strong></span></th>
                                          <th scope="col"> <span className="text-white"> <strong>SUB-TOTAL</strong></span></th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                          <th scope="row"> 

                                              <div className="row">
                                                  <div className="img-container col pl-5">
                                                      <img
                                                          src="https://cdn.shopify.com/s/files/1/0469/4533/products/Black-Balls_085_no-highlight_1024x1024.png?v=1501521533"
                                                          class="img-fluid"
                                                          alt=""
                                                          width="100px"
                                                      />
                                                  </div>
                                                  <div className="text-container col">
                                                      <h5> <strong>First Product Here</strong></h5>
                                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eius.</p>
                                                      <p> <span className="text-danger"> <i class="fas fa-trash"></i> Remove Item</span></p>
                                                  </div>
                                              </div>
                                          </th>
                                          <td>Increment Button</td>
                                              <td>N4,500</td>
                                          <td><span className="text-warning"><strong>N4,500</strong></span></td>
                                          </tr>
                                          <tr>
                                              <th scope="row">
                                                <div className="row">
                                                    <div className="img-container col pl-5">
                                                      <img
                                                          src="https://www.nestle.in/sites/g/files/pydnoa451/files/refreshing-drinks.jpeg"
                                                          class="img-fluid"
                                                          alt=""
                                                          width="100px"
                                                      />
                                                    </div>
                                                  <div className="text-container col">
                                                      <h5> <strong>First Product Here</strong></h5>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eius.</p>
                                                      <p> <span className="text-danger"> <i class="fas fa-trash"></i> Remove Item</span></p>
                                                    </div>
                                                </div>
                                             
                                              </th>
                                              <td>Increment Button</td>
                                              <td>N4,500</td>
                                          <td><span className="text-warning"><strong>N4,500</strong></span></td>
                                          </tr>
                                          <tr>
                                              <th scope="row">

                                              <div className="row">
                                                  <div className="img-container col pl-5">
                                                      <img
                                                          src="https://www.drinks.ng/wp-content/uploads/2021/02/61ea6bb31c408e285458395c063656206ce212cf.jpg"
                                                          class="img-fluid"
                                                          alt=""
                                                          width="100px"
                                                      />
                                                  </div>
                                                  <div className="text-container col">
                                                      <h5> <strong>First Product Here</strong></h5>
                                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eius.</p>
                                                      <p> <span className="text-danger"> <i class="fas fa-trash"></i> Remove Item</span></p>
                                                  </div>
                                              </div>

                                              </th>
                                          <td>Increment Button</td>
                                          <td>N4,500</td>
                                          <td><span className="text-warning"><strong>N4,500</strong></span></td>
                                          </tr>
                                      </tbody>
                                  </table>
                            </div>
                    </div>
                      <div className="container bg-white mt-4 selected-container p-3">
                          <div className="d-flex container-fluid" style={{ position: "relative" }}>
                              <h6 className="text-dark"> <strong>Related Items</strong></h6>
                              <h6 className="text-primary" style={{ position: "absolute", right: "2rem" }}> <strong>See all items</strong></h6>
                          </div>
                          <hr />
                          <div className="row">
                              <div class="col-sm-3">
                                  <div class="thumb-wrapper">
                                      <div class="img-box">
                                          <img
                                              src="https://www.drinks.ng/wp-content/uploads/2021/02/61ea6bb31c408e285458395c063656206ce212cf.jpg"
                                              class="img-fluid"
                                              alt=""
                                          />
                                      </div>
                                      <div class="thumb-content">
                                          <h4>Macbook Air</h4>
                                          <p class="item-price">
                                              <strike>$899.00</strike> <span>$649.00</span>
                                          </p>

                                      </div>
                                  </div>
                              </div>

                              <div class="col-sm-3">
                                  <div class="thumb-wrapper">
                                      <div class="img-box">
                                          <img
                                              src="https://cdn.shopify.com/s/files/1/0469/4533/products/Black-Balls_085_no-highlight_1024x1024.png?v=1501521533g"
                                              class="img-fluid"
                                              alt=""
                                          />
                                      </div>
                                      <div class="thumb-content">
                                          <h4>Macbook Air</h4>
                                          <p class="item-price">
                                              <strike>$899.00</strike> <span>$649.00</span>
                                          </p>

                                      </div>
                                  </div>
                              </div>

                              <div class="col-sm-3">
                                  <div class="thumb-wrapper">
                                      <div class="img-box">
                                          <img
                                              src="https://www.gizmochina.com/wp-content/uploads/2018/09/Apple-iPhone-Xs.jpg"
                                              class="img-fluid"
                                              alt=""
                                          />
                                      </div>
                                      <div class="thumb-content">
                                          <h4>Macbook Air</h4>
                                          <p class="item-price">
                                              <strike>$899.00</strike> <span>$649.00</span>
                                          </p>

                                      </div>
                                  </div>
                              </div>

                              <div class="col-sm-3">
                                  <div class="thumb-wrapper">
                                      <div class="img-box">
                                          <img
                                              src="https://shopazodatacube.s3.eu-central-1.amazonaws.com/content/media/20200920092809/ezgif.com-webp-to-jpg2028129.jpg"
                                              class="img-fluid"
                                              alt=""
                                          />
                                      </div>
                                      <div class="thumb-content">
                                          <h4>Macbook Air</h4>
                                          <p class="item-price">
                                              <strike>$899.00</strike> <span>$649.00</span>
                                          </p>

                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                </div>
                  <div className="col-sm-3">
                      <div className="p-3 selected-container">
                          <h5> <strong>ORDER SUMARY</strong></h5>
                          <hr />
                          <div className="p-0 m-0 d-flex container-fluid" style={{ position: "relative" }}>
                              <h6 className="text-dark"> <strong>Items</strong></h6>
                              <h6 className="text-primary" style={{ position: "absolute", right: "2rem" }}> <strong>10 Items</strong></h6>
                          </div>
                          <div className="p-0 m-0 d-flex container-fluid" style={{ position: "relative" }}>
                              <h6 className="text-dark"> <strong>Subtotal</strong></h6>
                              <h6 className="text-primary" style={{ position: "absolute", right: "2rem" }}> <strong>N4,000</strong></h6>
                          </div>
                          <hr />
                          <div className="p-0 m-0 d-flex container-fluid" style={{ position: "relative" }}>
                              <h4 className="text-dark"> <strong>Total</strong></h4>
                              <h4 className="text-success" style={{ position: "absolute", right: "2rem" }}> <strong>N40,800</strong></h4>
                          </div>
                          <span><small>The fee is excluding fee for delivery</small></span>

                            <div className="buttons pt-3">

                              <Link to="./Order">
                              <button type="button" class="btn btn-primary">Proceed to Checkout</button>
                              </Link>

                             <Link to="./dashboard">
                              <button type="button" class="btn btn-outline-primary" data-mdb-ripple-color="dark">
                                  Continue Shopping
                              </button>
                              </Link>
                            </div>
                        
                      </div>
                  </div>
            </div>
        </div>

      <footer class="bg-light text-center text-lg-start mt-4">
        <div class="text-center p-3 bg-dark text-white row px-5">
          <div className="col">Privacy & Cookies</div>
          <div className="col">
            © 2020 Copyright:{" "}
            <a class="text-white" href="#">
              Bizen Cloud
            </a>
          </div>
          <div className="col">Terms & Condition</div>
        </div>
      </footer>
    </div>
  );
}
