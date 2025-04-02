/* hospital.js */

document.addEventListener("DOMContentLoaded", () => {
  let doctors = document.querySelectorAll(".team");
  let cards = document.querySelectorAll(".serviceCard");

  let count = 0;

  // Positioning doctors for slider
  doctors.forEach((card, index) => {
    card.style.left = `${index * 100}%`;
  });

  function myFun() {
    doctors.forEach((curValue) => {
      curValue.style.transform = `translateX(-${count * 100}%)`;
    });
  }

  setInterval(() => {
    count++;
    if (count === doctors.length) {
      count = 0;
    }
    myFun();
  }, 3000);

  // Descriptions for each service
  const descriptions = {
    "chest and respiratory": "The chest (thorax) houses vital organs like the heart and lungs, enabling breathing and oxygen circulation.",
    "laboratory": "The laboratory conducts medical tests to diagnose diseases and monitor health conditions accurately.",
    "physiotherapy": "Physiotherapy helps restore movement and function through exercises, manual therapy, and rehabilitation techniques.",
    "nutrition": "Nutrition focuses on a balanced diet to maintain health, prevent diseases, and support overall well-being."
  };

  // Event listener for service cards
  cards.forEach((curCard) => {
    curCard.addEventListener("click", () => {
      let serviceName = curCard.lastElementChild.innerHTML.toLowerCase().trim();
      let description = descriptions[serviceName] || "No description available.";

      let div = document.createElement("div");
      div.classList.add("detailCard");
      div.innerHTML = `
          <i id="icon" class="fa-solid fa-xmark"></i>
          <img src=${curCard.firstElementChild.src} alt="">
          <h2>${curCard.lastElementChild.innerHTML}</h2>
          <p>${description}</p>   
      `;

      document.body.appendChild(div);

      document.querySelector("#icon").addEventListener("click", () => {
        div.remove();
      });
    });
  });

  document.getElementById("submitBtn").addEventListener("click", () => {
    // Get input elements
    let nameInput = document.querySelector("input[placeholder='Enter Name']");
    let numberInput = document.querySelector("input[placeholder='Enter Number']");
    let dateInput = document.querySelector("input[type='date']");
    let timeInput = document.querySelector("input[type='time']");

    // Get input values
    let name = nameInput.value;
    let number = numberInput.value;
    let date = dateInput.value;
    let time = timeInput.value;

    // Check if all fields are filled
    if (name && number && date && time) {
      alert(`Appointment booked successfully!\nName: ${name}\nNumber: ${number}\nDate: ${date}\nTime: ${time}`);
      
      // Clear the input fields after submission
      nameInput.value = "";
      numberInput.value = "";
      dateInput.value = "";
      timeInput.value = "";
    } else {
      alert("Please fill in all fields before submitting.");
    }
  });
});
