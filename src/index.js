//serve a controllare che il documento sia interamente caricato
document.addEventListener("DOMContentLoaded", () => {
  const todoList = document.querySelector(".todo-list");
  const text = document.querySelector("#text");
  const button = document.querySelector("#additemli");

  function addTask() {
    const elementList = text.value.trim();
    if (elementList) {
      aggiungi(elementList);
      saveElements(); //aggiunta funzione per salvare gli elementi(aggiunta molto dopo)
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
    emptyBox();
    CancellaTutto(ListItem);
    cancellaSingolo(ListItem);
  }

  function emptyBox() {
    const emptyListMess = document.querySelector(".empty-list-message");
    if (todoList.children.length === 0) {
      emptyListMess.textContent = "Non ci sono elementi";
    } else {
      emptyListMess.textContent = "";
    }
  }

  function CancellaTutto(ListItem) {
    const deleteButton = document.querySelector("#cancella");
    deleteButton.addEventListener("click", function () {
      todoList.innerHTML = "";
      localStorage.removeItem("elementList");
      saveElements();
      emptyBox();
    });
  }

  function cancellaSingolo(ListItem) {
    ListItem.addEventListener("click", function () {
      this.remove();
      localStorage.removeItem("elementList");
      saveElements();
      emptyBox();
    });
  }
  //la funzione sotto mette ciò che abbiamo inserito dentro il local store e lo rende visibile
  function saveElements() {
    //dichiara come variabile un array vuoto in cui inserire i li
    const elementLists = [];
    todoList.querySelectorAll("li").forEach(function (item) {
      elementLists.push(item.textContent.trim());
    });
    localStorage.setItem("elementList", JSON.stringify(elementLists));
  }
  //lo riprende e lo mostra
  function loadItems() {
    const Items = JSON.parse(localStorage.getItem("elementList")) || [];
    Items.forEach(aggiungi);
    emptyBox();
  }
  loadItems();
  CancellaTutto();
});
