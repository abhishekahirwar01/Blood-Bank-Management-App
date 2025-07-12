import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";
import PublicLayout from "../../components/shared/Layout/PublicLayout"; // Must exist

const Register = () => {
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
            <img src="/assets/images/banner2.jpg" alt="registerImage" />
          </div>

          {/* Registration Form */}
          <div className="col-md-4 form-container">
            <Form
              formTitle="Register"
              submitBtn="Register"
              formType="register"
            />
          </div>
        </div>
      )}
    </PublicLayout>
  );
};

export default Register;
