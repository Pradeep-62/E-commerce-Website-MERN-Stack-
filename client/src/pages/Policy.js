import React from "react";
import Layout from "../components/Layout.js";

const Policy = () => {
  return (
    <Layout title={"About-Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center">Privacy Policy</h1>
        <div className="border border-info p-3">
          <p><h6>Information Collection:</h6> Clearly specify what types of information are collected from users.</p>
          <p><h6>Data Usage:</h6>Describe how the collected information will be used by the website.</p>
        </div>
         
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
