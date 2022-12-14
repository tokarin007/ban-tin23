"use strict";

const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", () => {
  console.log("submit start...");
  currentUser.pagesize = inputPageSize.value;
  currentUser.category = inputCategory.value;
  saveToStorage("currentUser", currentUser);
});
