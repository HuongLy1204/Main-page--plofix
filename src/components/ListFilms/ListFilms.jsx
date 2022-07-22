import FilmItem from "./FilmItem/FilmItem";
import "./style.css";

//fake data when dont have api.
const LIST_FILM = [
  {
    isSponsored: Math.random() < 0.5,
    isSave: Math.random() < 0.5,
    rating: Math.floor(Math.random()*5)
  },
  {
    isSponsored: Math.random() < 0.5,
    isSave: Math.random() < 0.5,
    rating: Math.floor(Math.random()*5)
  },
  {
    isSponsored: Math.random() < 0.5,
    isSave: Math.random() < 0.5,
    rating: Math.floor(Math.random()*5)
  },
  {
    isSponsored: Math.random() < 0.5,
    isSave: Math.random() < 0.5,
    rating: Math.floor(Math.random()*5)
  },
  {
    isSponsored: Math.random() < 0.5,
    isSave: Math.random() < 0.5,
    rating: Math.floor(Math.random()*5)
  },
  {
    isSponsored: Math.random() < 0.5,
    isSave: Math.random() < 0.5,
    rating: Math.floor(Math.random()*5)
  },
];

function ListFilm() {
  return (
    <div className="container">
      <div class="NEW-PROTECTION-FILM-LIST">
        <span>NEW PROTECTION FILM LIST</span>
      </div>
      <div className="list-item">
        {LIST_FILM.map((film) => {
          return <FilmItem film={film} />;
        })}
      </div>
      <div className="button-load">
        <button class="btn-load">LOAD MORE</button>
      </div>
    </div>
  );
}
export default ListFilm;
