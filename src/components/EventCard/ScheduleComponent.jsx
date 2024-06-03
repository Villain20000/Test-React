// src/components/ScheduleComponent.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import "./ScheduleComponent.scss";

const ScheduleComponent = ({ eventId }) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          "http://testlc.lncdoo.com/api/myprofile/events"
        );
        if (response.data && response.data.data) {
          const foundEvent = response.data.data.find(
            (event) => event.id && event.id.toString() === eventId.toString()
          );
          if (!foundEvent) {
            setError("Event not found");
          } else {
            setEvent(foundEvent);
          }
        } else {
          setError("Invalid response structure");
        }
      } catch (error) {
        console.error("Error fetching event:", error);
        setError("Error fetching event: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    if (eventId) {
      fetchEvent();
    } else {
      setError("Invalid event ID");
      setLoading(false);
    }
  }, [eventId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!event) {
    return <div>No event found</div>;
  }

  return (
    <div className="schedule-component">
      <Accordion defaultActiveKey="0">
        {event.calendar && event.calendar.length > 0 ? (
          event.calendar.map((entry, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{entry.title}</Accordion.Header>
              <Accordion.Body>
                <div className="calendar-entry">
                  <div className="calendar-time">Time: {entry.time}</div>
                  <div className="calendar-date">Date: {entry.date_time}</div>
                  <div className="calendar-title">Title: {entry.title}</div>
                  <div className="calendar-room">Room: {entry.room}</div>
                  <div className="calendar-instructor">
                    Instructor: {entry.instructor_name}
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))
        ) : (
          <div>No calendar entries available</div>
        )}
      </Accordion>
    </div>
  );
};

export default ScheduleComponent;
