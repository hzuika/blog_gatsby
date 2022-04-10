import React, { useEffect, useState } from "react";
import Layout from "../components/layout";

const Index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/hzuika/blog_gatsby/main/.gitignore",
      { method: "GET" }
    )
      .then((res) => res.text())
      .then((resData) => setData(resData))
      .catch((error) => console.error(error));
  }, []);

  return <Layout>{data}</Layout>;
};

export default Index;
