import React from 'react'
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const navigate =useNavigate()
    return (
      <>
            <div>Order</div>
            <button onClick={()=>navigate(-1)}>Go back</button>
      </>
    );
}

export default Order