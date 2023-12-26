function Post({post}){
    return(
        <div>
            <p>{post.id}.{post.title}</p>
            <hr/>
            <p>{post.body}</p>
        </div>
    )
}
export default Post
export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    const paths = data.map(post =>{
        return{
            params : {
                postId : `${post.id}`
            }
        }
    })
    return{
        paths,
        fallback : false,
    }
}
export async function getStaticProps(context) {
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    console.log(data)
    return {
        props: {
            post: data
        }
    }
}