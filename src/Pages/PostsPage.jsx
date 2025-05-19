import React from 'react'
import PostsList from '../Components/PostsList'

const PostsPage = () => {
    console.log('------------PostsPage.jsx')
    return (
        <div className='container p-5'>
            <h1 className='mb-5 fw-semibold'>Posts</h1>
            <PostsList />
        </div>
    )
}

export default PostsPage
