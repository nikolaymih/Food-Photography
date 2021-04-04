import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AccountProfile from './components/AccountProfile/AccountProfile';
import AccountAddPicture from './components/AccountAddPicture/AccountAddPicture';
import AccountChangePassword from './components/AccountChangePassword/AccountChangePassword'
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
        <Route path="/contact" component={AccountChangePassword} />

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
