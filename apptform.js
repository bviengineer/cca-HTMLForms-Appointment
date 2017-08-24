var firstName = document.getElementById("fname"),
// const lastName = document.getElementById("lname"),
// const address = document.getElementById("addr"),
// const telephone = document.getElementById("phone"),
// const email = document.getElementById("email"),
// const apptDate = document.getElementById("appt-date"),
// const apptTime = document.getElementById("appt-time"),
var resetBtn = document.getElementById("resetForm");

resetBtn.addEventListener("click", function() {
    fname.value = "";
    // lname.value = "";
    // // addr.value = "";
    // // phone.value = "";
    // // email.value = "";
    // // appt-date.value = "";
    alert(fname.value);
});
