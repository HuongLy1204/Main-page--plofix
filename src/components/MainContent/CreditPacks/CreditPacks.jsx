import "./style.css";
import Background2 from "../../../assets/img-cre.png";
import PackItem from "./PackItem/PackItem";
function CreditPacks() {
  return (
    <div className="container-credit">
      <div className="main-credit">
        <div className="credit-title">
          <span class="CREDIT-PACKS">CREDIT PACKS</span>
        </div>
        <span class="description">
        Choose credit plan designed to meet your needs.</span>
        <div className="pack-container">
          <PackItem/>
          <PackItem/>
          <PackItem/>
          <PackItem/>

      </div>
      </div>
      

      <img className="background2" src={Background2} alt=".." />
    </div>
  );
}
export default CreditPacks;
