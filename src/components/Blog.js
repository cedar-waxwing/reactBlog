import React from "react"
import blogData from "./blogData.json"


function Blog(props) {
    const pTagArr = blogData.map((blogPost, index) => {
        return <p key={index}>
            {blogPost.title} <br></br>
            {blogPost.post}
        </p>
    })
    return (
        <div className="row">
            <div className="col">
                    {pTagArr}
            </div>
        </div>
    )
}


export default Blog

