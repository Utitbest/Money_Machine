const EmailInput = document.getElementById("Email")
const SubmitBud = document.getElementById("SubmitBud")
const Errortag = document.querySelector(".errorTag")

// 

SubmitBud.addEventListener("click", (e)=>{
    e.preventDefault()

    // Validation
    if(EmailInput.value == ""){
        Errortag.textContent = "Field the form abeg";
        EmailInput.classList.add("changeBorder");
        return
    }

    if(EmailInput.value.includes("@") === false || EmailInput.value.includes(".") === false){
        Errortag.textContent = "Invalid Email Address";
        EmailInput.classList.add("changeBorder");
        return
    }

    if(EmailInput.value.search(/[^a-z0-9@.]/i) !== -1){
        Errortag.textContent = "No special character allowed!";
        EmailInput.classList.add("changeBorder");
        return
    }

    console.log("Form has been submitted")
    alert(`Form has been submitted welcome ${EmailInput.value}`)
})


