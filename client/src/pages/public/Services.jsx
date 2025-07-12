import React from "react";

const Services = () => {
  const services = [
    {
      title: "Blood Donation Management",
      description:
        "Efficiently manage donor registrations, blood drives, and donations in a centralized platform.",
    },
    {
      title: "Hospital & Donor Integration",
      description:
        "Connect hospitals directly with verified donors for faster communication and matching.",
    },
    {
      title: "Real-time Blood Inventory",
      description:
        "Track blood availability and types in real-time across partnered organizations.",
    },
    {
      title: "Alerts & Notifications",
      description:
        "Receive instant alerts for urgent blood requirements or when donations are due.",
    },
    {
      title: "Secure Authentication",
      description:
        "Ensure data safety and user privacy with role-based authentication and JWT security.",
    },
  ];

  return (
    <div className="container py-5" style={{ minHeight: "80vh" }}>
      <h2 className="text-center mb-4 text-danger">Our Services</h2>
      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">{service.title}</h5>
                <p className="card-text text-muted">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
