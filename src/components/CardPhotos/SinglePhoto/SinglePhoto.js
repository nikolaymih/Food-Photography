/* eslint-disable jsx-a11y/img-redundant-alt */

const SinglePhoto = ({
    _id,
    description,
    idCreator,
    image,
    username
}) => {
    return (

        

                <div className="individualSectionWrapper">
                    <span>
                        <p>Creator: {username}</p>
                    </span>
                    <img className="actualImg" src={image} alt="No image" />
                    <p className="descriptionImg">Description: {description}</p>
                    <h2 className="imgLikes">Likes: 20</h2>
                </div>

            
    )
}

export default SinglePhoto