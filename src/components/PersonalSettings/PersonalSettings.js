import { Link } from 'react-router-dom';

import './PersonalSettings.css'

const PersonalSettings = () => {
    return (
        <section className="PersonalSettings">
            <div className="fixedPosition">
                <h2><Link to="/">Home</Link></h2>
                <h2><Link to="/account/profile">My Account</Link></h2>
                <h2><Link to="/account/add-picture">Add a picture</Link></h2>
                <h2><Link to="/account/change-password">Change Password</Link> </h2>
                <h2><Link to="/contact">Contact</Link></h2>
                <h2><Link to="/auth/logout">Logout</Link></h2>
            </div>
        </section>
    )
}

export default PersonalSettings