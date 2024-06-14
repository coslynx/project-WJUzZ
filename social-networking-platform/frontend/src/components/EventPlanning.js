import React, { useState, useEffect } from 'react';

const EventPlanning = () => {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    // Fetch events from the backend and update the state
    const fetchEvents = async () => {
      try {
        const response = await fetch('backend/api/events');
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        } else {
          throw new Error('Failed to fetch events');
        }
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchEvents();
  }, []);
  
  const createEvent = async (eventData) => {
    try {
      const response = await fetch('backend/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
      
      if (response.ok) {
        const newEvent = await response.json();
        setEvents([...events, newEvent]);
      } else {
        throw new Error('Failed to create event');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
      <h2>Event Planning</h2>
      <button onClick={() => createEvent({ name: 'Sample Event', date: '2022-12-31' })}>
        Create Event
      </button>
      
      <ul>
        {events.map(event => (
          <li key={event.id}>{event.name} - {event.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventPlanning;