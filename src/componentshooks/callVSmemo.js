import React, { useCallback, useMemo } from 'react'
// use to save result in cache so we wont calculate 
const hi = useMemo(() => {
  return a;
}, []);
//use to save function in cache so we dont rerender 
const bye = useCallback(() => {
  return a;
},[]);