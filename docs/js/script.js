let allDrums = document.querySelectorAll(".drum");

const sounds = {
  A: new Audio("./assets/sounds/boom.wav"),
  S: new Audio("./assets/sounds/clap.wav"),
  D: new Audio("./assets/sounds/hihat.wav"),
  F: new Audio("./assets/sounds/kick.wav"),
  G: new Audio("./assets/sounds/openhat.wav"),
  H: new Audio("./assets/sounds/ride.wav"),
  J: new Audio("./assets/sounds/snare.wav"),
  K: new Audio("./assets/sounds/tink.wav"),
  L: new Audio("./assets/sounds/tom.wav"),
};

for (let i = 0; i < allDrums.length; i++) {
  allDrums[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml.toLowerCase());
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key.toUpperCase());
  buttonAnimation(event.key);
});

function makeSound(key) {
  //   switch (key) {
  //     case "A":
  //       var boom = new Audio("./assets/sounds/boom.wav");
  //       boom.play();
  //       break;
  //     case "S":
  //       var boom = new Audio("./assets/sounds/clap.wav");
  //       boom.play();
  //       break;
  //     case "D":
  //       var boom = new Audio("./assets/sounds/hihat.wav");
  //       boom.play();
  //       break;
  //     case "F":
  //       var boom = new Audio("./assets/sounds/kick.wav");
  //       boom.play();
  //       break;
  //     case "G":
  //       var boom = new Audio("./assets/sounds/openhat.wav");
  //       boom.play();
  //       break;
  //     case "H":
  //       var boom = new Audio("./assets/sounds/ride.wav");
  //       boom.play();
  //       break;
  //     case "J":
  //       var boom = new Audio("./assets/sounds/snare.wav");
  //       boom.play();
  //       break;
  //     case "K":
  //       var boom = new Audio("./assets/sounds/tink.wav");
  //       boom.play();
  //       break;
  //     case "L":
  //       var boom = new Audio("./assets/sounds/tom.wav");
  //       boom.play();
  //       break;
  //     default:
  //       console.log(key);
  //   }

  if (sounds[key]) {
    sounds[key].currentTime = 0;
    sounds[key].play();
  } else {
    console.log("Undefined key: ", key);
  }

  changeBackground();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  if (!activeButton) return;

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

function changeBackground() {
  const colors = ["#283149", "#404B69", "#00818A", "#DA0463"];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

