type ProductReviewDetails = {
    params: {
        productId: string,
        reviewId: string
    }
}

export default function ProductReviewDetails({params: {productId, reviewId}}: ProductReviewDetails){
    return (
        <div className="flex justify-center items-center gap-[20px] flex-col">
            <h1>Review {reviewId} for Product {productId}</h1>
        </div>
    )
}