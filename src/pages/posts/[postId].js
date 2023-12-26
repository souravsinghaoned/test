import { useRouter } from "next/router"



function Post({post}){
    const router = useRouter()
    if(router.isFallback){
        <>Loading ...</>
    }
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
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data = await response.json()
    // const paths = data.map(post =>{
    //     return{
    //         params : {
    //             postId : `${post.id}`
    //         }
    //     }
    // })
    // console.log(paths)
    return{
        paths : [
            {
                params : {postId : '1'},
            },
            {
                params : {postId : '2'},
            },
            {
                params : {postId : '3'},
            },
        ],
        // paths,
        fallback : "blocking",
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