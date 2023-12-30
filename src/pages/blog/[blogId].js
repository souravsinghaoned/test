import Head from "next/head"
import { useRouter } from "next/router"

function Blog({ title, description }) {
    const route = useRouter()
    const blogId = route.query.blogId
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="Some name" content={description} />
            </Head>
            <p>This is blog page {blogId}</p>
        </>
    )
}
export default Blog

export async function getServerSideProps(){
    return{
        props : {
            title : "Blog page",
            description : "This is blog page"
        }
    }
}