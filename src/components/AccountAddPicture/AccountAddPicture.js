import PersonalSettings from '../PersonalSettings/PersonalSettings';
import * as services from '../services/services';

import './AccountAddPicture.css';

const AccountAddPicture = () => {

    const onSubmitAddPictureHandler = (e) => {
        e.preventDefault()

        const { image, description } = e.target

        services.createImg(image.value, description.value)
            .then(res => {
                if(res.ok != true) {
                    throw Error(res)
                }
                
                return res.json()
            })
            .then((image) => console.log(image))
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
                            <legend>lazygram</legend>
                            <p className="formHeaderCreateImage">
                                <h1>Add a new Picture</h1>
                            </p>
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
                                <input className="button submit" type="submit" value="Add Pet" />
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