import React from "react";
import Layout from "../../components/Layout";
import UserMenu from "../../components/Routs/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth]=useAuth()
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
       
   <div className='container-fluid p-3 m-3'>
    <div className='row'>
        <div className='col-md-3 border-end border-5'><UserMenu/></div>
        <div className='col-md-9'>
          <div className="card w-75 p-3">
            <h3>Name : {auth?.user?.name}</h3>
            <h3>Email : {auth?.user?.email}</h3>
            <h3>Address : {auth?.user?.address}</h3>
          </div>

          </div>

    </div>
   </div>

    
    </Layout>
  );
};

export default Dashboard;