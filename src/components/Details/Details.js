import PersonalSettings from '../PersonalSettings/PersonalSettings';

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';

import * as services from '../services/services';

import './Details.css';

const Details = ({
    match
}) => {
    let [image, setImage] = useState([]);
    let [canDelete, setCanDelete] = useState('')
    let history = useHistory()

    useEffect(() => {
        let imageId = match.params.id

        services.getOneImage(imageId)
            .then((imageData) => {
                setCanDelete(Boolean(imageData.userId))
                setImage(imageData)
            })
            .catch((err) => console.log(err))
    }, [])

    const onDeletehandler = () => {
        services.deleteOne(image._id)
            .then(() => {
                history.push('/');
                return null
            })
    }

    return (
        <section className="detailsWrapper">

            <PersonalSettings />

            <section className="detailsMiddlePositioned">
                <span>
                    <p><h3>{image.username}</h3></p>
                </span>
                <img className="detailsImg" src={image.image} alt="No pic for now" />
                <p><h3>Description: {image.description}</h3></p>
                <h3 >Likes: 20</h3>

                {canDelete
                    ? <>
                        <Link to={`/image/edit/${image._id}`} style={{ textDecoration: 'none' }}><h3 >Edit</h3></Link>
                        <Link style={{ textDecoration: 'none' }} onClick={onDeletehandler}><h3>Delete</h3></Link>
                    </>
                    : null
                }
            </section>

            <section className="detailsEmptySection" />

        </section>
    )
}

export default Details