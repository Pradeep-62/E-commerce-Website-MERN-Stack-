import React from 'react'
import { NavLink } from 'react-router-dom'

export const AdminManu = () => {
  return (
    <>
    <div className='text-center'>

<div className="list-group">
    <h4>Admin Panal</h4>
  <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action" >
    Creat category
  </NavLink>
  <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">Creat Product</NavLink>
  <NavLink to="/dashboard/admin/products" className="list-group-item list-group-item-action">Products</NavLink>
  <NavLink to="/dashboard/admin/orders" className="list-group-item list-group-item-action">Order's</NavLink>
  
  
</div>
    </div>

    </>
  )
}
