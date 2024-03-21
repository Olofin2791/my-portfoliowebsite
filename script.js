let contact = function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "olofinabiodun42@gmail.com",
    Password: "Olofin2791",
    To: "olofinabiodun42@gmail.com",
    From: document.getElementById("email").value,
    Subject: "Contact form",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email:" +
      document.getElementById("email").value +
      "<br> write:" +
      document.getElementById("Submit").value,
  }).then((message) => alert("Message Sent"));
};

let readMoreBtn = document.querySelector(".read-more-btn");
let text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
});
