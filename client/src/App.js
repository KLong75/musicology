import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';

import BulletinBoard from './pages/BulletinBoard';
import Login from './pages/Login';
import NoExist from './pages/NoExist';
import SinglePost from './pages/SinglePost';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='flex-column justify-flex-start min-100-vh'>
          <Header />
          <div className='container'>
            <Routes>
              <Route
                path='/'
                element={<BulletinBoard />}
              />
              <Route
                path='/login'
                element={<Login />}
              />
              <Route
                path='/signup'
                element={<Signup />}
              />
              <Route path='/profile'>
                <Route path=':username' element={<Profile />} />
                <Route path='' element={<Profile />} />
              </Route>
              <Route
                path='/post/:id'
                element={<SinglePost />}
              />
              <Route
                path='*'
                element={<NoExist />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;





// eslint-disable-next-line no-lone-blocks
{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Musicology
        </h1>
      </header>
    </div> */}