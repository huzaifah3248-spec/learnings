let person = [
  { firstName: "huzaifa", lastName: "hassan", age: 20 },
  { firstName: "ali", lastName: "hassan", age: 22 },
  { firstName: "ahmed", lastName: "ali", age: 24 }
];

const addPerson = function (firstName, lastName, age) {
  person.push({
    firstName: firstName,
    lastName: lastName,
    age: Number(age)
  });
};

const btnShowForm = document.getElementById("btnShowForm");
const btnViewList = document.getElementById("btnViewList");
const contentArea = document.getElementById("contentArea");

btnViewList.addEventListener("click", function () {
  contentArea.innerHTML = "";

  const listHeading = document.createElement("h2");
  listHeading.textContent = "Person List";
  contentArea.appendChild(listHeading);

  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;
  contentArea.appendChild(table);

  const tableBody = table.querySelector("tbody");
  person.forEach(function (c) {
    const row = tableBody.insertRow();
    row.insertCell().textContent = c.firstName;
    row.insertCell().textContent = c.lastName;
    row.insertCell().textContent = c.age;
  });
});

// 2. Add Person Form Handler
btnShowForm.addEventListener("click", function () {
  contentArea.innerHTML = ""; 

  if (person.length >= 4) {
    alert("Maximum number of persons added.");
    return;
  }

  const form = document.createElement("form");
  form.innerHTML = `
    <label for="firstName">First Name:</label>
    <input type="text" id="firstName" name="firstName" required>

    <label for="lastName">Last Name:</label>
    <input type="text" id="lastName" name="lastName" required>

    <label for="age">Age:</label>
    <input type="number" id="age" name="age" required>

    <input type="submit" value="Submit Person">
  `;
  contentArea.appendChild(form);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const age = document.getElementById("age").value;

    addPerson(firstName, lastName, age);

    form.innerHTML = `
      <p id="success">Person added successfully!</p>
      <button type="button" id="addAnother">Add Another Person</button>
    `;

    document.getElementById("addAnother").addEventListener("click", function () {
      btnShowForm.click(); 
    });
  });
});