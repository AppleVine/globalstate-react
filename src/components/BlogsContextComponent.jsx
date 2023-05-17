import { createContext, useContext, useReducer } from "react";

const initialBlogData = [
    {
        id: 1,
        title: "Default Blog Post",
        content: "Create more content"
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
            console.log("Invalid instruction type recieved, it was " + instructions.type)
            return previousState;
    }
}

export const BlogDataContext = createContext(null);
export const BlogDispatchContext = createContext(null);

export function useBlogData() {
    return useContext(BlogDataContext);
}

export function useBlogDispatch(){
    return useContext(BlogDispatchContext)
}

export default function BlogsProvider(props) {
    const [blogsData, blogsDispatch] = useReducer(blogReducer, initialBlogData);

    return(
        <BlogDataContext.Provider value={blogsData}>
            <BlogDispatchContext.Provider value={blogsDispatch}>
                {props.children}
            </BlogDispatchContext.Provider>
        </BlogDataContext.Provider>
    )
}

