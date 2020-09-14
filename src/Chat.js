import React from "react";
import "./Chat.css";
import { Avatar } from "@material-ui/core";
function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>Last seen minutrs ago</p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
