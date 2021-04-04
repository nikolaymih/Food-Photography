import { Link } from 'react-router-dom';

import './PersonalSettings.css'

const PersonalSettings = () => {
    return (
        <section className="PersonalSettings">
            <div className="fixedPosition">
                <h1><Link to="/">Home</Link></h1>
                <h1><Link to="/account/profile">My Account</Link></h1>
                <h1><Link to="/account/add-picture">Add a picture</Link></h1>
                <h1><Link to="/account/change-password">Change Password</Link> </h1>
                <h1><Link to="/account/contact">Contact</Link></h1>
                <h1><Link to="/account/logout">Logout</Link></h1>
            </div>
        </section>
    )
}

export default PersonalSettings