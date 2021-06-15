import React from "react"

const Button = ({ onLoadMore}) => (
    <button type="button" className="Button" onClick={onLoadMore}> Load More</button>
)

export default Button