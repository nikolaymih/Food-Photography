import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

import './Header.css';

const Header = () => {
    let { isAuthenticated, username } = useContext(AuthContext);

    useEffect(() => {
        if (!isAuthenticated) {
            return
        }
    })

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-left">
                    <div className="left-logged">

                        {isAuthenticated
                            ? <Link className="button" to="/">lazygram</Link>
                            : null
                        }

                    </div>

                </section>

                <section className="navbar-rightL">
                    <div className="right-logged">
                        {isAuthenticated
                            ? <Link to="/">Hello, {username}</Link>
                            : null
                        }
                    </div>
                </section>

                <section className="navbar-right">
                    <div className="annonymous">
                        {!isAuthenticated
                            ? 
                            <>
                                <Link className="button" to='/auth/login'>Login</Link>
                                <Link className="button" to='/auth/register'>Register</Link>
                            </>
                            : null
                        }

                    </div>
                </section>
            </nav>
            <div className="spacer"></div>
        </header>
    )
}

export default Header