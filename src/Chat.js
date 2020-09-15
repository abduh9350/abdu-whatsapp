import React from "react";
import "./Chat.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import { Avatar, IconButton } from "@material-ui/core";
function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>Last seen minutrs ago</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Abdu</span>
          This is message 1
          <span className="chat_time">{new Date().toUTCString()}</span>
        </p>

        <p className="chat_message chat_reciever">
          <span className="chat_name">Kedir</span>
          This is message 1
          <span className="chat_time">{new Date().toUTCString()}</span>
        </p>

        <p className="chat_message">
          <span className="chat_name">Abdu</span>
          This is message 1
          <span className="chat_time">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit">Send message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
