// src/pages/EventDetailsPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ScheduleComponent from "../components/EventCard/ScheduleComponent";
import Accordion from "react-bootstrap/Accordion";
import "./EventDetailsPage.scss";

const EventDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="event-details-page">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Event Details</Accordion.Header>
          <Accordion.Body>
            <ScheduleComponent eventId={id} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default EventDetailsPage;
