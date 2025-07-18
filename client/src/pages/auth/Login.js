import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";
import PublicLayout from "../../components/shared/Layout/PublicLayout"; // Make sure this exists

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <PublicLayout>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0 vh-100">
          {/* Banner Image */}
          <div className="col-md-8 form-banner">
            <img src="/assets/images/banner1.jpg" alt="loginImage" />
          </div>

          {/* Login Form */}
          <div className="col-md-4 form-container">
            <Form
              formTitle="Login Page"
              submitBtn="Login"
              formType="login"
            />
          </div>
        </div>
      )}
    </PublicLayout>
  );
};

export default Login;
