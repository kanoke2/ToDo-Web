var accountInfo, globalInfo = {
    username: ['kanoke2', 'wicky', 'crookedTree'],
    password: ['password1', 'password2', 'password3'],
    tasks: [[], [], []]
}

let btnLogin = document.getElementById('btnSubmit');

function checkTasks() {
    console.log(globalInfo.username);
}

function addTask() {
    console.log("Task to add:");
    accountInfo.tasks.push("")
}

function removeTask() {
    console.log("Task to remove:");
}

function resetTask() {
    console.log("Task to reset:");

}

function login() {
    let pword = document.getElementById("password").value;
    let uname = document.getElementById("username").value;

    alert('logging in');
    if (uname.length > 0 && pword.length > 0) {
        for (let i = 0; i < globalInfo.username.length; i++) {

            if (uname == globalInfo.username[i] && pword == globalInfo.password[i]) {
                alert('success!')
                window.location = "./ToDo.html";
                break;
            }

            else if (pword != globalInfo.password[i]) {
                alert('Incorrect password/username.');
            }

            else {
                continue;
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', init(), false);
function init() {
    btnLogin.addEventListener('click', login());
}
