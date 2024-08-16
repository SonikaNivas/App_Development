import React from "react";
import "./UpcomingEvents.css";

const EventCard = ({ date, title, description }) => {
  return (
    <div className="event-card">
      <div className="event-date">
        <span>{date}</span>
      </div>
      <div className="event-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="view-details">View Details</button>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  const events = [
    {
      date: "11 Aug",
      title: "Startup Bootcamp",
      description:
        "Intensive workshops and networking opportunities for budding entrepreneurs",
    },
    {
      date: "18 Aug",
      title: "Women in Business Gala",
      description:
        "Honoring female entrepreneurs and their contributions to the business world.",
    },
    {
      date: "24 Aug",
      title: "Persuasive Speaking Workshop",
      description:
        "Master the art of persuasion to influence and inspire your audience.",
    },
    // Add more events here
  ];

  return (
    <div>
      <button
        className="back-home"
        onClick={() => (window.location.href = "/home")}
      >
        Back to Home
      </button>
      <br></br>
      <br></br>
      <div className="upcoming-events">
        <div
          className="events-header"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&w=800)",
          }}
        >
          <h2>
            EVENTS
            <br></br>AND SHOWS
          </h2>
          {/* <p>
          "Step into the spotlight and showcase your passion at our exclusive
          events and shows."
        </p> */}
        </div>
        <div className="events-list">
          {events.map((event, index) => (
            <EventCard
              key={index}
              date={event.date}
              title={event.title}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
