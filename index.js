function showFullName() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var fullName = firstName + " " + lastName;
    alert("Full name: " + fullName);
    console.log("Full name: " + fullName);
  }