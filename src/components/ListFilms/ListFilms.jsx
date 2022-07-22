import FilmItem from "./FilmItem/FilmItem";
import "./style.css";
function ListFilm() {
  return (
    <div className="container">
      <div class="NEW-PROTECTION-FILM-LIST">
        <span>NEW PROTECTION FILM LIST</span>
      </div>
      <div className="list-item">
        <FilmItem />
        <FilmItem />
        <FilmItem />
        <FilmItem />
        <FilmItem />
        <FilmItem />
      </div>
      <div className="button-load">
      <button class="btn-load">
          LOAD MORE
      </button>
      </div>
      
    </div>
  );
}
export default ListFilm;
