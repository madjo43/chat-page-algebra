import { avatarImages } from "../library/avatar"
export function Avatar(props) {
    return (
      <img
        src={avatarImages[props.avatarIndex]}
        alt={props.author}
        width="100px"
        height="100px"
      />
    );
  }
  