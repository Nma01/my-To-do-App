let userInput = document.querySelector(".input-field");
let btn = document.querySelector(".create-item");
let listItem = document.querySelector(".todo-list");


btn.addEventListener("click", (e) =>{
    e.preventDefault();
    createNewItem(userInput.value);

})

function createNewItem (x){
    let ourHTML = `<li class="to-do-li"> ${x} <button class ="btn btn-outline-secondary btn-sm delete-btns" onClick="deleteItem(this)">Delete</button></li>`;
    // inserts the user input as a new list item in the ul element
    listItem.insertAdjacentHTML("beforeend", ourHTML);

    // this clears the input field automatically after typing
    userInput.value = " ";
    // ensures the focus return to the input field, waiting for the user to type something else
    userInput.focus();
}


function deleteItem(clickedElement){
    
    clickedElement.parentElement.remove();
    return confirm('Are you sure you want to delete this item?');
}