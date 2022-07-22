import "./style.css";
import Logo from "../../assets/logo.svg";
import IconIg from "../../assets/icon-ig.svg";
function Footer() {
  return (
    <div class="bg_footer">
      <div className="navigation-container">
        <img alt="logo" src={Logo} class="logo" />
        <div className="navigation-link">
          <span>About us</span>
          <span>Our Product</span>
          <span>Contact us</span>
          <span>Shop</span>
        </div>
        <div className="social-contact">
          <div class="round-icon">
            <img className="icon-ig" src={IconIg} />
          </div>{" "}
          <div class="round-icon">
            <img className="icon-ig" src={IconIg} />
          </div>{" "}
          <div class="round-icon">
            <img className="icon-ig" src={IconIg} />
          </div>{" "}
        </div>
      </div>
      <div class="line-footer"></div>
      <div className="contact-container">
        <span >
          ©2021 INOGROW. All Rights Reserved.
        </span>
        <span >
          E-mail: info@ultrafitprotection.com
        </span>
      </div>
    </div>
  );
}
export default Footer;
