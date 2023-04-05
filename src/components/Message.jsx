
import { Avatar } from "./Avatar";


export function Message(props) {
    
    const isCurrentUser = props.author.id === props.id;

  
    return (
      <div className={`message ${isCurrentUser ? "message-right" : "message-left"} `} >
        <div className="message-content">
        <Avatar avatarIndex={props.avatarIndex} author={props.author} />
          <div className="message-author">{props.author}</div>
          <div className="message-text">{props.text}</div>
          <div className="message-time">{props.time}</div>
        </div>
        <div className={`message-avatar message-avatar-${props.avatarIndex}`} />
      </div>
    );
  }
  
 