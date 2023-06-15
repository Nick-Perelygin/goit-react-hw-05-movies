import get from "../themoviedbAPI"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function Reviews () {
    const [reviews, setReviews] = useState([])
    const {id} = useParams()
    console.log(reviews)
    useEffect(() => {
        get.getReviewsMovies(id).then(r => setReviews(r.results))
    },[id]);

    return (
        <ul>
            {reviews && reviews.map(review => (
            <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
            </li>
            ))}
            {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
        </ul>
    )
}
