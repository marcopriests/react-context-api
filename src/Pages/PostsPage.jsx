import React from 'react'
import PostsList from '../Components/PostsList'

const PostsPage = ({ posts }) => {
    console.log('------------PostsPage.jsx')
    console.log(posts)
    return (
        <div className='container p-5'>
            <h1 className='mb-5 fw-semibold'>Posts</h1>
            <PostsList posts={posts} />
        </div>
    )
}

export default PostsPage
