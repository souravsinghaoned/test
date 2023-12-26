import { useRouter } from "next/router"



function Product(){
    const route = useRouter()
    // console.log(route)
    const productId = route.query.productId
    return(
        <div>This is product {productId}</div>
    )
}
export default Product;