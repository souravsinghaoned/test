import { useEffect, useState } from "react";
import { getSession} from "next-auth/react";


function Dashboard() {
    const [isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState(null)
    useEffect(() => {
        async function fetchDashboardData() {
            const response = await fetch("http://localhost:4000/dashboard")
            const data = await response.json()
            setDashboardData(data)
            setIsLoading(false)
        }
        fetchDashboardData()
    }, [])
    if (isLoading) {
        return (
            <>Loading ...</>
        )
    }
    return (
        <div>
            This is dashboard.
            <p>Posts : {dashboardData.post}</p>
            <p>Links : {dashboardData.links}</p>
            <p>Following : {dashboardData.following}</p>
            <p>Followers : {dashboardData.followers}</p>
        </div>
    )
}
export default Dashboard;