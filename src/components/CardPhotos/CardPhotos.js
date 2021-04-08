import { useState, useEffect } from 'react';

import * as services from '../services/services';

import SinglePhoto from './SinglePhoto/SinglePhoto';

import './CardPhotos.css'

const CardPhotos = ({
}) => {
    let [images, setImages] = useState([])
    let [username, setUser] = useState([])

    useEffect(() => {
        const username = localStorage.getItem('user');

        services.getFirstTen()
            .then(res => {
                return setImages(res)
            })
    }, [])

    return (
        <section className="CardPhotos">
            <div className="sectionWrapper">

                {images ? images.map(x =>
                    <SinglePhoto key={x.id} {...x} />
                ) : null}

            </div>
        </section >
    )
}

export default CardPhotos

