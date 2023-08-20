"use strict";

const switchLangBtn = document.querySelector(".splitter__language-switcher"),
  switcherDisk = document.querySelector(".switcher__disk"),
  billAmount = document.getElementById("calc-bill"),
  percentBtns = document.querySelectorAll(".percent-btns"),
  customPercent = document.getElementById("custom__percent"),
  numberOfPeople = document.querySelector("#people__amount");

let getResultBtn = document.querySelector(".result__btn"),
 resetBtn = document.querySelector(".result__reset"),
 resultTipsPerPerson = document.querySelector(".result__tips-info"),
 resultBillPerPerson = document.querySelector(".result__bill-info"),
 billTitle = document.querySelector(".splitter__bill-title"),
 tipsBtnsTitle = document.querySelector(".splitter__tips-title"),
 numberOfPeopleTitle = document.querySelector(".splitter__peoples-title"),
 billAmountTitle = document.querySelector(".amount__bill"),
 tipsAmountTitle = document.querySelector(".amount__tips"),
 perPersonTxt = document.querySelectorAll(".per__person");

function getBillForOnePerson() {
  resultBillPerPerson.textContent = (
    Number(billAmount.value) / Number(numberOfPeople.value)
  ).toFixed(2);
  return Number(resultBillPerPerson.textContent);
}
function getTipsPerPerson() {
  let billPerPerson = getBillForOnePerson();
  for (let i = 0; i < percentBtns.length; i++) {
    if (percentBtns[i].checked === true && customPercent.value === '') {
      resultTipsPerPerson.textContent = (
        (Number(billPerPerson) * parseFloat(percentBtns[i].value)) /
        100
      ).toFixed(2);
      return Number(resultTipsPerPerson.textContent);
    } else if(customPercent.value !== ''){
      resultTipsPerPerson.textContent = (
        (Number(billPerPerson) * parseFloat(customPercent.value)) /
        100
      ).toFixed(2);
      return Number(resultTipsPerPerson.textContent);
    }
    // if (customPercent.focus()) { 
    //   resultTipsPerPerson.textContent = (
    //     (Number(billPerPerson) * parseFloat(customPercent.textContent)) /
    //     100
    //   ).toFixed(2);
    //   return Number(resultTipsPerPerson.textContent);
    // }
  }
}

getResultBtn.addEventListener("click", function () {
  getBillForOnePerson();
  getTipsPerPerson();
});

switchLangBtn.addEventListener("click", function () {
  switcherDisk.classList.toggle("switch");
  if (switcherDisk.classList.contains("switch")) {
    billTitle.textContent = "Рахунок";
    tipsBtnsTitle.textContent = "Виберіть відсоток чайових";
    numberOfPeopleTitle.textContent = "Кількість людей";
    billAmountTitle.textContent = "Сума рахунку";
    tipsAmountTitle.textContent = "Сума чайових";
    perPersonTxt[0].textContent = "/ від особи";
    perPersonTxt[1].textContent = "/ від особи";
    getResultBtn.textContent = "Отримати результат";
    resetBtn.textContent = "Скинути";
  } else {
    billTitle.textContent = "Bill";
    tipsBtnsTitle.textContent = "Select tip %";
    numberOfPeopleTitle.textContent = "Number of people";
    billAmountTitle.textContent = "Bill amount";
    tipsAmountTitle.textContent = "Tips amount";
    perPersonTxt[0].textContent = "/ person";
    perPersonTxt[1].textContent = "/ person";
    getResultBtn.textContent = "Get result";
    resetBtn.textContent = "Reset";
  }
});

resetBtn.addEventListener("click", function () {
  billAmount.value = "";
  numberOfPeople.value = "";
  resultBillPerPerson.textContent = "0.00";
  resultTipsPerPerson.textContent = "0.00";
});
