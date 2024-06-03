// src/pages/EventsPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../components/EventCard/EventCard";
import "./EventsPage.scss"; // Custom Sass file

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://testlc.lncdoo.com/api/myprofile/events"
        );
        console.log("API Response:", response.data); // Log the API response
        const filteredEvents = response.data.data.filter(
          (event) => event.is_inclass
        );
        console.log("Filtered Events:", filteredEvents); // Log the filtered events
        setEvents(filteredEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Error fetching events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="events-page">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

export default EventsPage;
