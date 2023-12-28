import { useState } from "react"


function CommentsPage() {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState("")
    const fetchComments = async () => {
        const response = await fetch("http://localhost:3000/api/comments")
        const data = await response.json()
        setComments(data)
    }

    const handleSubmitButton = async () => {
        const response = await fetch("api/comments", {
            method: "POST",
            body: JSON.stringify({ comment }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
        fetchComments()
    }

    const deleteCommnet = async (commentId) => {
        const response = await fetch(`api/comments/${commentId}`, {
            method: "DELETE"
        })
        const data = await response.json()
        console.log(data)
    }

    return (
        <div>
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Write some comments"></input>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleSubmitButton}>Submit Button</button>
            <hr />
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"onClick={fetchComments}>Load Comments</button>
            {
                comments.map((comment) => {
                    return (
                        <div key={comment.id}>
                            <p>{comment.id}.{comment.text}</p>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => deleteCommnet(comment.id)}>Delete Comment</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default CommentsPage;