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
import CarouselPage from "./Cart";
import Category from "./Category";
import DropdownPage from "../components/dropdown";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";


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
                        View Saved Items
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-mdb-toggle="modal"
                        data-mdb-target="#exampleModal"
                      >
                        Change Password
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

      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <div className="pt-4 pb-4 mb-3">
              <div className="row selected-container">
                <div className="col-sm-5 bg-white p-3">
                  <img
                    src="https://www.gizmochina.com/wp-content/uploads/2018/09/Apple-iPhone-Xs.jpg"
                    alt=""
                    width="100%"
                  />
                  <div>
                    Share this product
                    <div>
                      <i class="fab fa-facebook pr-2 text-primary"></i>{" "}
                      <i class="fab fa-twitter text-primary"></i>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-sm-7 p-3">
                  <h5>
                    {" "}
                    <strong>Iphone 10 Plus</strong>{" "}
                  </h5>
                  <p>Brand Apple Phones</p>
                  <hr />
                  <h5>
                    {" "}
                    <strong>N148,000.00 </strong>{" "}
                    <span className="color-grey">
                      <strike>243,000.00</strike>
                    </span>{" "}
                  </h5>
                  <hr />
                  <div className="p-0">
                    <button
                      type="button"
                      class="btn btn-primary btn-floating bg-"
                    >
                      <span>+</span>
                    </button>
                    <span>1</span>
                    <button type="button" class="btn btn-primary btn-floating">
                      <span>-</span>
                    </button>
                    <span className="color-grey">1 item(s) added</span>
                    <div className="pt-3">
                      <Link to="/shoppingCart">
                      <button type="button" class="btn btn-primary">
                        Buy Now
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <ul class="nav nav-tabs mb-3" id="myTab0" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="home-tab0"
                      data-mdb-toggle="tab"
                      data-mdb-target="#home0"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Home
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="profile-tab0"
                      data-mdb-toggle="tab"
                      data-mdb-target="#profile0"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Profile
                    </button>
                  </li>
                </ul>

                <div class="tab-content m-3" id="myTabContent0">
                  <div
                    class="tab-pane fade show active p-3"
                    id="home0"
                    role="tabpanel"
                    aria-labelledby="home-tab0"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam laborum similique aliquid hic saepe voluptas eligendi
                    veritatis possimus nobis repellat impedit et consequatur
                    minus accusamus at quia dicta, voluptates voluptatem
                    reprehenderit explicabo? Delectus incidunt natus mollitia,
                    quos error, nisi architecto atque sapiente assumenda dolor
                    rem tempore doloremque perspiciatis modi cumque voluptatibus
                    fuga sequi aliquam amet at consequuntur quibusdam animi!
                    Error, dolorem qui? Facere inventore dolorem velit
                    reprehenderit ad quod, adipisci possimus in numquam, quae
                    expedita temporibus, ut earum sed deserunt dolorum
                    blanditiis nisi enim eum? Numquam doloribus ab animi veniam
                    vitae voluptate facere veritatis, neque delectus pariatur
                    dignissimos vel quod officia necessitatibus quam soluta,
                    voluptatem deserunt sapiente quaerat mollitia distinctio. A
                    fuga, est incidunt maiores quae porro excepturi consequatur
                    cupiditate delectus deserunt rem, unde vitae sequi quos
                    voluptatem neque! Ab voluptatem porro, recusandae rem a
                    doloribus deserunt magnam minima repellat incidunt
                    consequatur autem consequuntur. Corporis, iure vero! Ullam
                    delectus explicabo necessitatibus at accusantium quae
                    tempore id eveniet similique! Quasi excepturi reiciendis
                    accusantium eaque doloribus nobis recusandae, perspiciatis
                    modi eligendi hic ut tempore ullam illum sed aliquam nostrum
                    unde repellat laudantium quod. Nisi totam, tempora minima
                    quis quia ea quam perspiciatis porro odit quos dolores rem,
                    excepturi aspernatur repudiandae. Ipsa aspernatur veritatis
                    commodi modi, delectus placeat dolor accusantium officiis
                    vel libero fugit doloremque quam, rerum, ea provident
                    aperiam. Alias aperiam praesentium quo labore facere? Odit
                    nihil reprehenderit magnam fugit eligendi perspiciatis iusto
                    quisquam ad dolorum ipsam assumenda, rerum inventore
                    quibusdam quas aliquam accusamus labore laudantium dolore
                    deserunt quaerat voluptatum quia deleniti alias? Magnam
                    incidunt, quisquam inventore ratione repellat sequi,
                    laudantium ipsam molestiae consequuntur voluptas suscipit
                    obcaecati? Ipsa aliquid debitis mollitia laborum unde
                    doloribus adipisci culpa eius possimus sit, deserunt
                    excepturi, nostrum rem aperiam neque quam pariatur
                    molestias. Culpa dolores ea voluptas impedit facilis quod
                    ducimus libero nisi, ipsum nam! Doloribus, magnam.{" "}
                  </div>
                  <div
                    class="tab-pane fade p-3 mt-4"
                    id="profile0"
                    role="tabpanel"
                    aria-labelledby="profile-tab0"
                  >
                    <div>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eum quam maiores molestiae labore repellat. Provident,
                      rerum molestias dolor quasi amet nemo exercitationem
                      tempora nihil facere sit vel tenetur laudantium expedita
                      deleniti, quibusdam nisi temporibus magni laborum corrupti
                      enim soluta quia sint. Veniam ab corporis ut quos labore
                      iste minus quod. <br />
                      <span className="mt-3 pb-5">
                        <strong>Customer Reviews (10)</strong>
                      </span>
                      <div class="card w-100 mb-3">
                        <div class="card-body">
                          <h5 class="card-title">
                            {" "}
                            <strong>I like it</strong>
                          </h5>
                          <p class="card-text">
                            <span className="color-grey">13/08/2021</span>
                            <p>
                              {" "}
                              <i class="fas fa-user-circle"></i> Abubarkar
                              Ibrahim
                            </p>
                          </p>
                        </div>
                      </div>
                      <div class="card w-100 mb-3">
                        <div class="card-body">
                          <h5 class="card-title">
                            {" "}
                            <strong>I like it</strong>
                          </h5>
                          <p class="card-text">
                            <span className="color-grey">13/08/2021</span>
                            <p>
                              {" "}
                              <i class="fas fa-user-circle"></i> Abubarkar
                              Ibrahim
                            </p>
                          </p>
                        </div>
                      </div>
                      <div class="card w-100 mb-3">
                        <div class="card-body">
                          <h5 class="card-title">
                            {" "}
                            <strong>I like it</strong>
                          </h5>
                          <p class="card-text">
                            <span className="color-grey">13/08/2021</span>
                            <p>
                              {" "}
                              <i class="fas fa-user-circle"></i> Abubarkar
                              Ibrahim
                            </p>
                          </p>
                        </div>
                      </div>
                      <div class="card w-100 mb-3">
                        <div class="card-body">
                          <h5 class="card-title">
                            {" "}
                            <strong>I like it</strong>
                          </h5>
                          <p class="card-text">
                            <span className="color-grey">13/08/2021</span>
                            <p>
                              {" "}
                              <i class="fas fa-user-circle"></i> Abubarkar
                              Ibrahim
                            </p>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
              <div className="container bg-white mt-4 selected-container p-3">
                <div
                  className="d-flex container-fluid"
                  style={{ position: "relative" }}
                >
                  <h6 className="text-dark">
                    {" "}
                    <strong>Related Items</strong>
                  </h6>
                  <h6
                    className="text-primary"
                    style={{ position: "absolute", right: "2rem" }}
                  >
                    {" "}
                    <strong>See all items</strong>
                  </h6>
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
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-3 pt-4">
            <div className="bg-white p-3 selected-container">
              <i class="fas fa-car-side"></i> <strong>DELIVERY & RETURN</strong>
              <hr />
              <span>
                {" "}
                1-7 Days estimated delivery time <br />
                7 Days Return Policy <br />
                <i class="fas fa-stamp"></i> <strong>WARRANTY</strong> <br />
                <hr />1 Year Warranty
              </span>
            </div>
          </div>
        </div>
      </div>
      <Modal />

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
   