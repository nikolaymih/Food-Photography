import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AccountProfile from './components/AccountProfile/AccountProfile';
import AccountAddPicture from './components/AccountAddPicture/AccountAddPicture';
import AccountChangePassword from './components/AccountChangePassword/AccountChangePassword'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

import './App.css';


function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/account/profile" component={AccountProfile} exact />
        <Route path="/account/add-picture" component={AccountAddPicture} exact/>
        <Route path="/account/change-password" component={AccountChangePassword} />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Register} />
        <Route path="/auth/register" component={AccountChangePassword} />
        <Route path="/contact" component={Contacts} />

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
