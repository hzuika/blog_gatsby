// React のインポート． .js ファイル内で JSX を使用できる．
import React from "react"
import { Link } from "gatsby"

// React コンポーネントを定義して他の場所で使用できるようにエクスポート．
// コンポーネント名は大文字で始める．
const Home = () => {
    // JSX element を返す (複数は不可能，入れ子は可能)
    return (
        <main>
            <title>Home Page</title>
            <h1>Hello Gatsby!</h1>
            <Link to="/about">About</Link>
        </main>
    )
}

export default Home