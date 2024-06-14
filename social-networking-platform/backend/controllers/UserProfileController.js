import User from '../models/User';
import Interest from '../models/Interest';

const createUserProfile = (userData) => {
  try {
    const { username, email, interests, hobbies, photos, videos } = userData;
    
    const user = new User({
      username,
      email,
      interests,
      hobbies,
      photos,
      videos,
    });

    user.save();
    
    return { success: true, message: 'User profile created successfully' };
  } catch (error) {
    return { success: false, message: 'Failed to create user profile' };
  }
};

const getUserProfile = (userId) => {
  try {
    const user = User.findById(userId);
    
    if (!user) {
      return { success: false, message: 'User profile not found' };
    }

    return { success: true, user };
  } catch (error) {
    return { success: false, message: 'Failed to fetch user profile' };
  }
};

export { createUserProfile, getUserProfile };