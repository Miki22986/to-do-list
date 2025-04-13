//serve a controllare che il documento sia interamente caricato
document.addEventListener("DOMContentLoaded", () => {
  const todoList = document.querySelector(".todo-list");
  const emptyListMess = document.querySelector(".empty-list-message");
  const text = document.querySelector("#text");

  function addTask(event) {
    event.preventDefault();
    const elementList = text.ariaValueMax.trim();
    if (elementList) {
      aggiungi(elementList);

      elementList.value = ""; //se l'elemento è stato aggiunto svuota il campo
    }
  }
  function aggiungi() {}

  const form = document.querySelector("form");
  form.addEventListener("submit", addTask);
});
