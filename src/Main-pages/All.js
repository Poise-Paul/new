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
// import CarouselPage from "./Cart";
// import Category from "./Category";
// import DropdownPage from "../components/dropdown"

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

      <div className="container mb-5">
          <div className="row">
                <div className="col-sm-3 mt-3">
                    <div className="pr-3 card">
                              <div class="card-body">
                              <h5 class="card-title"> <strong>CATEGORY</strong></h5>
                                  <hr />
                                <div>Grocery</div>
                                <div>
                                    Food Cupboard 
                                    <ul>
                                        <li>Cooking Ingredient</li>
                                        <li>Pap & Custard</li>
                                    </ul>
                                </div>
                                <hr />

                              <div className="p-0 m-0 d-flex container-fluid" style={{ position: "relative" }}>
                                  <p className="text-dark pr-4"> <small> <strong>PRICE (N)</strong></small></p>
                                  <p className="text-primary pl-5 ml-5"> <small> <strong>Apply</strong></small></p>
                              </div>
                              <div class="range">
                                  <input type="range" class="form-range" id="customRange1" />
                              </div>
                                {/* Dropdowns Here */}
                             <div className="row">
                                  <div class="form-outline col">
                                      <input type="text" id="form1" class="form-control" value="100"/>
                                  </div>
                                  <div class="form-outline col">
                                      <input type="text" id="form1" class="form-control" value="5000"/>
                                  </div>
                             </div>
                             <hr />
                             <div>
                                  <h4> <strong>BRAND</strong></h4>
                                  <div class="form-outline">
                                      <input type="text" id="form1" class="form-control" />
                                      <label class="form-label" for="form1">Example label</label>
                                  </div>
                                  {/* Checked Links */}
                                  <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                          <label class="form-check-label" for="flexCheckDefault">
                                              Honeywell
                                          </label>
                                    </div>
                                      <div class="form-check">
                                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                              <label class="form-check-label" for="flexCheckChecked">
                                                  Dangote
                                              </label>
                                            </div>
                                  <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                      <label class="form-check-label" for="flexCheckChecked">
                                          Golden-penny
                                      </label>
                                  </div>

                                  {/* End Of Checked Links */}
                             </div>
                                {/* End of Dropdwons */}
                          </div>
                    </div>
                </div>

                <div className="col-sm-9 mt-3">
                      <div class="card">
                          <div class="card-body"> 
                              <div className="p-0 m-0 d-flex container-fluid" style={{ position: "relative" }}>
                                  <h5 className="text-dark"> <strong>Top Selling Items</strong></h5>
                                  <h5 className="text-primary" style={{ position: "absolute", right: "2rem" }}> <strong>See all items</strong></h5>
                              </div>
                              <hr />
                              <span>1939 products found</span>
                              <hr />

                              {/* List of product goes here */}
 
                              <div class="row">
                                  <div class="col-sm-3">
                                      <div class="thumb-wrapper">
                                          <div class="img-box">
                                              <img
                                                  src="https://cdn.shopify.com/s/files/1/0469/4533/products/Black-Balls_085_no-highlight_1024x1024.png?v=1501521533"
                                                  class="img-fluid"
                                                  alt=""
                                              />
                                          </div>
                                          <div class="thumb-content">
                                              <h4>Apple iPad</h4>
                                              <p class="item-price">
                                                  <strike>$400.00</strike> <span>$369.00</span>
                                              </p>

                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-sm-3">
                                      <div class="thumb-wrapper">
                                          <div class="img-box">
                                              <img
                                                  src="https://www.nestle.in/sites/g/files/pydnoa451/files/refreshing-drinks.jpeg"
                                                  class="img-fluid"
                                                  alt=""
                                              />
                                          </div>
                                          <div class="thumb-content">
                                              <h4>Sony Headphone</h4>
                                              <p class="item-price">
                                                  <strike>$25.00</strike> <span>$23.99</span>
                                              </p>

                                          </div>
                                      </div>
                                  </div>
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
                                                  src="https://shopazodatacube.s3.eu-central-1.amazonaws.com/content/media/20200920092809/ezgif.com-webp-to-jpg2028129.jpg"
                                                  class="img-fluid"
                                                  alt=""
                                              />
                                          </div>
                                          <div class="thumb-content">
                                              <h4>Nikon DSLR</h4>
                                              <p class="item-price">
                                                  <strike>$315.00</strike> <span>$250.00</span>
                                              </p>

                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div class="row">
                                  <div class="col-sm-3">
                                      <div class="thumb-wrapper">
                                          <div class="img-box">
                                              <img
                                                  src="https://cdn.shopify.com/s/files/1/0469/4533/products/Black-Balls_085_no-highlight_1024x1024.png?v=1501521533"
                                                  class="img-fluid"
                                                  alt=""
                                              />
                                          </div>
                                          <div class="thumb-content">
                                              <h4>Apple iPad</h4>
                                              <p class="item-price">
                                                  <strike>$400.00</strike> <span>$369.00</span>
                                              </p>

                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-sm-3">
                                      <div class="thumb-wrapper">
                                          <div class="img-box">
                                              <img
                                                  src="https://www.nestle.in/sites/g/files/pydnoa451/files/refreshing-drinks.jpeg"
                                                  class="img-fluid"
                                                  alt=""
                                              />
                                          </div>
                                          <div class="thumb-content">
                                              <h4>Sony Headphone</h4>
                                              <p class="item-price">
                                                  <strike>$25.00</strike> <span>$23.99</span>
                                              </p>

                                          </div>
                                      </div>
                                  </div>
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
                                                  src="https://shopazodatacube.s3.eu-central-1.amazonaws.com/content/media/20200920092809/ezgif.com-webp-to-jpg2028129.jpg"
                                                  class="img-fluid"
                                                  alt=""
                                              />
                                          </div>
                                          <div class="thumb-content">
                                              <h4>Nikon DSLR</h4>
                                              <p class="item-price">
                                                  <strike>$315.00</strike> <span>$250.00</span>
                                              </p>

                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div class="row">
                                  <div class="col-sm-3">
                                      <div class="thumb-wrapper">
                                          <div class="img-box">
                                              <img
                                                  src="https://cdn.shopify.com/s/files/1/0469/4533/products/Black-Balls_085_no-highlight_1024x1024.png?v=1501521533"
                                                  class="img-fluid"
                                                  alt=""
                                              />
                                          </div>
                                          <div class="thumb-content">
                                              <h4>Apple iPad</h4>
                                              <p class="item-price">
                                                  <strike>$400.00</strike> <span>$369.00</span>
                                              </p>

                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-sm-3">
                                      <div class="thumb-wrapper">
                                          <div class="img-box">
                                              <img
                                                  src="https://www.nestle.in/sites/g/files/pydnoa451/files/refreshing-drinks.jpeg"
                                                  class="img-fluid"
                                                  alt=""
                                              />
                                          </div>
                                          <div class="thumb-content">
                                              <h4>Sony Headphone</h4>
                                              <p class="item-price">
                                                  <strike>$25.00</strike> <span>$23.99</span>
                                              </p>

                                          </div>
                                      </div>
                                  </div>
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
                                                  src="https://shopazodatacube.s3.eu-central-1.amazonaws.com/content/media/20200920092809/ezgif.com-webp-to-jpg2028129.jpg"
                                                  class="img-fluid"
                                                  alt=""
                                              />
                                          </div>
                                          <div class="thumb-content">
                                              <h4>Nikon DSLR</h4>
                                              <p class="item-price">
                                                  <strike>$315.00</strike> <span>$250.00</span>
                                              </p>

                                          </div>
                                      </div>
                                  </div>
                              </div>
                              {/* List of products ends here */}
                          </div>
                      </div>
                </div>
            </div>
      </div>
    
      <footer class="bg-light text-center text-lg-start">
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
