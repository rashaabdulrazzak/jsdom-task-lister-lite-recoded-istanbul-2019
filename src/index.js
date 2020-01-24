document.addEventListener("DOMContentLoaded", () => {
  // your code here
 document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault();
   let val = document.getElementById('new-task-description').value;
   let li = document.createElement('li');
   li.innerHTML = val;
   let result = document.getElementById('tasks');
   result.appendChild(li)
 });

});
function deleteMe(){
  let val = document.querySelectorAll ('tasks li');
  val[val.length - 1].remove();
  
}
