const form = document.getElementById("signup");
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const name = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    document.writeln(`Name: ${name}, Email: ${email}`);
});