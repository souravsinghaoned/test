import { useState } from "react"


function CommentsPage(){
    const [comments, setComments] = useState([])
    const fetchComments = async () =>{
        const response = await fetch("http://localhost:3000/api/comments")
        const data = await response.json()
        setComments(data)
    }
    return(
        <div>
            <button onClick={fetchComments}>Load Comments</button>
            {
                comments.map((comment)=>{
                    return(
                        <div key={comment.id}>
                            <p>{comment.id}.{comment.text}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default CommentsPage;