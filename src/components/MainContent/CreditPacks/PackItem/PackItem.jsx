import "./style.css";
function PackItem() {
  return (
    <div class="box-pack">
      <div class="type">
        <span>STANDARD</span>
      </div>
      <div class="line"></div>
      <div className="value">
        <span>$50</span>
      </div>
      <span class="vat">*VAT not included in prices.</span>
      <div class="line"></div>
      <div class="Credit">
        <span>50 Credit</span>
      </div>
      <div class="Total-Credit">
        <span>Total Credit</span>
      </div>
      <div class="total">
        <span>50 Credit</span>
      </div>
    </div>
  );
}
export default PackItem;
