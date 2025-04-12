function prova(event) {
  event.preventDefault();
  alert("funziono");
}

let form = document.querySelector("form");
form.addEventListener("submit", prova);
