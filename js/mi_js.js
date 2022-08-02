function expand(element) {
  element.classList.toggle("active");
  element.nextElementSibling.classList.toggle("active");
}