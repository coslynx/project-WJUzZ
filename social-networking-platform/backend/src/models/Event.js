class Event {
  constructor(title, description, date, location, creator) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.location = location;
    this.creator = creator;
    this.attendees = [];
  }

  addAttendee(user) {
    this.attendees.push(user);
  }

  removeAttendee(user) {
    this.attendees = this.attendees.filter((attendee) => attendee !== user);
  }

  updateEvent(newTitle, newDescription, newDate, newLocation) {
    this.title = newTitle;
    this.description = newDescription;
    this.date = newDate;
    this.location = newLocation;
  }

  notifyAttendees(message) {
    this.attendees.forEach((attendee) => {
      attendee.receiveNotification(message);
    });
  }
}