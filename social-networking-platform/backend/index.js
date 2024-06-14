import express from 'express';
import UserProfileController from './controllers/UserProfileController';
import InterestMatchingController from './controllers/InterestMatchingController';
import MessagingSystemController from './controllers/MessagingSystemController';
import EventPlanningController from './controllers/EventPlanningController';
import NewsFeedController from './controllers/NewsFeedController';

const app = express();
const PORT = 3000;

app.use(express.json());

// User Profile Creation
app.post('/user/profile', UserProfileController.createUserProfile);

// Interest Matching
app.get('/user/match', InterestMatchingController.matchUsers);

// Messaging System
app.post('/message/send', MessagingSystemController.sendMessage);
app.post('/message/group', MessagingSystemController.createGroupChat);

// Event Planning
app.post('/event/create', EventPlanningController.createEvent);
app.get('/event/join', EventPlanningController.joinEvent);

// News Feed
app.get('/newsfeed', NewsFeedController.getNewsFeed);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;