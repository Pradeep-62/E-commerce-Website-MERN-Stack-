import React, { useState } from "react";
import Layout from "../../components/Layout";
// import toast from 'react-hot-toast';
import { toast } from "react-toastify";
import axios from 'axios';
// import {useNavigate} from "react-router-dom"
import "../../style/authStyle.css";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  // const navigate=useNavigate();

  // form function-----------
  const handleSummit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/register',
        { name, email, password, phone, address ,answer}
      );
      if(res.data.success){
        toast.success(res.data.message);
        // navigate("/login");
      }else{
        toast.error(res.data.message);
      }

    } catch (error) {
        console.log(error);
        toast.error("something went wrong");
    }
  };
  console.log(process.env.REACT_APP_API);
  return (
    <Layout title={"Register"}>
      <div className="form-container">
        <h3>Register Page</h3>

        <form onSubmit={handleSummit}>
          <div className="mb-3">
            {/* <label htmlFor="exampleInputEmail1">Name</label> */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter Your Name"
              required
            />
          </div>

          <div className="mb-3">
            {/* <label htmlFor="exampleInputEmail1">Name</label> */}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="mb-3">
            {/* <label htmlFor="exampleInputEmail1">Name</label> */}
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <div className="mb-3">
            {/* <label htmlFor="exampleInputEmail1">Name</label> */}
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              placeholder="Enter Your Phone"
              required
            />
          </div>

          <div className="mb-3">
            {/* <label htmlFor="exampleInputEmail1">Name</label> */}
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-3">
            {/* <label htmlFor="exampleInputEmail1">Name</label> */}
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              placeholder="what is your favorite sport"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
