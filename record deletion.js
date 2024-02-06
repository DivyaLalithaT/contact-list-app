const form = document.getElementById("loginForm");
const table = document.getElementById("userTable");
const userList = [];

function displayUserTable() {
    const tbody = table.querySelector("tbody");

    tbody.innerHTML = "";

    userList.forEach((user, index) => {
        const row = document.createElement("tr");

        Object.values(user).forEach((value) => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        const deleteCell = document.createElement("td");
        const deleteIcon = document.createElement("span");
        deleteIcon.classList.add("delete-icon");
        deleteIcon.textContent = "❌";
        deleteIcon.onclick = function () {
            deleteUser(index);
        };
        deleteCell.appendChild(deleteIcon);
        row.appendChild(deleteCell);

        tbody.appendChild(row);
    });
}

function userSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const formValues = {};

    formData.forEach((value, key) => {
        formValues[key] = value;
    });

    console.log("Form values:", formValues);
    userList.push(formValues);
    displayUserTable();

    form.reset();
}

function deleteUser(index) {
    userList.splice(index, 1);
    displayUserTable();
}
