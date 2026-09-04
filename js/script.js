let person = [
  { firstName: "huzaifa", lastName: "hassan", age: 20 },
  { firstName: "ali", lastName: "hassan", age: 22 },
  { firstName: "ahmed", lastName: "ali", age: 24 }
];

let addPerson = function (firstName, lastName, age) {
  person.push({
    firstName: firstName,
    lastName: lastName,
    age: Number(age)
  });
};

let div = document.createElement("div");
document.body.appendChild(div);
div.innerHTML = "<h1><b>Add Person</b></h1>";
div.innerHTML += "<p>Click the button to add a new person.</p>";

let buttonform = document.createElement("button");
buttonform.innerHTML = "Add Person";
div.appendChild(buttonform);

let viewListBtn = document.createElement("button");
viewListBtn.innerHTML = "View Person List";
viewListBtn.style.marginLeft = "10px";
div.appendChild(viewListBtn);

viewListBtn.addEventListener("click", function () {
  let existingList = document.querySelector("#personList");
  if (existingList) existingList.remove();

  let listDiv = document.createElement("div");
  listDiv.id = "personList";
  listDiv.style.marginTop = "20px";
  div.appendChild(listDiv);

  listDiv.innerHTML = "<h2>Person List</h2>";
  let table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.border = "1px solid black";
  table.innerHTML = "<thead><tr><th>First Name</th><th>Last Name</th><th>Age</th></tr></thead><tbody></tbody>";
  listDiv.appendChild(table);

  let tableBody = table.querySelector("tbody");
  person.forEach(function (c) {
    let row = tableBody.insertRow();
    row.insertCell().textContent = c.firstName;
    row.insertCell().textContent = c.lastName;
    row.insertCell().textContent = c.age;
  });
});

buttonform.addEventListener("click", function () {
  let existingList = document.querySelector("#personList");
  if (existingList) existingList.remove();

  if (person.length >= 4) {
    alert("Maximum number of persons added.");
    return;
  }

  if (document.querySelector("form")) {
    return;
  }

  let form = document.createElement("form");
  form.style.marginTop = "20px";
  div.appendChild(form);

  form.innerHTML =
    "<label for='firstName'>First Name:</label><input type='text' id='firstName' name='firstName' required><br>" +
    "<label for='lastName'>Last Name:</label><input type='text' id='lastName' name='lastName' required><br>" +
    "<label for='age'>Age:</label><input type='number' id='age' name='age' required><br>" +
    "<input type='submit' value='Submit Person'>";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;

    addPerson(firstName, lastName, age);

    form.innerHTML = "<p id='success'>Person added successfully!</p>";
    form.innerHTML += "<button type='button' id='addAnother'>Add Another Person</button>";

    document.querySelector("#addAnother").addEventListener("click", function () {
      form.remove();
    });
  });
});