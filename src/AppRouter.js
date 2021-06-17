import React, { useMemo, useState } from 'react';
import Feed from './pages/Forum/Feed';
import LoginPage from './pages/Login/LoginPage';
import Marketplace from './pages/MarketPlace/Marketplace';
import NavBar from './pages/NavBar';
import Home from './pages/Home/Home'
import CreateAccount from './pages/Login/CreateAccount';
import ReqHome from './pages/Request/ReqHome'
import { BrowserRouter, Route } from 'react-router-dom';
import { UserContext } from './UserContext';
import { RepairPost } from './RepairPost';


function AppRouter() {
  const [user, setUser] = useState(null);
  const [post, setPosts] = useState(null)

  const userMemo = useMemo(() => ({ user, setUser }), [user, setUser])
  const postMemo = useMemo(() => ({ post, setPosts }), [post, setPosts])

  return (
    <BrowserRouter>
      <RepairPost.Provider value={postMemo}>
        <UserContext.Provider value={userMemo}>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/requests' component={ReqHome} />
          <Route exact path='/feed' component={Feed} />
          <Route exact path='/market' component={Marketplace} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/createAccount' component={CreateAccount} />
        </UserContext.Provider>
      </RepairPost.Provider>
    </BrowserRouter>
  );
}

export default AppRouter;