import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat_info">
        <h2>RoomName</h2>
      </div>
    </div>
  );
}

export default SidebarChat;
