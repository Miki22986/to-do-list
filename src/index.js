document.addEventListener("DOMContentLoaded", () => {
  //serve a controllare che il documento sia interamente caricato
  function prova(event) {
    event.preventDefault();
    alert("funziono");
  }

  const form = document.querySelector("form");
  form.addEventListener("submit", prova);
});
