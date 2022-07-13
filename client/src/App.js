// import React from "react";
// import logo from "./guitar-12793.png";
// import "./App.css";
// import Profile from "./Components/Profile";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>U, Me, and the Kevins</p>
//         <Profile />
//         <p>Let's Rock</p>
//       </header>
//     </div>
// import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import LandingPage from "./pages/LandingPage";
import BulletinBoard from "./pages/BulletinBoard";
import Login from "./pages/Login";
import NoExist from "./pages/NoExist";
import SinglePost from "./pages/SinglePost";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
        <div className="container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/bulletin_board" element={<BulletinBoard />} />
            <Route path="/profile">
              <Route path=":username" element={<Profile />} />
              <Route path="" element={<Profile />} />
            </Route>
            <Route path="/post/:id" element={<SinglePost />} />
            <Route path="*" element={<NoExist />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
