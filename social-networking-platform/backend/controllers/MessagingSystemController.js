import { User, Message } from '../models';

const MessagingSystemController = {
  sendMessage: (senderId, receiverId, messageContent) => {
    try {
      const sender = User.findById(senderId);
      const receiver = User.findById(receiverId);
      
      if (!sender || !receiver) {
        throw new Error('Invalid sender or receiver ID');
      }
      
      const message = new Message({
        sender: senderId,
        receiver: receiverId,
        content: messageContent,
        timestamp: new Date(),
      });
      
      message.save();
      
      return { success: true, message: 'Message sent successfully' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },
  
  getMessages: (userId) => {
    try {
      const user = User.findById(userId);
      
      if (!user) {
        throw new Error('Invalid user ID');
      }
      
      const messages = Message.find({ $or: [{ sender: userId }, { receiver: userId }] });
      
      return { success: true, messages };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },
  
  deleteMessage: (messageId) => {
    try {
      const message = Message.findById(messageId);
      
      if (!message) {
        throw new Error('Invalid message ID');
      }
      
      message.remove();
      
      return { success: true, message: 'Message deleted successfully' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },
};

export default MessagingSystemController;