import profile_photo from "./assets/channels4_profile.jpg";

function ProfilePicture() {
  const handleClick = (e) => (e.target.style = "display: none;");

  return (
    <img onClick={(event) => handleClick(event)} src={profile_photo}></img>
  );
}

export default ProfilePicture;
