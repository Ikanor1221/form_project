const pass = document.querySelector("#pass");
const confirmPass = document.querySelector("#confirm-pass");
const submitButton = document.querySelector("#submitButton");
const form =document.querySelector("form")

form.addEventListener("submit", (e) => {

        if (pass.value == confirmPass.value) {
            return;
        }
        else {
            confirmPass.classList.add("error");
            e.preventDefault();
            return;
        }
    }   
)

confirmPass.addEventListener("keyup", (e) => {

    if (pass.value == confirmPass.value) {
        confirmPass.classList.remove("error");
        return;
    }
    else {
        confirmPass.classList.add("error");
        return;
    }
}   
)

pass.addEventListener("keyup", (e) => {

    if (pass.value == confirmPass.value) {
        confirmPass.classList.remove("error");
        return;
    }
    else {
        confirmPass.classList.add("error");
        return;
    }
}   
)
