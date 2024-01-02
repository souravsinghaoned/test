import { getSession, signIn, signOut, useSession } from "next-auth/react"

function First({ data }) {

    return (
        <h1>{data}</h1>
    )
}
export default First;

export async function getServerSideProps(context) {
    const session = await getSession(context)
    console.log(session)
    if(!session){
        return{
            redirect :{
                destination : '/api/auth/signin?callbackUrl=http://localhost:3000/blog/first',
                permanent : false
            }
        }
    }
    return {
        props: {
            data: session ? "This is secured data." : "this is public data."
        }
    }
}