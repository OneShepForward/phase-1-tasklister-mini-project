document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.querySelector('form');
    // const log = document.getElementById("log");

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleToDo(e.target.new_task_description.value);
      // logSubmit(e);
      form.reset()
      // console.log(e.target.new-task-description);
    })

    // form.addEventListener('submit', (e) => logSubmit(e))
    
    // form.addEventListener('submit', handleToDo);
   
    
function handleToDo(todo) {
  let item = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleRemove)
  item.textContent = `${todo}  `;
  btn.textContent = "X";
  item.appendChild(btn);
  document.querySelector("#tasks").appendChild(item)
  // console.log(item);
}

function handleRemove(e) {
  e.target.parentNode.remove();
  }

  // function logSubmit(event) {
  //   event.preventDefault();
  //   log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
  // }
  

});

// I had to change all of the "new-task-description" instances in the
// HTML to "new_task_description" so that I could access them via dot
// notation in my "e.target.id" line. Was there another way to do this
// without editing the HTML?

