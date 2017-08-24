const firstName = document.getElementById("fname"),
lastName = document.getElementById("lname"),
address = document.getElementById("addr"),
telephone = document.getElementById("phone"),
email = document.getElementById("email"),
apptDate = document.getElementById("appt-date"),
apptTime = document.getElementById("appt-time"),
resetBtn = document.getElementById("resetForm");

resetBtn.addEventListener("click", function() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("addr").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("appt-date").value = "";
    document.getElementById("appt-time").value = "";

});