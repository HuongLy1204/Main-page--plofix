import "./style.css";
import BannerImg from "../../assets/banner.png";
import FilterFilm from "./FilterFilm/FilterFilm";

function Banner() {
  return (
    <div className="bg-banner">
      <div className="title-search">
        <span>Find Your Paint Protection Film Cutting File.</span>
      </div>
      <div className="container-search">
        <FilterFilm />
      </div>
      <img alt="banner" src={BannerImg} class="img_main_banner"></img>
    </div>
  );
}
export default Banner;
