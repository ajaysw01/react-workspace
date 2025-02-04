/* eslint-disable react/prop-types */
import profile from "../assets/profile.jpg"
import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className="user-container" style={props.style}>
      <p id="user-name">{props.name}</p>
      <img id="user-img" src={profile} alt="user image" />
      <p id="user-desc">{props.desc}</p>
    </div>
  )
}

export default UserCard