import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import Avatar from "../../../assets/img-profile.png";
import Sticker from "./StickerSponsored/Sticker";
import "./style.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function FilmItem({ film }) {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  return (
    <div className="box-container">
      {film.isSponsored ? <Sticker /> : null}
      <div className="box">
        <div className="Upload-date-2021-11-29">
          <div className="date-container">
            <span className="Upload-date-2021-11-29-content">
              Upload date : 2021. 11. 29
            </span>
            <div className=".btn_bookmark_on">
              <Checkbox
                {...label}
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
                color="warning"
                checked={film.isSave}
              />
            </div>
          </div>
        </div>
        <div class="img_pattern"></div>
        <div className="title-container">
          <div className="title">
            <span class="CANADA-USA-2021-TOYOTA-CAMRY-XLE-HYBRID">
              CANADA & USA {">"} 2021 {">"} TOYOTA {">"} CAMRY {">"} XLE HYBRID
            </span>
          </div>
          <div className="description">
            <span class="OUT-FRONT-BUMPER">OUT FRONT {">"} BUMPER</span>{" "}
          </div>
        </div>
        <div class="line"></div>
        <div className="rate-container">
          <div className="left-side">
            <Box
              sx={{
                width: 100,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                defaultValue={film.rating}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </Box>
          </div>
          <div className="right-side">
            <div>
              <span class="-Credit">18 Credit</span>
            </div>
            <div>
              <span class="-downloads">11 downloads</span>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div className="info-container">
          <div className="info-left">
            <div>
              <img className="img-profile" src={Avatar} alt="ava" />
            </div>
            <span class="By-benzz">By benzz</span>
          </div>
          <div className="info-right">
            <div>
              <img className="img-profile" src={Avatar} alt="ava" />
            </div>
            <span class="Advanced">Advanced</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default FilmItem;
