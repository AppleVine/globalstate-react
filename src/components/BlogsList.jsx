import { useContext, useReducer } from "react";
import { BlogDataContext, BlogDispatchContext, useBlogDispatch, useBlogData } from "./BlogsContextComponent";

export default function BlogsList(props){
    
    // const blogsData = useContext(BlogDataContext)
    // const blogsDispatch = useContext(BlogDispatchContext)

    const blogsData = useBlogData();
    const blogsDispatch = useBlogDispatch();

    return (
        <div>
            <h1>Blog posts:</h1>
            {blogsData.map((blogPost) => {
                // <BlogIndividualDisplay />

                return( <div key={blogPost.id}>
                            <h1>{blogPost.title}</h1>
                            <p>{blogPost.content}</p>
                            <button onClick={() => blogsDispatch({type: "delete", blogIdToDelete: blogPost.id})}>Delete blog post</button>
                        </div>)

            })}
        </div>
    )


}