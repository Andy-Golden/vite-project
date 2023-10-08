import "./App.css";
import avatar from "./avatar.png";

function App() {
  return (
    <div className="cards">
      <div className="card">
        <div className="card__avatar">
          <img src={avatar} alt="avatar"></img>
        </div>
        <p className="card__user-name">Dinh Nam</p>
        <p className="card__user-major">Fullstack developer</p>
      </div>
      <div className="card"></div>
      <div className="card"></div>
    </div>
  );
}

export default App;
