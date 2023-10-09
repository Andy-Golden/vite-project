type PropsProfileCard = { avatar: string; name: string; role: string };
import "./styles.css";

export function ProfileCard({ avatar, name, role }: PropsProfileCard) {
  return (
    <>
      <div className="card">
        <div className="card__avatar">
          <img src={avatar} alt="avatar"></img>
        </div>
        <p className="card__user-name">{name}</p>
        <p className="card__user-major">{role}</p>
        <div className="card__social-icons">
          <a href="https://github.com/Andy-Golden/vite-project" target="_blank">
            <i className="fab fa-facebook-f card__social-icon"></i>
          </a>
          <a href="https://github.com/Andy-Golden/vite-project" target="_blank">
            <i className="fab fa-youtube card__social-icon"></i>
          </a>
          <a href="https://github.com/Andy-Golden/vite-project" target="_blank">
            <i className="fab fa-tiktok card__social-icon"></i>
          </a>
          <a href="https://github.com/Andy-Golden/vite-project" target="_blank">
            <i className="fab fa-github card__social-icon"></i>
          </a>
        </div>
        <button className="card__btn-contact">Contact me</button>
      </div>
    </>
  );
}
