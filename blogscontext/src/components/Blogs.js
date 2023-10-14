import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaSpinner } from "react-icons/fa";


function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <FaSpinner />
      ) : posts.length === 0 ? (
        <p>No Blog Found</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>By <span>{post.author}</span> on <span>{post.category}</span> </p>
            <p>Posted On {post.date}</p>
            <p>{post.content}</p>
            <div>
                {
                    post.tags.map((tag,index)=>{
                        return <span key={index}> {`#${tag}`}</span>
                    })
                }
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Blogs;
