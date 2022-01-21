var formData = document.getElementById("submit");


submit.addEventListener("click", addData)

var row = 1;

function addData() {

    var employeeName = document.getElementById("employeeName").value;
    var taskId = document.getElementById("taskId").value;
    var submissionDate = document.getElementById("submissionDate").value;
    var projectName = document.getElementById("projectName").value;

    if (!taskId) {
        alert("Task Id is required to be proceed further")
        return;
    }

    if (!submissionDate) {
        alert("Submission Date is required to be proceed further")
        return;
    }


    var displayBox = document.getElementById("displayBox");

    var rowNew = displayBox.insertRow(row);

    var cell1 = rowNew.insertCell(0);
    var cell2 = rowNew.insertCell(1);
    var cell3 = rowNew.insertCell(2);
    var cell4 = rowNew.insertCell(3);
    var cell5 = rowNew.insertCell(4);



    cell1.innerHTML = employeeName;
    cell2.innerHTML = taskId;
    cell3.innerHTML = submissionDate;
    cell4.innerHTML = projectName;
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;;

}