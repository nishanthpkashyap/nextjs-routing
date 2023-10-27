type ProductDetails = {
    params: {
        productId: string
    }
}

export default function ProductDetails({params: {productId}}: ProductDetails){
    return (
        <div className="flex justify-center items-center gap-[20px] flex-col">
            <h1>Detail about Product {productId}</h1>
        </div>
    )
}