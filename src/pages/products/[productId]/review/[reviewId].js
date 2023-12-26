import { useRouter } from "next/router"



function Reviwe(){
    const route = useRouter()
    // console.log(route)
    const reviewId = route.query.reviewId
    return(
        <div>Reviwe for product {reviewId}</div>
    )
}
export default Reviwe;