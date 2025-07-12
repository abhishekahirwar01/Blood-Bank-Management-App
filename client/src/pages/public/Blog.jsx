import React from "react";

const Blog = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Blog Content */}
      <div className="container py-5 flex-grow-1">
        <h2 className="text-center mb-4">Latest Blog Posts</h2>

        {/* Blog Post 1 */}
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-danger">Why Regular Blood Donation Matters</h5>
            <p className="card-text">
              Learn how regular donation helps save lives and keeps you healthy.
              A simple act can mean everything to someone in need. Regular
              donors reduce the risk of hemochromatosis, improve cardiovascular
              health, and make a vital impact in emergencies.
            </p>
            <a href="#" className="btn btn-outline-primary btn-sm">
              Read More
            </a>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-danger">How Blood Banks Operate</h5>
            <p className="card-text">
              Understand the inner workings of blood banks—from donation
              collection, testing, processing, to storage. Every unit is
              screened, categorized, and tracked to ensure safe and effective
              use when it's needed most.
            </p>
            <a href="#" className="btn btn-outline-primary btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
