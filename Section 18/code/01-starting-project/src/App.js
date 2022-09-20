import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import {Fragment} from 'react';
import Header from './components/Header'
import Auth from './components/Auth'
import Profile from './components/UserProfile'

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <Profile />}
      <Counter />
    </Fragment>
  );
}

export default App;
