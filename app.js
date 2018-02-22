
function onReady() {
  //console.log("onReady accessed!");

  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo(){
    if (!newToDoText.value) {return;}

      toDos.push( {
        title: newToDoText.value,
        complete: false
      });

      newToDoText.value = '';

      renderTheUI();
  } //end of createNewToDo...

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newToDo = document.createElement('li');

      const newLi = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

//create delete button...
      const btn = document.createElement("BUTTON");
      const t = document.createTextNode("DELETE");
      btn.appendChild(t);


      const title = document.createElement('span');

      title.textContent = toDo.title;

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(btn);
    }); //end of forEach loop...


  } //end of renderTheUI...

  addToDoForm.addEventListener('submit', event => {
      event.preventDefault();

      //get the text...
      let title = newToDoText.value;
      createNewToDo();
      newToDoText.value = '';
  });

  renderTheUI();
  //const toDoList = document.getElementById('toDoList');
} // end of OnReady function...

window.onload = function() {
  ///alert("JS accessed!");
  onReady();
};
