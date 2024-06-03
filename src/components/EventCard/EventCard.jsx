// src/components/EventCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./EventCard.scss"; // Custom Sass file

const EventCard = ({ event }) => {
  return (
    <Link to={`/event/${event.id}`}>
      <Card className="event-card">
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Text as="div">
            <div className="event-location">
              <i className="bi bi-geo-alt"></i>{" "}
              {event.location || "Location not available"}
            </div>
            <div className="event-schedule">
              <i className="bi bi-calendar"></i>{" "}
              {event.date || "Date not available"}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default EventCard;
