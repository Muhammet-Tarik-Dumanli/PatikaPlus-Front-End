let nameSpan = document.getElementById("myName");
let visiterName = prompt("Lütfen adınızı giriniz: ");

while (visiterName === null || visiterName.trim() === "") {
  alert("Geçerli bir isim girmelisiniz.");
  visiterName = prompt("Lütfen adınızı tekrar giriniz:");
}

nameSpan.innerText = visiterName.trim();

function showTime() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");

  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const dayName = days[now.getDay()];

  let currentTime = `${hours}:${minutes}:${seconds} - ${dayName}`;
  let clockDiv = document.getElementById("myClock");

  clockDiv.textContent = currentTime;
}

setInterval(showTime, 1000);
