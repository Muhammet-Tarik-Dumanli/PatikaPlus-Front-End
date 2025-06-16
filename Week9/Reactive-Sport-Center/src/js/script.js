const classes = [
  {
    id: 1,
    category: "Yoga",
    img: "images/yoga.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minus qui molestiae veniam aperiam, esse similique beatae est. Itaque rerum soluta consequatur eaque minus ea libero illum doloremque nemo debitis.",
    time: [
      "Saturday-Sunday: 8:00am - 10.00am",
      "Monday-Tuesday: 10:00am - 12.00pm",
      "Wednesday-Friday: 3:00pm - 6.00pm",
    ],
  },
  {
    id: 2,
    category: "Group",
    img: "images/group.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minus qui molestiae veniam aperiam, esse similique beatae est. Itaque rerum soluta consequatur eaque minus ea libero illum doloremque nemo debitis.",
    time: [
      "Saturday-Sunday: 12:00pm - 4.00pm",
      "Tuesday-Thursday: 2:00pm - 4.00pm",
      "Wednesday-Friday: 6:00pm - 9.00pm",
    ],
  },
  {
    id: 3,
    category: "Solo",
    img: "images/solo.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minus qui molestiae veniam aperiam, esse similique beatae est. Itaque rerum soluta consequatur eaque minus ea libero illum doloremque nemo debitis.",
    time: [
      "Saturday-Sunday: 10:00am - 12.00am",
      "Monday-Tuesday: 12:00pm - 2.00pm",
      "Wednesday-Friday: 2:00pm - 4.00pm",
    ],
  },
  {
    id: 4,
    category: "Stretching",
    img: "images/stret.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minus qui molestiae veniam aperiam, esse similique beatae est. Itaque rerum soluta consequatur eaque minus ea libero illum doloremque nemo debitis.",
    time: [
      "Saturday-Sunday: 11:00am - 1.00pm",
      "Tuesday-Thursday: 10:00am - 12.00pm",
      "Wednesday-Friday: 10:00am - 12.00pm",
    ],
  },
];

(function () {
  "use strict";

  // Adds 'header-scrolled' class to the header when the user scrolls down more than 100px
  // While scrolling the page, the navbar will always appear on the page and its background will be set to #355592
  var header = document.getElementById("header");
  var headerScrolled = () => {
    if (window.scrollY > 100) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  };

  // Listen for scroll events and run the function
  window.addEventListener("scroll", headerScrolled);

  // Run headerScrolled function once when the page finishes loading
  window.addEventListener("load", headerScrolled);

  // Select all category buttons and the container for class details
  const typeButtons = document.querySelectorAll(".category-btn");
  const classesDetails = document.querySelector(".classes-details");

  // Set initial active button style
  typeButtons[0].style.backgroundColor = "#FE9B01";

  // Automatically load the first class on page load
  const firstType = typeButtons[0].dataset.category;
  const firstClass = classes.find((c) => c.category === firstType);
  if (firstClass) {
    displaySession(firstClass, classesDetails);
  }

  // Add click event listener to each category button
  typeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      typeButtons.forEach((b) => {
        b.style.backgroundColor = "#325493";
      });

      // Highlight the clicked button
      btn.style.backgroundColor = "#F09E0D";

      classesDetails.innerHTML = "";
      const selectedType = btn.dataset.category;
      const selectedClass = classes.find((c) => c.category === selectedType);
      if (selectedClass) {
        displaySession(selectedClass, classesDetails);
      }
    });
  });

  /*
    Dynamically creates and displays session details and image
    for the selected class category in the provided container.
   */
  function displaySession(data, container) {
    let descBox = document.createElement("div");
    descBox.classList.add("info-box");
    descBox.innerHTML = `
    <h3>Why are your ${data.category}?</h3>
    <p>${data.description}</p>
    <h3>When comes ${data.category} Your Time.</h3>
    <p>${data.time[0]}</p>
    <p>${data.time[1]}</p>
    <p>${data.time[2]}</p>
  `;

    let image = document.createElement("img");
    image.classList.add("classes-image");
    image.src = `${data.img}`;
    image.alt = `${data.category}`;

    container.append(descBox);
    container.append(image);
  }

  // Selects the BMI pointer and input fields for height and weight for calculate BMI
  const pointer = document.querySelector(".bmi-pointer");
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");

  /*
    Calculates BMI from user input and updates the position
    of the pointer on the BMI scale image based on the result.
 */
  function updateBMI() {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (!height || !weight || height < 50 || weight < 20) return;

    const bmi = weight / (height / 100) ** 2;
    let percentage = 0;

    if (bmi > 13.5 && bmi < 18.5) {
      percentage = 7 + ((bmi - 13.5) * (23 - 7)) / (18.5 - 13.5);
    } else if (bmi >= 18.5 && bmi < 25) {
      percentage = 23 + ((bmi - 18.5) * (40 - 23)) / (25 - 18.5);
    } else if (bmi >= 25 && bmi < 30) {
      percentage = 40 + ((bmi - 25) * (55 - 40)) / (30 - 25);
    } else if (bmi >= 30 && bmi < 35) {
      percentage = 55 + ((bmi - 30) * (71 - 55)) / (35 - 30);
    } else if (bmi >= 35 && bmi <= 50) {
      percentage = 71 + ((bmi - 35) * (88 - 71)) / (50 - 35);
    } else {
      percentage = 7;
    }

    if (percentage >= 6 && percentage <= 88) {
      pointer.style.left = `${percentage}%`;
    }
  }

  // Recalculate BMI whenever the user types in height or weight
  heightInput.addEventListener("input", updateBMI);
  weightInput.addEventListener("input", updateBMI);
})();
