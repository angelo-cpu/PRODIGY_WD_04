document.addEventListener("DOMContentLoaded", () => {
    var typed = new Typed("#animated-text", {
      strings: [
        "Aspiring Full Stack Developer.",
        "I create interactive websites.",
      ],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
      showCursor: false,
    });
  });
  
  var tablinks = document.getElementsByClassName("tab_link");
  var tabcontents = document.getElementsByClassName("tab_content");
  
  function opentab(tabname) {
    for (let tablink of tablinks) {
      tablink.classList.remove("active");
    }
  
    for (let tabcontent of tabcontents) {
      tabcontent.classList.remove("active_content");
    }
  
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active_content");
  }
  
  var sidemenu = document.getElementById("sidemenu");
  
  function openmenu() {
    sidemenu.style.right = "0";
  }
  
  function closemenu() {
    sidemenu.style.right = "-50%";
  }
  
  const scriptURL = "https://script.google.com/macros/s/AKfycbysjS3eZg0N99SB7VxaZZSl52gay6ZcUCY1Bofi1MCXn4XnBlfYcrMUVAdk9KezGOo/exec";
  const form = document.forms["submit-to-google-sheet"];
  const msg = document.getElementById("msg");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(() => {
          msg.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  });
  