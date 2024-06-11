function validateForm() {
    
    let nameInput = document.getElementById('name');
    let firstNameInput = document.getElementById('first_name');
    let emailInput = document.getElementById('email');
    
    let isValid = true; 
    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        nameInput.style.border = "2px solid red";
        isValid = false; 
    } else {
        nameInput.style.border = ""; 
    }

    
    if (firstNameInput.value.trim() === '') {
        alert('Please enter your first name.');
        firstNameInput.style.border = "2px solid red";
        isValid = false; 
    } else {
        firstNameInput.style.border = ""; 
    }

    
    if (emailInput.value.trim() === '') {
        alert('Please enter your email.');
        emailInput.style.border = "2px solid red";
        isValid = false; 
    } else {
        emailInput.style.border = ""; 
    }

    return isValid; 
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    document.getElementById('myForm').addEventListener('submit', function(event){
        let radio1 = document.getElementById('man');
        let radio2 = document.getElementById('woman');

        if (!radio1.checked && !radio2.checked) {
            alert('Please select one option.');
            event.preventDefault(); 
        }
    });
});