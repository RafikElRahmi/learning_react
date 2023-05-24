import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";
const Callback = () => {
  const [age, setAge] = useState(25);
  const addage = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const [Salary, setSalary] = useState(7500);
  const addSalary = useCallback(() => {
    setSalary(Salary + 500);
  }, [Salary]);
  return (
    <div>
      <Title />
      <Count count={age}>age is : </Count>
      <Button handleclick={addage}>add age</Button>
      <Count count={Salary}>salary is : </Count>
      <Button handleclick={addSalary}>add salary</Button>
    </div>
  );
};

export default Callback;
