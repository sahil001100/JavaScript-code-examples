const form = document.getElementById("signup");
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    //handling form submission
    const name = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    document.writeln(`Name: ${name}, Email: ${email}`);


    // form validation
    const fname = form.fname.value;
    const emailadd = form.email.value;
    if (fname.trim() === "" ) {
        alert("Please fill in your name.");
    } else if (emailadd.trim() === "" || !emailadd.includes("@")) {
        alert("Please fill in a valid email.");
    } else {
        alert("Form submitted successfully!");
    }

    
});