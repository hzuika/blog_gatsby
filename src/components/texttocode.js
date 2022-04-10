import React, { useState, useEffect } from "react";

const FetchCode = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      // "https://raw.githubusercontent.com/hzuika/blog_gatsby/main/.gitignore",
      "https://gist.githubusercontent.com/hzuika/b9c5040b69451fd348ef2a70e6f81977/raw/fdc4b4f5c024d2213f51a9d89b8a6a3f0140e51d/console_log.js",
      { method: "GET" }
    )
      .then((res) => res.text())
      .then((resData) => setData(resData))
      .catch((error) => console.error(error));
  }, []);
  console.log("data", data);
  return (
    <pre>
      <code className="language-js">{data}</code>
    </pre>
  );
};

export default FetchCode;
