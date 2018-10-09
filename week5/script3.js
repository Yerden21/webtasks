function addTable() {
    let name = document.querySelector("#name").value;
    let surname = document.querySelector("#surname").value;
    let faculty = document.querySelector("#faculty").value;

    var ok = 1;
    if (name === '') {
        document.querySelector("#name").classList.add("error");
        ok = 0;
    }
    else document.querySelector("#name").classList.remove("error");
    if (surname === '') {
        document.querySelector("#surname").classList.add("error");
        ok = 0;
    }
    else document.querySelector("#surname").classList.remove("error");
    if (faculty == -1) {
        document.querySelector("#faculty").classList.add("error");
        ok = 0;
    }
    else document.querySelector("#faculty").classList.remove("error");
    if (ok == 1) {
        var row = document.querySelector("#students").insertRow();
        var cell = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        cell.innerHTML = name;
        cell1.innerHTML = surname;
        cell2.innerHTML = faculty
    }

}
document.querySelector("#addStudent").onclick = function() {
  addTable();
};