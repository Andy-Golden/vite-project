import { ProfileCard } from "./components";
import "./styles.css";
import avatar from "./avatar.png";

function ProfileCards() {
  return (
    <div className="container">
      <div className="cards">
        <ProfileCard
          avatar={avatar}
          name={"Dinh Nam"}
          role={"Fullstack developer"}
        />
        <ProfileCard
          avatar={avatar}
          name={"Dinh Nam"}
          role={"Fullstack developer"}
        />
        <ProfileCard
          avatar={avatar}
          name={"Dinh Nam"}
          role={"Fullstack developer"}
        />
      </div>
    </div>
  );
}

export default ProfileCards;
