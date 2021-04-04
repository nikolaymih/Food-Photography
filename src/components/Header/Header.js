import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-left">
                    <div className="left-logged">
                        <Link className="button" to="/">lazygram</Link>
                    </div>

                </section>

                <section className="navbar-rightL">
                    <div className="right-logged">
                        <Link to="/">Hello, Vanka</Link>
                    </div>
                </section>

                <section className="navbar-right">
                    <div className="annonymous">
                        <Link className="button" to='/auth/login'>Login</Link>
                        <Link className="button" to='/auth/register'>Register</Link>
                    </div>
                </section>
            </nav>
                <div className="spacer"></div>
        </header>
    )
}

export default Header