import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsPage from "./Pages/EventsPage";
import EventDetailsPage from "./Pages/EventDetailsPage"; // Import EventDetailsPage
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Importing Bootstrap Icons
import ScheduleComponent from "./components/EventCard/ScheduleComponent";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route path="/event-details" element={<EventDetailsPage />} />{" "}
        {/* Add Route for EventDetailsPage */}
      </Routes>
      <ScheduleComponent />
    </Router>
  );
};

export default App;
