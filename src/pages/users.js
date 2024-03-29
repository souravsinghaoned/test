import User from "@/components/user";
function Users({ users }) {
    console.log(users)
    return (
        <>
            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <User user={user}/>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Users;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
    return {
        props: {
            users: data
        }
    }
}