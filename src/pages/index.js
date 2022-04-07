// React のインポート． .js ファイル内で JSX を使用できる．
import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// React コンポーネントを定義して他の場所で使用できるようにエクスポート．
// コンポーネント名は大文字で始める．
const Home = () => {
  // JSX element を返す (複数は不可能，入れ子は可能)
  return (
    <Layout pageTitle="Home Page">
      <h1>Hello Gatsby!</h1>
      <StaticImage alt="Altanative text." src="../images/logo64.png" />
    </Layout>
  );
};

export default Home;
