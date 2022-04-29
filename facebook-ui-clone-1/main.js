// popover

var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

// if (window.location.pathname === "/index.html") {
let femalegender = document.querySelector("#genderFemale");
let malegender = document.querySelector("#genderMale");
let customgender = document.querySelector("#genderCustom");
let customInp = document.querySelector("#customgender");

femalegender.addEventListener("change", (e) => {
  customInp.classList.add("d-none");
});
malegender.addEventListener("change", (e) => {
  customInp.classList.add("d-none");
});
customgender.addEventListener("change", (e) => {
  customInp.classList.remove("d-none");
});
// }
