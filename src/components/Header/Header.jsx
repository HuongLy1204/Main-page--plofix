import "./style.css";
import Logo from "../../assets/logo.svg";
import IconAccount from "../../assets/icon_account.svg";
function Header() {
  return (
    <div class="header1">
      <div class="bg-header">
        <img alt="logo" src={Logo} class="logo" />

        <span class="PATTERN">PATTERN</span>
        <span class="PRICING">PRICING</span>
        <span class="SUPPORT">SUPPOR</span>
        <span class="ULTRAFIT-SHOP">UTRAFITSHOP</span>
        <div class="btn">
          <div class="edit-plot">
            <span class="edit-plot-content">EDIT & PlOT</span>
          </div>
          <div class="sell-pattern">
            <span class="sell-pattern-content">SELL PATTERN</span>
          </div>

          <img alt="icon" src={IconAccount} class="icon_account"></img>
        </div>
      </div>
    </div>
  );
}
export default Header;
