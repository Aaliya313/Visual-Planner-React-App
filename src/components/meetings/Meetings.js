/** @format */

import React, { useState } from "react";
import "../meetings/style.css";

const Meeting = ({ removedMeeting, meeting, toggleCompleted }) => (
  <div className="meeting-card">
    <div
      id="meeting-text"
      style={{ textDecoration: meeting.completed ? "line-through" : "none" }}
    >
      {meeting.name} - {meeting.time}
    </div>
    <div className="btn-parent">
      <button
        id="btn"
        className="complete-btn"
        onClick={() => toggleCompleted(meeting.id)}
      >
        {meeting.completed ? "Unmark as completed" : "Mark as completed"}
      </button>
      <button
        id="btn"
        className="remove-btn"
        onClick={() => removedMeeting(meeting.id)}
      >
        Remove meeting
      </button>
    </div>
  </div>
);

const MeetingList = ({ meetings, toggleCompleted, removedMeeting }) => (
  <div className="list-container">
    {meetings.map((meeting) => (
      <Meeting
        removedMeeting={removedMeeting}
        key={meeting.id}
        meeting={meeting}
        toggleCompleted={toggleCompleted}
      />
    ))}
  </div>
);

const NewMeetingForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !time) return;
    onSubmit(name, time);
    setName("");
    setTime("");
  };

  return (
    <form className="meeting-form" onSubmit={handleSubmit}>
      <input
        className="form-item"
        type="text"
        placeholder="Meeting name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="form-item"
        type="text"
        placeholder="Meeting time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button className="form-item form-btn" type="submit">
        Add meeting
      </button>
    </form>
  );
};

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);

  const addMeeting = (name, time) => {
    const newMeeting = {
      id: Date.now(),
      name,
      time,
      completed: false,
    };
    setMeetings([...meetings, newMeeting]);
  };

  const removedMeeting = (id) => {
    setMeetings(meetings.filter((meeting) => meeting.id !== id));
  };
  const toggleCompleted = (id) => {
    setMeetings(
      meetings.map((meeting) =>
        meeting.id === id
          ? { ...meeting, completed: !meeting.completed }
          : meeting
      )
    );
  };

  const sortedMeetings = [...meetings].sort((a, b) =>
    a.time.localeCompare(b.time)
  );

  return (
    <div className="meeting-container">
      <NewMeetingForm onSubmit={addMeeting} />
      <MeetingList
        className="meeting-list"
        meetings={sortedMeetings}
        toggleCompleted={toggleCompleted}
        removedMeeting={removedMeeting}
      />
    </div>
  );
};

export default Meetings;
