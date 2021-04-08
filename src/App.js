import { Route, Switch } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AccountProfile from './components/AccountProfile/AccountProfile';
import AccountAddPicture from './components/AccountAddPicture/AccountAddPicture';
import AccountChangePassword from './components/AccountChangePassword/AccountChangePassword'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

import NotFound from './components/NotFound/NotFound';

import './App.css';



function App() {
  return (
    <div>
      <Header />
      
        <Switch>
          
          <ProtectedRoute path="/" exact component={Home} />
          <ProtectedRoute path="/account/profile" component={AccountProfile} exact />
          <ProtectedRoute path="/account/add-picture" component={AccountAddPicture} exact />
          <ProtectedRoute path="/account/change-password" component={AccountChangePassword} />
          <ProtectedRoute path="/contact" component={Contacts} />

          <Route path="/auth/login" component={Login} exact />
          <Route path="/auth/register" component={Register} />

          <Route path="*" component={NotFound} />
        </Switch>
      

      <Footer />
    </div>
  );
}

export default App;
