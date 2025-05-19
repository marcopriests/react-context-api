import React from 'react'

const PostCard = ({ post }) => {
    return (
        <div className="card mb-3 shadow border-0">
            <div className="card-header border-0">
                <h5 className="card-title">{post.title}</h5>
            </div>
            <div className="card-body">
                <p className="card-text">{post.content}</p>
                <div className="badge text-bg-primary">{post.category}</div>
            </div>
        </div>
    )
}

export default PostCard
