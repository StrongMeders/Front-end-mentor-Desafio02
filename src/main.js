import "./css/index.css";
import IMask from 'imask';

const securityCode = document.querySelector("#security-code")
const securityCodePattern = {
  mask: "000",
}
const securityCodeMasked = IMask(securityCode, securityCodePattern)


