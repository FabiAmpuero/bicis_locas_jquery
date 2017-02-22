var element = document.querySelector(".form-signup");
element.addEventListener("keyup", function(event) {
  event.preventDefault();
  validateForm();
});
element.addEventListener("click", function(event) {
  event.preventDefault();
  validateForm();
});
