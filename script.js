function validateForm() {  
    // Get the form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    // printing the values in console as of now as we are not connect to database 
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
    alert("Your Message: "+message);
  
  }
