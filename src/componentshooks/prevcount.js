import React, { useEffect, useState } from 'react'

const Prevcount = () => {
    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(hi => hi +1);
    }
    useEffect(() => {
      const interval = setInterval(tick, 1000);
        return () => {
          clearInterval(interval);
      }
    }, );
  return (
    <div>{count}</div>
  )
}

export default Prevcount