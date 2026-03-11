import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">What Our 
      <span className="text-coral-red">Customers </span>
      Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear from our satisfied customers who have experienced the quality and style of our products. We take pride in delivering exceptional service and ensuring that our customers are happy with their purchases. Read their reviews and see why they love shopping with us!
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} 
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews