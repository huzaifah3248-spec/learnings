let person = [{ firstName: "huzaifa", lastName:"hassan", age:20},{
    firstName: "ali", lastName:"hassan", age:22},
    {firstName: "ahmed", lastName:"ali", age:24}
]



let addPerson = function(firstName, lastName, age ) {
    person.push({firstName: firstName, lastName: lastName, age:Number(age)}
    );
    
    }

    let div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = "<h1><b> Add Person</b></h1>";
    div.innerHTML += "<p>Click the button to add a new person.</p>";

    let buttonform = document.createElement("button");
    buttonform.innerHTML = "Add Person";
    div.appendChild(buttonform);

    buttonform.addEventListener("click", function() {
        if (person.length >= 4) {
            alert("Maximum number of persons added.");
            return;
        }

        if (document.querySelector("form")) {
            return;
        }

        let form = document.createElement("form");
        div.appendChild(form);
         form.innerHTML = "<label for='firstName'>First Name:</label><input type='text' id='firstName' name='firstName'><br>" + 
        "<label for='lastName'>Last Name:</label><input type='text' id='lastName' name='lastName'><br> " +
        "<label for='age'>Age:</label><input type='number' id='age' name='age'><br>" +
        "<input type='submit' value='Add Person'>";

    form.addEventListener("submit", function(e) {
    e.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;

    addPerson(firstName, lastName, age);

    form.innerHTML = "<p id='success'>Person added successfully!</p>";
    form.innerHTML += "<button id='addAnother'>Add Another Person</button>";

    });

    form.innerHTML += "<button id='viewList'>View Person List</button>";
    document.querySelector("#viewList").addEventListener("click", function() {
       let existingList = document.querySelector("#personList");
       if (existingList) existingList.remove();
        let listDiv = document.createElement("div");
        listDiv.id = "personList";
        div.appendChild(listDiv);
        listDiv.innerHTML = "<h2>Person List</h2>";
        let table = document.createElement("table");
        table.border = "1";
        table.innerHTML = "<thead><tr><th>First Name</th><th>Last Name</th><th>Age</th></tr></thead><tbody></tbody>";
        listDiv.appendChild(table);
        let tableBody = table.querySelector("tbody");
        person.forEach(function(c){
            let row = tableBody.insertRow();
            row.insertCell().textContent = c.firstName;
            row.insertCell().textContent = c.lastName;
            row.insertCell().textContent = c.age;
        });
       
    document.querySelector("#addAnother").addEventListener("click", function () {
      form.remove();
    });
    });
});
