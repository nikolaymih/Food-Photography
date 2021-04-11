import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import * as services from '../services/services';

import SinglePhoto from './SinglePhoto/SinglePhoto';

import './CardPhotos.css'

const CardPhotos = ({
    match
}) => {
    let [images, setImages] = useState([])
    let history = useHistory()
    let seedIds = []

    useEffect(() => {

        services.getFirstTen()
            .then(res => {
                return setImages(res)
            })
            .catch(() => {
                console.log('test')
                return null
            })
    }, [])

    const onScrollHandler = () => {
        images.forEach((singleImage) => {
            seedIds.push(singleImage._id)
        })
        
        services.loadTenMoreImages(seedIds)
            .then((res) => {
                setImages(res)
                window.scrollTo(0, 0);
            })
    }

    return (
        <section className="CardPhotos">
            <div className="sectionWrapper">
                {images ? images.map(x =>
                    <SinglePhoto key={x.id} {...x} />
                ) : null}
                <div style={{ textAlign: "center" }} onClick={onScrollHandler}>Click to load more resources...</div>
            </div>
        </section >
    )
}

export default CardPhotos

