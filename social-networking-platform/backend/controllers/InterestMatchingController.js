import express from 'express';
import User from '../models/User';
import Interest from '../models/Interest';

const InterestMatchingController = {
  getMatchingUsers: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const userInterests = user.interests;

      const matchingUsers = await User.find({ 
        _id: { $ne: userId }, 
        interests: { $in: userInterests }
      });

      return res.status(200).json({ matchingUsers });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
};

export default InterestMatchingController;