import twilio from 'twilio';

const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const client = twilio(accountSid, authToken);

const TwilioAPI = {
  sendSMS: (phoneNumber, message) => {
    client.messages
      .create({
         body: message,
         from: 'your_twilio_number',
         to: phoneNumber
       })
      .then(message => console.log(message.sid))
      .catch(error => console.error(error));
  },
  
  makeVoiceCall: (phoneNumber, twiml) => {
    client.calls
      .create({
         twiml: twiml,
         to: phoneNumber,
         from: 'your_twilio_number'
       })
      .then(call => console.log(call.sid))
      .catch(error => console.error(error));
  },
  
  makeVideoCall: (phoneNumber, twiml) => {
    client.video.rooms
      .create({
         uniqueName: 'room_name',
         type: 'group',
         recordParticipantsOnConnect: true
       })
      .then(room => {
         client.calls
           .create({
              twiml: twiml,
              to: phoneNumber,
              from: 'your_twilio_number'
            })
           .then(call => console.log(call.sid))
           .catch(error => console.error(error));
       })
      .catch(error => console.error(error));
  }
};

export default TwilioAPI;