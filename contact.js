// contact page Form validation

function feedbackFormValidation(event) {
    event.preventDefault()
    let name = document.getElementById("name").value.trim()
    let phoneNo = document.getElementById("phoneNo").value.trim()
    let rating = document.getElementById("rating").value.trim()
    let feedback = document.getElementById("feedback").value.trim()

    let originalColor = document.getElementById("name-lbl").style.color;


    // Mobile Number Regular Expression
    const phoneNoRegExp = /^[6789]\d{9}$/

    //Username validation

    if (name === "") {
        showError("name-lbl", "*Invalid Name");
        backToNormal("name-lbl", "Name", originalColor);
    }

    else if(!phoneNoRegExp.test(phoneNo)){
        showError("phoneNo-lbl", "*Invalid Phone Number");
        backToNormal("phoneNo-lbl", "Phone", originalColor);
    }

    //Rating Validation

    else if (rating === "" || (rating < 0 && rating > 10)) {
        showError("rating-lbl", "*Rating between 0 to 10");
        backToNormal("rating-lbl", "Rating", originalColor);

    }

    //Feedback Validation

    else if (feedback === "") {
       showError("feedback-lbl", "*Feedback message Required");
       backToNormal("feedback-lbl", "Feedback", originalColor);
    }
    // Form Validation and Show Popup Layer and Popup message
    else {
        showResponse();
    }

}

function showError(id, message) {
  document.getElementById(id).innerText = message;
  document.getElementById(id).style.color = "red";
  document.getElementById(id).style.fontWeight = "bold";
}

function backToNormal(id, message, originalColor) {
  setTimeout(() => {
    document.getElementById(id).innerHTML = message;
    document.getElementById(id).style.color = originalColor;
    document.getElementById(id).style.fontWeight = "normal";
  }, 3000);
}

function showResponse(){
    setTimeout(function () {
            document.querySelector(".overlay-response").style.display = "flex"
    }, 2000)
}


//Close Popup Layer and Popup Message

function closePopUpResponse() {
    document.querySelector(".overlay-response").style.display = "none"
    document.getElementById("feedback-form").reset()
}
