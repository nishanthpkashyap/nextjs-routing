import Link from "next/link"

export default function Product({productId = 100}: {productId: string | number}){
    return (
        <div className="flex justify-center items-center gap-[20px] flex-col">
            <Link href={"/"}>
                <h1>Home</h1>
            </Link>
            <Link href={"/product/1"}>
                <h2>Product 1</h2>
            </Link>
            <Link href={"/product/2"}>
                <h2>Product 2</h2>
            </Link>
            <Link href={"/product/3"} replace>
                <h2>Product 3</h2>
            </Link>
            <Link href={`/product/${productId}`}>
                <h2>Product {`${productId}`}</h2>
            </Link>
        </div>
    )
}