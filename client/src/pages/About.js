import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title={"About-us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">About Us</h1>
          <p className="text-justify mt-2">
            <div className="border border-info p-3">
              At UrbanGlow, we're dedicated to enhancing your online shopping
              experience. Whether you're searching for the latest trends, unique
              finds, or everyday essentials, we're here to make your shopping
              journey effortless and enjoyable.
            </div>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
