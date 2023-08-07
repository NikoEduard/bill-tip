"use strict";

const switchLangBtn = document.querySelector(".splitter__language-switcher");
const switcherDisk = document.querySelector(".switcher__disk");
const billAmount = document.getElementById("calc-bill").value;
const percentBtns = document.querySelectorAll(".percent-btns");
const customPercent = document.getElementById("custom__percent");
const numberOfPeople = document.querySelector("#people__amount").value;
let resultTipsPerPerson =
  document.querySelector(".result__tips-info").textContent;
let resultBillPerPerson =
  document.querySelector(".result__bill-info");
const getResultBtn = document.querySelector(".result__btn");
const resetBtn = document.querySelector(".result__reset");

function getBillForOnePerson() {
 resultBillPerPerson.textContent = Number(billAmount) / Number(numberOfPeople);
}
getResultBtn.addEventListener("click", function() {
  getBillForOnePerson();
});