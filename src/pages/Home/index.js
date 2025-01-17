import React from "react";
import "./style.scss";

import { Link } from "react-router-dom";

import { Images } from "../../utils/Images";

import NavbarComponent from "../../components/User/Navbar/index";
import FooterComponent from "../../components/User/Footer/index";

const Index = () => {
  return (
    <>
      <div className="home">
        <NavbarComponent />
        <div className="header py-4">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 content d-none d-lg-block">
                <h1>Search Doctors</h1>
                <h5>Choose your nearest specialist</h5>
              </div>
              <div className="col-12 col-lg-6 image-column text-center">
                <img src={Images.PeopleSearch} alt="..." />
              </div>
            </div>
          </div>
        </div>
        {/* <SearchComponent lat={latitude} lang={longitude} />, */}
        {/* Nearest or suggested Doctor */}
        <div className="suggested-doctors">
          <div className="container mb-4">
            <div className="row">
              <div className="col-12 text-center">
                <h2>Nearset Doctors</h2>
              </div>
            </div>
          </div>

          {/* <DoctorsListComponet doctors={doctor} loading={isLoading} /> */}
        </div>
        {/* service  */}
        <div className="service">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 text-center text-lg-left content">
                <h1>We Provide</h1>
                <h3>24/7 hour Service</h3>
                <p>Lorem ipsum</p>
                <Link
                  to="/contact-us"
                  type="button"
                  className="btn shadow-none"
                >
                  Contact Us
                </Link>
              </div>
              <div className="col-12 col-lg-6 text-center text-lg-left mt-4 mt-lg-0">
                <img src={Images.Service} className="img-fluid" alt="..." />
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <FooterComponent />
      </div>
    </>
  );
};

export default Index;
