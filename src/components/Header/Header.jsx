import "./style.css";
import Logo from "../../assets/logo.svg";
import IconAccount from "../../assets/icon_account.svg";
import { Button, Link } from "@mui/material";
function Header() {
  return (
    <div class="header1">
      <div class="bg-header">
        <img alt="logo" src={Logo} class="logo" />
        <div className="navigation-header">
          <Link color="black" underline="none" href="">
            <a>PATTERN</a>
          </Link>
          <Link color="black" underline="none" href="">
            <a>PRICING</a>
          </Link>
          <Link color="black" underline="none" href="">
            <a>SUPPORT</a>
          </Link>
          <Link color="black" underline="none" href="">
            <a>UTRAFIT SHOP</a>
          </Link>
        </div>

        <div class="btn">
          <Button
            sx={{
              mx: "10px",
              bgcolor: "#0046a6",
              fontFamily: "Montserrat",
              fontSize: 10,
            }}
            size="medium"
            variant="contained"
          >
            EDIT & PILOT{" "}
          </Button>
          <Button
            sx={{
              mx: "10px",
              color: "#0046a6",
              fontFamily: "Montserrat",
              fontSize: 10,
            }}
            size="medium"
            variant="outlined"
          >
            SELL PATTERN
          </Button>
          <img alt="icon" src={IconAccount} class="icon_account"></img>
        </div>
      </div>
    </div>
  );
}
export default Header;
