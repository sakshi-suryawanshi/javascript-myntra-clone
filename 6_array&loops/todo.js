let todoList = [{
            item:'buy milk', 
            dueDate:'4/10/2023'
          },

          {
            item:'add money', 
            dueDate:'4/10/2023'
          },];

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item:todoItem, dueDate:todoDate});
  
  /*
  let todolist = document.querySelector('#todo-list');
  let child = document.createElement('li');
  child.innerText = todoItem;
  todolist.append(child);
  */

  inputElement.value = '';
  dateElement=  '';
  display();
}


function display(){
let containerElement = document.querySelector('.todo-container');

let newHtml ='';


for(let i=0; i <todoList.length; i++){
  let {item, dueDate} = todoList[i];
        newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
              <button class="btn-delete" onclick="todoList.splice(${i},1);
               display();"
               >
               Delete</button>
              `;
        
}
containerElement.innerHTML = newHtml;


}

display();