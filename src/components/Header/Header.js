import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-left">
                    <div className="left-logged">
                        <Link to="/">Home</Link>
                        <Link to="/add-picture">Add picture</Link>
                    </div>

                </section>

                <section className="navbar-rightL">
                    <div className="right-logged">
                        <Link to="/">Hello, Vanka</Link>
                        <Link to="/">Logout</Link>
                    </div>
                </section>

                <section className="navbar-right">
                    <div className="annonymous">
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </div>
                </section>
            </nav>
        </header>
    )
}

export default Header