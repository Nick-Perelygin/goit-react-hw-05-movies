import get from "../../../components/themoviedbAPI"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function Reviews () {
    const [reviews, setReviews] = useState([])
    const {id} = useParams()
    
    useEffect(() => {
        get.getReviewsMovies(id).then(r => setReviews(r.results)).catch(err => alert(`${err}`));
    },[id]);

    return (
        <>
            <ul>
                {reviews && reviews.map(review => (
                <li key={review.id}>
                    <p>Author: {review.author}</p>
                    <p>{review.content}</p>
                </li>
            ))}
            </ul>
            {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
        </>
    )
}