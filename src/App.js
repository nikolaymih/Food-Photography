import { Route, Switch } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import EditDetails from './components/EditDetails/EditDetails';
import AccountProfile from './components/AccountProfile/AccountProfile';
import AccountAddPicture from './components/AccountAddPicture/AccountAddPicture';
import AccountChangePassword from './components/AccountChangePassword/AccountChangePassword'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

import NotFound from './components/NotFound/NotFound';

import * as services from './components/services/services';
import AuthContext from './contexts/AuthContext'
import * as utils from './components/utils/isLoggedIn'

import './App.css';

function App() {
  let [user, setUser] = useState('');
  let [userEmail, setUserEmail] = useState('');
  const history = useHistory()

  useEffect(() => {
    let token = localStorage.getItem('token');
    let username = localStorage.getItem('user');

    if (token) {
      utils.isLoggedIn(token)
        .then(res => {
          if (res === false) {
            throw Error('Invalid Credentials')
          }
          setUser(res)
          setUserEmail(username)
        })
        .catch((err) => {
          services.logout()
          history.push('/auth/login')
          return
        })

    } else {

      history.push('/auth/login')
      return null
    }

  }, [])

  const userInfo = {
    isAuthenticated: user,
    username: userEmail
  }

  return (
    <div>

      <AuthContext.Provider value={userInfo}>
        <Header />

        <Switch>

          <Route path="/" exact render={() => {
            setUser(true)
            setUserEmail(localStorage.getItem('user'))
            return <Home />} }
             />
          <Route path="/account/profile" component={AccountProfile} exact />
          <Route path="/account/add-picture" component={AccountAddPicture} exact />
          <Route path="/account/change-password" component={AccountChangePassword} />

          <Route path="/contact" component={Contacts} />

          <Route path="/auth/login" render={() => {
            return <Login />
          }} exact />
          <Route path="/auth/register" component={Register} />
          <Route path="/auth/logout" render={() => {
            services.logout()
            setUser('')
            setUserEmail('')
            history.push('/auth/login')
            return null
          }} />

          <Route path="/image/details/:id" component={Details} />
          <Route path="/image/edit/:id" component={EditDetails} />

          <Route path="*" component={NotFound} />
        </Switch>

        <Footer />
      </AuthContext.Provider>

    </div>
  );
}

export default App;
