let submitButton = document.querySelector('.submit-button')
let form = document.querySelector('.medlems-form')
let nameValue = document.querySelector('.name')
let emailValue = document.querySelector('.email')
let textareaValue = document.querySelector('.textarea')
let succesName = document.querySelector('.succes-name-p')
let succesModal = document.querySelector('.succes-modal')
let formContainer = document.querySelector('.form-con')
let alreadyInUse = document.querySelector('.in-use-con')
let statusCode
form.addEventListener('submit', (event) => {
    event.preventDefault()
})

submitButton.addEventListener('click', (event) => {
    
    if(nameValue.validity.valid && emailValue.validity.valid == true) {
        


        fetch("https://smuknu.webmcdm.dk/subscribe", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                name: nameValue.value,
                email: emailValue.value,
                message: textareaValue.value
            })
        })
        .then((response) => {
        response.json();
        statusCode = response.status
        
        })
        .then((responseData) => {
            console.log(statusCode)
            if(statusCode === 201) {
                succesModal.classList.add('succes-modalScript')
                formContainer.classList.add('form-conScript')    
            } else if (statusCode === 409) {
                emailValue.addEventListener("focus", (event) => {
                   emailValue.style.backgroundColor = "rgba(250, 150, 170, .2)";
                });
                alreadyInUse.innerHTML = `Den indtastede e-mail <em>${emailValue.value}</em> er allerede i brug, indtast venligst en anden`;
                emailValue.value = ""
            }
            emailValue.focus()
            succesName.innerHTML = nameValue.value
        })
    }
})

    

