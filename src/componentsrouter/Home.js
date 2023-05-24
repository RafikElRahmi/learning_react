import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Home</div>
      <button onClick={()=> navigate('/order')}>click me to order</button>
    </>
  );
}

export default Home