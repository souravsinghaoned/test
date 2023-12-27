import useSWR from "swr";

const fetcher = async () => {
    const response = await fetch("http://localhost:4000/dashboard")
    const data = await response.json()
    return data
}

function DashboardSWR() {
    const { data, error } = useSWR("dashboard", fetcher)

    if (error) {
        return (<>Error</>)
    }
    if (!data) {
        return (<>Loading ...</>)
    }
    return (
        <div>
            This is dashboard.
            <p>Posts : {data.post}</p>
            <p>Links : {data.links}</p>
            <p>Following : {data.following}</p>
            <p>Followers : {data.followers}</p>
        </div>
    )
}
export default DashboardSWR;