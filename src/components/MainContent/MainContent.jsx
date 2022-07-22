import "./style.css";
import Banner2 from "../../assets/banner2.png";
import Image1 from "../../assets/img-left1.png";
import Image2 from "../../assets/img-right2.png";
import Image3 from "../../assets/img-left3.png";
import Background from "../../assets/background.svg";
import IconPentool from "../../assets/icon-pentool.svg";

function MainContent() {
  return (
    <div className="content-container">
      <div className="second-banner">
        <img alt="banner2" src={Banner2} class="banner2"></img>
      </div>
      <div className="first-row">
        <div className="lelf-content">
          <img className="image-left" alt=".." src={Image1} />
        </div>
        <div className="right-content">
          <div className="content-detail">
            <div class="square">
              <img className="icon-pentool" src={IconPentool}></img>
            </div>
            <div class="title-content">
              <span>
                The largest/first pattern marketplace for automotive film
                professio
              </span>
            </div>
          </div>
          <img className="info-content" alt=".." src={Background}></img>
        </div>
      </div>
      <div className="first-row">
        <div className="right-content">
          <div className="content-detail">
            <div class="square">
              <img className="icon-pentool" src={IconPentool}></img>
            </div>
            <div class="title-content">
              <span>
                Search for thousands of automotive patterns, customize to fit
                your needs, and plot online any film regardless of brand!
              </span>
            </div>
            <div className="detail-content">
              <span>
                Donec vitae porta sapien, nec dictum sapien. Vivamus interdum
                dolor a ullamcorper congue. Curabitur non eleifend enim.
              </span>
            </div>
          </div>
          <img className="info-content" alt=".." src={Background} />
        </div>
        <div className="right-content">
          <img className="image-left" alt=".." src={Image2} />
        </div>
      </div>
      <div className="first-row">
        <div className="lelf-content">
          <img className="image-left" alt=".." src={Image3} />
        </div>
        <div className="right-content">
          <div className="content-detail">
            <div class="square">
              <img className="icon-pentool" src={IconPentool}></img>
            </div>
            <div class="title-content">
              <span>
                Easily upload your own patterns and start making money now!
              </span>
            </div>
            <div className="detail-content">
              <span>
                Donec vitae porta sapien, nec dictum sapien. Vivamus interdum
                dolor a ullamcorper congue. Curabitur non eleifend enim.
              </span>
            </div>
          </div>
          <img className="info-content" alt=".." src={Background} />
        </div>
      </div>
    </div>
  );
}
export default MainContent;
