import PersonalSettings from '../PersonalSettings/PersonalSettings';

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import * as services from '../services/services';

import './Details.css';

const Details = ({
    match
}) => {
    let [image, setImage] = useState([]);

    useEffect(() => {
        let imageId = match.params.id

        services.getOneImage(imageId)
            .then((imageData) => {
                console.log(imageData)
                return setImage(imageData)
            })
            .catch((err) => console.log(err))
    }, [])

    const onDeletehandler = () => {
        services.deleteOne(image._id)
    }

    return (
        <section className="detailsWrapper">

            <PersonalSettings />

            <section className="detailsMiddlePositioned">
                <span>
                    <p><h3>Creator: Coming soon</h3></p>
                </span>
                <img className="detailsImg" src={image.image} alt="No pic for now" />
                <p><h3>Description: {image.description}</h3></p>
                <h3 >Likes: 20</h3>
                <Link style={{ textDecoration: 'none' }}><h3 >Edit</h3></Link>
                <Link style={{ textDecoration: 'none' }} onClick={onDeletehandler}><h3>Delete</h3></Link>
            </section>

            <section className="detailsEmptySection" />

        </section>
    )
}

export default Details