import { useState } from "react";

const UserFn = (props) => {
  const { name, location, contact } = props;

  const [count,setCount] = useState(0);
  const [count2] = useState(1);




  return (
    <div className="user-card-fn">
      <div>
        <h1>Count : {count}</h1>
        <button onClick={() => {
          setCount (count+ 1);
        }}>Increase Count</button>
        <h1>Count2 : {count2}</h1>
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h2>Contact :{contact}</h2>
      </div>
    </div>
  );
};
export default UserFn;
