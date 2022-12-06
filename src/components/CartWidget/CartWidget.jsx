import "./CartWidget.module.css"
import React from 'react';
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
  <Link to='/cart'>
  🛒
  </Link>

      
      <span className="p-5"></span>
      <span>{5}</span>
    </div>
  );
};

export default CartWidget;
