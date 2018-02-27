
function onReady() {
  //console.log("onReady accessed!");

  let toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');


  function createNewToDo()
  {

    if (!newToDoText.value) {return;}

    id++;

    toDos.push
    ( {
      title: newToDoText.value,
      complete: false,
      tdId : id
      } );

      newToDoText.value = '';

      renderTheUI();

  } //end of createNewToDo...


  function renderTheUI()
  {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach
    (function(toDo)
      {
        const newToDo = document.createElement('li');

        const newLi = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        //create delete button...
        const btn = document.createElement('button');
        const txt = document.createTextNode("Delete");
        btn.appendChild(txt);
        btn.type = "click";

        const title = document.createElement('span');

        title.textContent = toDo.title;

        newLi.textContent = toDo.title;

        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);

        newLi.appendChild(btn);

      // delete the to-do item...
        btn.addEventListener('click', event =>
         {
           deleteToDo(toDo.tdId);
           renderTheUI();
        });

        function deleteToDo(id)
        {

          toDos = toDos.filter(toDo => toDo.tdId !== id);

          //console.log("delete toDo.id= "+toDo.tdId+"  id= "+id);
          return;
        }


      }
    ); // end of forEach loop function...

  } // end of renderTheUI function...

//***************************************//
    addToDoForm.addEventListener('submit', event =>
      {
        event.preventDefault();
        //get the text...
        let title = newToDoText.value;
        createNewToDo();
        newToDoText.value = '';
      }
    );
  //***************************************//
  renderTheUI();

} // end of OnReady function...

window.onload = function()
  {
  ///alert("JS accessed!");
    onReady();
  };
