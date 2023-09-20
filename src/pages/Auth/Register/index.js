import React from "react";
import "../styles.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Images } from "../../../utils/Images";
import NavbarComponent from "../../../components/User/Navbar/index";
toast.configure({ autoClose: 2000 });
const Index = () => {
  
  const {  
    formState: { errors },
  } = useForm();
 

  return (
    <div className="login">
      <NavbarComponent />
      <div className="flex-center flex-column">
        <div className="card shadow border-0 rounded-0">
          <div className="card-header text-center bg-white border-0">
            <h5 className="mb-0">Join Us in Our Journey</h5>
          </div>
          <div className="card-body">
            {/* Account type container */}
            <div className="account-type-container d-flex">
              <div className="flex-fill p-2">
                <div>
                  <center>
                    <img
                      src={Images.PatientVector}
                      className="img-fluid"
                      alt="..."
                    />
                  </center>
                </div>
              </div>
              
            </div>

            {/* Account type message */}
            <div className="account-type-message text-center px-2 px-sm-3 pb-2">
              <h6 className="mb-1 text-muted text-capitalize">
                Hi there,
              </h6>
              <h6 className="mb-0 text-muted">
                Please fill out the form below to get started
              </h6>
            </div>

            {/* Form */}
            <form>
              {/* E-mail */}
              <div className="form-group mb-2">
                {errors.email && errors.email.message ? (
                  <small className="text-danger">
                    {errors.email && errors.email.message}
                  </small>
                ) : (
                  <small>E-mail</small>
                )}
                <input
                  type="text"
                  name="email"
                  
                  className={
                    errors.email
                      ? "form-control shadow-none danger-border"
                      : "form-control shadow-none"
                  }
                  placeholder="E-mail"
                />
              </div>

              {/* Password */}
              <div className="form-group mb-3">
                {errors.password && errors.password.message ? (
                  <small className="text-danger">
                    {errors.password && errors.password.message}
                  </small>
                ) : (
                  <small>Password</small>
                )}
                <input
                  type="password"
                  name="password"
                  className={
                    errors.password
                      ? "form-control shadow-none danger-border"
                      : "form-control shadow-none"
                  }
                  
                  placeholder="Password"
                />
                
              </div>

              <div className="form-group mb-3">
                {errors.password && errors.password.message ? (
                  <small className="text-danger">
                    {errors.password && errors.password.message}
                  </small>
                ) : (
                  <small>Confirm Password</small>
                )}
                <input
                  type="confirm-password"
                  name="confirm-password"
                  className={
                    errors.password
                      ? "form-control shadow-none danger-border"
                      : "form-control shadow-none"
                  }
                  
                  placeholder="Password"
                />
                
              </div>

              <div className="d-flex">
                <div className="ml-auto">
                  <button
                    type="submit"
                    className="btn shadow-none"
                    
                  >
                    Register
                    
                  </button>
                  <div className="pt-2">
                  <p className="text-muted">
                    Have an account? <Link to="/login">Login</Link>
                  </p>
                </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
