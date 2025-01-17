import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const [roomId, setRoomId] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleRoomIdGenerate = () => {
    const randomId = Math.random().toString(36).substring(2, 9);
    const timestamp = Date.now().toString().substring(-4);
    setRoomId(randomId + timestamp);
  };

  const handleOneAndOneCall = () => {
    if (!roomId) {
      alert("Please Generate Room Id First");
      return;
    }
    navigate(`room/${roomId}?type=one-on-one`);
  };

  const handleGroupCall = () => {
    if (!roomId) {
      alert("Please Generate Room Id First");
      return;
    }
    navigate(`room/${roomId}?type=group-call`);
  };

  const formatDateTime = (date) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="homepage-container">
      <div className="navbar">
        <a href="/" className="navbar-name">
          My MeeT
        </a>
        <div className="navbar-date-time">
          {formatDateTime(currentDateTime)}
        </div>
      </div>
      <div className="homepage-content">
        <h1 className="homepage-title">Welcome to Video Calling App</h1>
        <p className="homepage-subtitle">
          Start a video call with a randomly generated Room ID
        </p>
        <div className="room-id-container">
          <input
            type="text"
            className="room-id-input"
            placeholder="Generated Room ID"
            value={roomId}
            readOnly
          />
          <button className="generate-button" onClick={handleRoomIdGenerate}>
            Generate
          </button>
        </div>
        <div className="call-buttons">
          <button
            className="call-button"
            onClick={handleOneAndOneCall}
            disabled={!roomId}
          >
            One-on-One Call
          </button>
          <button
            className="call-button"
            onClick={handleGroupCall}
            disabled={!roomId}
          >
            Group Call
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
