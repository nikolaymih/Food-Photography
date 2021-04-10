/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from 'react-router-dom';

const SinglePhoto = ({
    _id,
    description,
    image,
    username
}) => {
    return (
        <div className="individualSectionWrapper">
            <span>
                <p><h1>{username}</h1></p>
            </span>
            <Link to={`/image/details/${_id}`}><img className="actualImg" src={image} alt="No image" /></Link>
            <p className="descriptionImg">Description: {description}</p>
            <h2 className="imgLikes">Likes: 20</h2>
        </div>
    )
}

export default SinglePhoto