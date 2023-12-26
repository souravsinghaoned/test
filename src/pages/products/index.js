import Link from 'next/link';

function Product() {
    return (
        <div>
            <Link href="/">
                Home
            </Link>
            <h1>This is product page</h1>
            <h1>
                <Link href="/products/1" replace>
                    This is product 1
                </Link>
            </h1>
            <h1>
                <Link href="/products/2" replace>
                    This is product 2
                </Link>
            </h1>
            <h1>
                <Link href="/products/3">
                    This is product 3
                </Link>
            </h1>
        </div>
    )
}
export default Product;