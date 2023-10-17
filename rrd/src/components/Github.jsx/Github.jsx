import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  //   const [data, setData] = useState({});

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/vineet-op")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);

  const data = useLoaderData();
  return (
    <div className="text-center text-orange-400 text-3xl bg-green-400">
      Github Followers {data.followers}
      <img src={data.avatar_url} alt="Git" width={300} />
    </div>
  );
};

export default Github;

export const Githubinfo = async () => {
  const res = await fetch("https://api.github.com/users/vineet-op");
  return res.json();
};
