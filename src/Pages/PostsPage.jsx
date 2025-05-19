import React from 'react'
import PostsList from '../Components/PostsList'

const PostsPage = ({ posts }) => {
    return (
        <div className='container p-5'>
            <h1>Posts</h1>
            <PostsList posts={posts} />
        </div>
    )
}

export default PostsPage
