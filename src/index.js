document.addEventListener("DOMContentLoaded", () => {
  const todoList = document.querySelector(".todo-list");
  const emptyListMess = document.querySelector(".empty-list-message");
  //serve a controllare che il documento sia interamente caricato
  function prova(event) {
    event.preventDefault();
    alert("funziono");
  }

  const form = document.querySelector("form");
  form.addEventListener("submit", prova);
});
