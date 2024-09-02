document.getElementById('validateButton').addEventListener('click', function() {
    validateInput('username');
    validateInput('email');
    validateInput('password');
});

document.querySelectorAll('.input-field').forEach(input => {
    input.addEventListener('focus', function() {
        input.classList.remove('error');
        document.getElementById(input.id + 'Error').classList.remove('visible');
    });

    input.addEventListener('blur', function() {
        if (!input.value) {
            input.classList.add('error');
            document.getElementById(input.id + 'Error').classList.add('visible');
        }
    });
});

function validateInput(id) {
    const input = document.getElementById(id);
    if (!input.value) {
        input.classList.add('error');
        document.getElementById(id + 'Error').classList.add('visible');
    }
}

function check(){
   var inputs = document.querySelectorAll('input');
   inputs.forEach(input => {
        if (!input.value) {
            alert(`${input.name} is empty!`);
        } else {
            alert(`${input.name} is filled with: ${input.value}`);
        }
    });}