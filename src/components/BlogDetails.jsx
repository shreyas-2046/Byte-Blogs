import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='w-11/12 max-w-2xl mx-auto'>
        <NavLink to={`/blog/${post.id}`}>
        <span>{post.title}</span>
        </NavLink>
        <p>
            By 
            <span>{post.author} </span>
            on{" "}
            <NavLink to={`/categories/${post.category.replaceAll("  ","-")}`}>
                <span>{post.category}</span>
            </NavLink>
        </p>
        <p>Posted On {post.date}</p>
        <p>{post.content}</p>
        <div>
            {post.tags.map((tag,index)=>(
                <NavLink key={index} to={`tags/${tag.replaceAll(" ","-")}`}>
                    <span>#{tag}</span>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default BlogDetails