var link = document.querySelector(".form-open-button");
var popup = document.querySelector(".search-form");
var form = document.querySelector(".search-form");
var arrival = document.querySelector("[name=check-in-date]");
var departure = document.querySelector("[name=date-of-departure]");
var aduld = document.querySelector("[name=aduld]");
var children = document.querySelector("[name=children]");
var storage = localStorage.getItem("children");

link.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.toggle("search-form-show");
  popup.classList.remove("search-form-error");
  if (storage) {
    children.value = storage;
  }
  arrival.focus();
});

form.addEventListener("submit", function(evt){
  if (!arrival.value || !departure.value) {
  evt.preventDefault();
  popup.classList.remove("search-form-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("search-form-error");
} else {
  localStorage.setItem("children", children.value);
  localStorage.setItem("aduld", aduld.value);
}
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("search-form-show")) {
      popup.classList.remove("search-form-show");
      popup.classList.remove("search-form-error");
    }
  }
});
