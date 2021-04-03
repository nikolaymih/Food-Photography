import PersonalSettings from '../PersonalSettings/PersonalSettings';

import './AccountProfile.css';

const AccountProfile = () => {
    return (
        <div className="wrappingAccountProfile">
            <PersonalSettings />
            <div className="flexOrderPersonalSettingsAndAccountSettings">
                <h1>My Profile</h1>
                <span className="fitImgWithAccountInfo">
                    <img className="resizeImg" src="https://scontent.fsof8-1.fna.fbcdn.net/v/t1.6435-9/158900682_3954884447866796_2198572172287358462_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_ohc=URFAZ_aHA94AX9A8orU&_nc_ht=scontent.fsof8-1.fna&oh=a6df53d3f0e20315cb0de7c70e7efc42&oe=608C4719" alt="Nothing to display" />
                    <span className="setCertainPointsForNewLines">
                        <h2>Nikolay11</h2>
                        <button >Folow</button>
                        <h3 className="break">Posts: 200</h3>
                        <h3>Subscribers: 10000</h3>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default AccountProfile