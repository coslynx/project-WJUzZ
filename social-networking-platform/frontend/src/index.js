import React from 'react';
import ReactDOM from 'react-dom';
import UserProfile from './components/UserProfile';
import MessagingSystem from './components/MessagingSystem';
import EventPlanning from './components/EventPlanning';
import NewsFeed from './components/NewsFeed';
import CommunityFeatures from './components/CommunityFeatures';

ReactDOM.render(
  <React.StrictMode>
    <UserProfile />
    <MessagingSystem />
    <EventPlanning />
    <NewsFeed />
    <CommunityFeatures />
  </React.StrictMode>,
  document.getElementById('root')
);