import React from "react";
import { useParams } from "react-router-dom";
const RoomPage = () => {
  const { roomdId } = useParams();
  return <div>{roomdId}</div>;
};

export default RoomPage;
