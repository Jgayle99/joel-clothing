import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
/*
    <Link to={`${props.match.url}/15`}>TO TOPIC 15</Link>
    <Link to='/topics/abc'>Topicsabc</Link>
    <button onClick={() => props.history.push('/topics/abcde')}>TopicsABCDE</button>
*/

/*
const TopicsList = props => {
  return (
  <div>
    <Link to={`${props.match.url}13`}>TO TOPIC 13</Link>
    <Link to={`${props.match.url}14`}>TO TOPIC 14</Link>
    <Link to={`${props.match.url}15`}>TO TOPIC 15</Link>
    <h1>TOPIC LIST PAGE</h1>
  </div>
  );
  };


const TopicDetail = props => {
  return (
  <div>
    <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
  </div>
);
};
*/

/*
            <Route exact path='/' component={HomePage} />
            <Route exact path='/abc/123/topics' component={TopicsList} />
            <Route path='/abc/123/topics/:topicId' component={TopicDetail} />
            <Route exact path='/abc/topics' component={TopicsList} />
            <Route path='/abc/topics/:topicId' component={TopicDetail} />
*/




function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
