const EmailInput = document.getElementById("Email")
const SubmitBud = document.getElementById("SubmitBud")
const Errortag = document.querySelector(".errorTag")



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

    PopMan(EmailInput.value)
    EmailInput.value = ""
})


function PopMan(userEmail){
    const removElement = document.querySelector("#popup")
    if(removElement){
        removElement.remove()
    }

    const PopParent = document.createElement("div")
    PopParent.id = "popup"
    PopParent.innerHTML = `
        <div class="minipop">
            <div>
                <span class="fontwraper">
                    <svg class="svg-inline--fa fa-circle-check dids" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                    </svg>
                </span>

                <h1>Thanks for subscribing!</h1>

                <p>
                    A confirmation code has been sent to ${userEmail ?? ''} Please
                    open it and click the button inside to confirm your subscribtion.
                </p>

                <button id="remove">Dismiss message</button>
            </div>
        </div>
    `;
    document.body.append(PopParent)

    const ddd = document.querySelector("#remove")
    if(ddd){
        ddd.addEventListener("click", ()=>{
            if(PopParent){
                PopParent.remove()
            }
        })
    }

}
