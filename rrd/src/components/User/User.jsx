import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();

  return <div className="flex">User: {userid} </div>;
};

export default User;
