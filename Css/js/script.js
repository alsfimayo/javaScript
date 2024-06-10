let input = document.querySelector("#fname");
let lastName = document.querySelector("#lname");
const parent = document.getElementById("parent");

document.create;
let array = [];
console.log(array);
function onClick() {
  const name = {
    firstName: input.value,
    lastName: lastName.value,
  };
  const list = document.createElement("li");
  list.textContent = name.firstName;
  parent.appendChild(list);
  array.push(name);
  input.value = "";
  lastName.value = "";
  console.log(array);
}
