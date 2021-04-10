import PersonalSettings from '../PersonalSettings/PersonalSettings';

import '../AccountAddPicture/AccountAddPicture.css';


const Contacts = () => {
    return (
        <main className="wrappingPersonalSettings">
            <PersonalSettings />

            <div className="formsMenu">
                <section className="createPicture">
                    <form >
                        <fieldset className="orderFieldsetByColumn">
                            <legend>lazygram</legend>
                            <p className="formHeaderCreateImage">
                                <h1>Submit a problem</h1>
                            </p>
                            <p className="fieldCreatePet">
                                <label htmlFor="password">Type your Email</label>
                                <span className="inputChangePassword">
                                    <input type="email" name="password" id="password" placeholder="Type your email" />
                                    <span className="actions"></span>
                                </span>
                            </p>
                            <p className="fieldCreatePet">
                                <label htmlFor="description">Description</label>
                                <span className="input">
                                    <textarea rows="4" cols="45" type="text" name="description" id="description"
                                        placeholder="Tell us about your problem and we will contact you further!"></textarea>
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
        </main>
    )   
}

export default Contacts