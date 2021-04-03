import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AccountProfile from './components/AccountProfile/AccountProfile';
import Footer from './components/Footer/Footer';

import './App.css';


function App() {
  return (
    <div>
      <Header />


      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/account/profile" component={AccountProfile} />
        <Route path="/" component={Home} />
        <Route path="/" component={Home} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
