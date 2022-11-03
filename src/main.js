import "./css/index.css";
import IMask from 'imask';

const securityCode = document.querySelector("#security-code")
const securityCodePattern = {
  mask: "000",
}
const securityCodeMasked = IMask(securityCode, securityCodePattern)


const cardNumber = document.querySelector("#card-number")
const cardNumberPattern = {
  mask: [
    {
      mask: "0000 0000 0000 0000",
    },
  ],
  }
const cardNumberMasked = IMask(cardNumber, cardNumberPattern)


const expirationDateMounth = document.querySelector("#mounth")
const expirationDateMounthPattern = {
  mask: "MM",
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
  },
}
const expirationDateMounthMasked = IMask(expirationDateMounth, expirationDateMounthPattern)


const expirationDateYear = document.querySelector("#year")
const expirationDateYearPattern = {
  mask: "YY",
  blocks: {
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2), 
    },
  },
}
const expirationDateYearMasked = IMask(expirationDateYear, expirationDateYearPattern)


const cardHolder = document.querySelector("#card-holder")
cardHolder.addEventListener("input", () => {
  const ccHolder = document.querySelector(".cc-holder .value")

  ccHolder.innerText = cardHolder.value.length === 0 ? "Jane Appleseed" : cardHolder.value
})


securityCodeMasked.on("accept", () => {
  updateSecurityCode(securityCodeMasked.value)
})

function updateSecurityCode(code){
  const ccSecurity = document.querySelector(".cc-security .value")
  
  ccSecurity.innerText = code.length === 0 ? "000" : code
}


cardNumberMasked.on("accept", () => {
  updateCardNumber(cardNumberMasked.value)
})

function updateCardNumber(number){
  const ccNumber = document.querySelector(".cc-number")

  ccNumber.innerText = number.length === 0 ? "0000 0000 0000 0000" : number
}


expirationDateMounthMasked.on("accept", () => {
  updateExpirationDateMounth(expirationDateMounthMasked.value)
})

function updateExpirationDateMounth(number){
  const ccMounth = document.querySelector(".mounth")

  ccMounth.innerText = number.length === 0 ? "00" : number
}


expirationDateYearMasked.on("accept", () => {
  updatExpirationDateYear(expirationDateYearMasked.value)
})

function updatExpirationDateYear(number){
  const ccYear = document.querySelector(".year")

  ccYear.innerText = number.length === 0 ? "00" : number
}