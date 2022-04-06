import React from "react"

const Frame = ({ children }) => {
    return (
        <div>
            <p>Before children</p>
            { children }
        </div>
    )
}

export default Frame