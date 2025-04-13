//serve a controllare che il documento sia interamente caricato
document.addEventListener("DOMContentLoaded", () => {
  const todoList = document.querySelector(".todo-list");
  const emptyListMess = document.querySelector(".empty-list-message");
  const text = document.querySelector("#text");
  const button = document.querySelector("button");

  function addTask(event) {
    event.preventDefault();
    const elementList = text.value.trim();
    if (elementList) {
      aggiungi(elementList);
      text.value = ""; //se l'elemento è stato aggiunto svuota il campo
    } else {
      alert("aggiungi un elemento");
    }
  }

  button.addEventListener("click", addTask);

  function aggiungi(elementList) {
    const ListItem = document.createElement("li"); //per creare elementi li
    ListItem.textContent = elementList; // Inserisce solo testo, ignora eventuali tag HTML.
    todoList.appendChild(ListItem); //attacca il li alla ul
  }
});
