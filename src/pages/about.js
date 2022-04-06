// ファイル名 がURLのパスになる．
import React from "react"
import { Link } from "gatsby"
import Frame from "../components/frame"

// props でタグの引数を使用できる．
const Greeting = (props) => {
    return (
        <p>Hi {props.name}!</p>
    )
}

const AboutPage = () => {
    return (
        <main>
            <title>New Page</title>
            <h1>About Me</h1>
            <Link to="/">Home</Link>
            <div>
                <Greeting name="Taro" />
                <Greeting name="Hanako" />
            </div>
            <Frame>
                <p>This will be bassed in as children</p>
            </Frame>
        </main>
    )
}

export default AboutPage