// ファイル名 がURLのパスになる．
import React from "react"
import Frame from "../components/frame"
import Layout from "../components/layout"

// props でタグの引数を使用できる．
const Greeting = (props) => {
    return (
        <p>Hi {props.name}!</p>
    )
}

const AboutPage = () => {
    return (
        <Layout pageTitle="New Page">
            <h1>About Me</h1>
            <div>
                <Greeting name="Taro" />
                <Greeting name="Hanako" />
            </div>
            <Frame>
                <p>This will be bassed in as children</p>
            </Frame>
        </Layout>
    )
}

export default AboutPage