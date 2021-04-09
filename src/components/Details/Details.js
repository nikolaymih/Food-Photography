import PersonalSettings from '../PersonalSettings/PersonalSettings';

import { useState, useEffect } from 'react';

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

    }, [])

    return (
        <section className="detailsWrapper">

            <PersonalSettings />

            <section className="detailsMiddlePositioned">
                <span>
                    <p><h3>Creator: Coming soon</h3></p>
                </span>
                <img className="detailsImg" src={image.image} alt="No pic for now" />
                <p className=""><h3>Description: {image.description}</h3></p>
                <h3 className="">Likes: 20</h3>
                <h3 className="">Edit</h3>
                <h3 className="">Delete</h3>
            </section>

            <section className="detailsEmptySection" />

        </section>
    )
}

export default Details