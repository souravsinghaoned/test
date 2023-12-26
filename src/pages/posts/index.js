import Link from "next/link";
function Posts({ posts }) {
    // console.log(posts)
    return (
        <>
            {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            <Link href={`posts/${post.id}`} passHref><p>{post.id}.{post.title}</p></Link>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Posts;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return {
        props: {
            posts: data.slice(0,3)
        }
    }
}