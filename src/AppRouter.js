import React, { useMemo, useState } from 'react';
import Feed from './pages/Forum/Feed';
import LoginPage from './pages/Login/LoginPage';
import Marketplace from './pages/MarketPlace/Marketplace';
import NavBar from './pages/NavBar';
import Home from './pages/Home/Home'
import CreateAccount from './pages/Login/CreateAccount';
import {BrowserRouter, Route} from 'react-router-dom';
import { UserContext } from './UserContext';



function AppRouter() {
  const [user, setUser] = useState(null);

  const userMemo = useMemo(() => ({user, setUser}), [user, setUser])

  return (
    <BrowserRouter>
      <NavBar/>
      <UserContext.Provider value={userMemo}>
        <Route exact path='/' component={Home} />
        <Route exact path='/feed' component={Feed} />
        <Route exact path='/market' component={Marketplace} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/createAccount' component={CreateAccount} />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default AppRouter;