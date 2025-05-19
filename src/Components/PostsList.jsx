import React from 'react'
import PostCard from './PostCard'

const PostsList = ({ posts }) => {
    console.log('---------PostsList.jsx')
    console.log(posts)
    return (
        <>
            {posts.map((post) => {
                return <PostCard post={post} key={post.id} />
            })}
        </>
    )
}

export default PostsList
