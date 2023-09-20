import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import "../styles.scss";

import { useForm } from "react-hook-form";
import { Link} from "react-router-dom";
import { toast } from "react-toastify";
import { Images } from "../../../utils/Images";

import NavbarComponent from "../../../components/User/Navbar/index";

toast.configure({ autoClose: 2000 });

const Login = () => {
  const {
    formState: { errors },
  } = useForm();
  

  

  return (
    <div className="login">
      <NavbarComponent />
      <div className="flex-center flex-column">
        <div className="card shadow border-0 rounded-0">
          <div className="card-header text-center bg-white border-0">
              Let's Start From Here
          </div>
          <div className="card-body">
            {/* Account type container */}
            <div className="account-type-container d-flex">
              <div className="flex-fill p-2">
              <center>

                <img
                      src={Images.PatientVector}
                      className="img-fluid"
                      alt="..."
                />
              </center>
              </div>
              
            </div>

            {/* Account type message */}
            <div className="account-type-message text-center px-2 px-sm-3">
              
              <h6 className="mb-0 text-muted">
                Please fill out the form below to get started
              </h6>
            </div>

            {/* Form */}
            <form>
              {/* E-mail */}
              <div className="form-group mb-4">
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
              <div className="form-group mb-4">
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

              <div className="d-flex">
                
                <div className="ml-auto">
                
                  <button class='btn'
                    type="submit"
                    className="btn shadow-none"
                   
                  >
                    <span>Login</span>
                  </button>
                  <div className="pt-2">
                    <p className="text-muted">
                      No account? <Link to="/register">Register</Link>
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

export default Login;
