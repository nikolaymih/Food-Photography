import { useState, useEffect } from 'react';

import PersonalSettings from '../PersonalSettings/PersonalSettings';
import InputError from '../shared/InputError';

import * as services from '../services/services';


import './AccountAddPicture.css';

const AccountAddPicture = ({history}) => {
    let [messageError, setMessageError] = useState('');

    const onSubmitAddPictureHandler = (e) => {
        e.preventDefault()

        const { image, description } = e.target

        if (image.value.length == 0 || description.value.length == 0) {
            setMessageError('Fields can\'t be empty ')
            image.value = '';
            description.value = '';
            return null
        }

        services.createImg(image.value, description.value)
            .then(res => {
                if (res.ok != true) {
                    throw Error(res)
                }

                return res.json()
            })
            .then((image) => history.push('/'))
            .catch((err) => console.log(err))

        image.value = '';
        description.value = '';
    }

    return (
        <div className="wrappingPersonalSettings">
            <PersonalSettings />

            <div className="formsMenu">
                <section className="createPicture">
                    <form onSubmit={onSubmitAddPictureHandler}>
                        <fieldset className="orderFieldsetByColumn">
                            <legend>photogram</legend>
                            <p className="formHeaderCreateImage">
                                <h1>Add a new Picture</h1>
                            </p>
                            <InputError>{messageError}</InputError>
                            <p className="fieldCreatePet">
                                <label htmlFor="image">Image</label>
                                <span className="inputCreatePet">
                                    <input type="text" name="image" id="image" placeholder="Image" />
                                    <span className="actions"></span>
                                </span>
                            </p>
                            <p className="fieldCreatePet">
                                <label htmlFor="description">Description</label>
                                <span className="input">
                                    <textarea rows="4" cols="45" type="text" name="description" id="description"
                                        placeholder="Tell us something about the picture"></textarea>
                                    <span className="actions"></span>
                                </span>
                            </p>
                            <hr />
                            <span className="createImgButton">
                                <input className="button submit" type="submit" value="Add Image" />
                            </span>
                        </fieldset>
                    </form>
                </section>
            </div>

            <div className="thirdPosition" />
        </div>
    )
}

export default AccountAddPicture