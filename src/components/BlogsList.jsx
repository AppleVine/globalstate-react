import { useReducer } from "react";

const initialBlogData = [
    {
        id: 1,
        title: "default blog post",
        content: "create some content here"
    }
]


const blogReducer = (previousState, instructions) => {

    let stateEditable = [...previousState];

    switch(instructions.type){
        case "update":
            // do some update to previous state.
            // return the result.
            return previousState;
        case "delete":
            //do some delete or filter on previous state.
            // copy of existing state as we can't modify directly.

            stateEditable = [...previousState];
            let targetBlog = instructions.blogIdToDelete;
            // return the result.
            return stateEditable.filter(blog => blog.id !== targetBlog);
        case "create":
            // add some data to the previous state.
            // return the result;
            return previousState;
        default:
            return previousState;
    }

    // return [
    //     {
    //         id: 1,
    //         title: "some title",
    //         content: "some content goes here"
    //     }
    // ]
}

export default function BlogsList(props){
    const [blogState, blogDispatch] = useReducer(blogReducer, initialBlogData);

    return (
        <div>
            <h1>Blog posts:</h1>
            {blogState.map((blogPost) => {
                // <BlogIndividualDisplay />

                return( <div key={blogPost.id}>
                            <h1>{blogPost.title}</h1>
                            <p>{blogPost.content}</p>
                            <button onClick={() => blogDispatch({type: "delete", blogIdToDelete: blogPost.id})}>Delete blog post</button>
                        </div>)

            })}
        </div>
    )


}