import PersonalSettings from '../PersonalSettings/PersonalSettings';
import InputError from '../shared/InputError';

import * as services from '../services/services';

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './EditDetails.css'

const EditDetails = ({
    match
}) => {
    let [prevInfo, setPrevInfo] = useState([]);
    let [messageError, setMessageError] = useState('')
    const history = useHistory();

    useEffect(() => {
        let imageId = match.params.id

        services.getOneImage(imageId)
            .then((imageData) => {
                setPrevInfo(imageData)
            })
            .catch((err) => console.log(err))
    }, [])

    const onSubmitEditPictureHandler = (e) => {
        e.preventDefault()

        let {image, description} = e.target;

        if (image.value.length == 0 || description.value.length == 0) {
            setMessageError('Fields can\'t be empty ')
            return null
        }

        let updateImage = {
            image: image.value,
            description: description.value
        }

        services.updateOne(updateImage, match.params.id )
            .then((res) => history.push(`/image/details/${prevInfo._id}`) )
            .catch((err) => console.log(err))
    }

    return (
        <div className="wrappingPersonalSettings">
            <PersonalSettings />

            <div className="formsMenu">
                <section className="createPicture">
                    <form onSubmit={onSubmitEditPictureHandler}>
                        <fieldset className="orderFieldsetByColumn">
                            <legend>photogram</legend>
                            <p className="formHeaderCreateImage">
                                <h1>Edit the picture</h1>
                            </p>
                            <InputError>{messageError}</InputError>
                            <p className="fieldCreatePet">
                                <label htmlFor="image">Image</label>
                                <span className="inputCreatePet">
                                    <input type="text" name="image" id="image" defaultValue={prevInfo.image} placeholder="Image" />
                                    <span className="actions"></span>
                                </span>
                            </p>
                            <p className="fieldCreatePet">
                                <label htmlFor="description">Description</label>
                                <span className="input">
                                    <textarea rows="4" cols="45" type="text" name="description" id="description"
                                        placeholder="Tell us something about the picture" defaultValue={prevInfo.description}></textarea>
                                    <span className="actions"></span>
                                </span>
                            </p>
                            <hr />
                            <span className="createImgButton">
                                <input className="button submit" type="submit" value="Edit the picture" />
                            </span>
                        </fieldset>
                    </form>
                </section>
            </div>

            <div className="thirdPosition" />
        </div>
    )
}

export default EditDetails