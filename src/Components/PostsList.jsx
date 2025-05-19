import React from 'react'
import PostCard from './PostCard'
import { useContext } from 'react'
import PostsContext from '../Contexts/PostsContext'

const PostsList = () => {
    console.log('---------PostsList.jsx')

    const { posts } = useContext(PostsContext)

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
