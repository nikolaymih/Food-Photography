import PersonalSettings from '../PersonalSettings/PersonalSettings';

import '../AccountAddPicture/AccountAddPicture.css';

const AccountChangePassword = () => {
    return (
        <main className="wrappingPersonalSettings">
            <PersonalSettings />

            <div className="formsMenu">
                <section className="createPicture">
                    <form >
                        <fieldset className="orderFieldsetByColumn">
                            <legend>lazygram</legend>
                            <p className="formHeaderCreateImage">
                                <h1>Change Password</h1>
                            </p>
                            <p className="fieldCreatePet">
                                <label htmlFor="password">Password</label>
                                <span className="inputChangePassword">
                                    <input type="password" name="password" id="password" placeholder="Type a new password" />
                                    <span className="actions"></span>
                                </span>
                            </p>
                            <p className="fieldCreatePet">
                                <label htmlFor="rePassword">Repeat password</label>
                                <span className="inputChangePassword">
                                    <input type="password" name="rePassword" id="rePassword" placeholder="Repeat the new password" />
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
        </main>
    )
}

export default AccountChangePassword