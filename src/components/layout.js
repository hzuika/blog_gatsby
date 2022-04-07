import React from "react"
import { Link } from "gatsby"
import { 
    container, 
    heading, 
    navLinks, 
    navLinkItem, 
    navLinkText 
} from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {
    // 引数を props にして，次のように書くことと同じ．
    // const pageTitle = props.pageTitle
    // const children = props.children
    return (
        <div className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout