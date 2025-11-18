// Book Table Form Validation
// Date Format Helper
let today = new Date();
today.setDate(today.getDate() + 1);
let yyyy = today.getFullYear();
let mm = String(today.getMonth() + 1).padStart(2, "0");
let dd = String(today.getDate()).padStart(2, "0");
let minDate = `${yyyy}-${mm}-${dd}`;
document.getElementById("bookingDate").setAttribute("min", minDate);

async function tableBookingFormValidation(event) {
  event.preventDefault();
  let name = document.getElementById("name").value.trim();
  let phoneNo = document.getElementById("phoneNo").value.trim();
  let bookingDate = document.getElementById("bookingDate").value.trim();
  let bookingTime = document.getElementById("bookingTime").value.trim();
  let seatCount = document.getElementById("seatCount").value.trim();
  let hours = parseInt(bookingTime.substring(0, 2));
  let status = document.getElementById("status");

  bookingStatus(status, "Validating.....");
  showOverLayer(".overlay-booking");
  await pause(2000);
  await nextFrame();

  //Phone Number Regular Expression

  var PhoneRegExp = /^[6789]\d{9}$/;

  var originalColor = document.getElementById("name-lbl").style.color;

  //Username Validation
  if (name === "") {
    bookingStatus(status, "Validation Failed.....");
    closeOverLayer();
    showError("name-lbl", "*Enter a valid name");
    backToNormal("name-lbl", "*Name", originalColor);
  }

  //Phone Number Validation
  else if (!PhoneRegExp.test(phoneNo)) {
    bookingStatus(status, "Validation Failed.....");
    closeOverLayer();
    showError("phoneNo-lbl", "*Enter a valid Number");
    backToNormal("phoneNo-lbl", "*Phone", originalColor);
  }

  // Date validation
  else if (bookingDate === "") {
    bookingStatus(status, "Validation Failed......");
    closeOverLayer();
    showError("bookingDate-lbl", "Pick a Date");
    backToNormal("bookingDate-lbl", "*Date", originalColor);
  }

  //Time Validation
  else if (bookingTime === "" || (hours >= 0 && hours <= 9) || hours == 23) {
    bookingStatus(status, "Validation Failed.......");
    closeOverLayer();
    showError("bookingTime-lbl", "*Shop timing 10:00 Am to 11:00 pm");
    backToNormal("bookingTime-lbl", "*Time", originalColor);
  }

  //Seats  Validation
  else if (
    seatCount === "" ||
    parseInt(seatCount) > 10 ||
    parseInt(seatCount) < 1
  ) {
    bookingStatus(status, "Validation Failed.......");
    closeOverLayer();
    showError("seatCount-lbl", "Maximum seats per booking is 10");
    backToNormal("seatCount-lbl", "*Seats", originalColor);
  } else {
    bookingStatus(status, "Sending Booking....");
    await pause(2000);
    await nextFrame();

    bookingStatus(status, "Booking Successful.......");
    closeOverLayer();
    await pause(2000);
    document.getElementById("booking-info-form").reset();
  }
}

function bookingStatus(status, message) {
  status.innerText = message;
}

function closeOverLayer() {
  setTimeout(() => {
    document.querySelector(".overlay-booking").style.display = "none";
  }, 2000);
}

function showError(id, message) {
  document.getElementById(id).innerText = message;
  document.getElementById(id).style.color = "red";
  document.getElementById(id).style.fontWeight = "bold";
}

function showOverLayer(name) {
  document.querySelector(name).style.display = "flex";
}

function backToNormal(id, message, originalColor) {
  setTimeout(() => {
    document.getElementById(id).innerHTML = message;
    document.getElementById(id).style.color = originalColor;
    document.getElementById(id).style.fontWeight = "normal";
  }, 4000);
}

const pause = (ms) => new Promise((res) => setTimeout(res, ms));
const nextFrame = () => new Promise((res) => requestAnimationFrame(res));
