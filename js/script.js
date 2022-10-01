const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");


setInterval(() => {
  let date = new Date();

  const currentSeconds = date.getSeconds();
  seconds.style.transform = `rotate(${currentSeconds * 6 + 90}deg)`;

  const currentMinutes = date.getMinutes();
  minutes.style.transform = `rotate(${currentMinutes * 6 + 90}deg)`;


  const currentHours = date.getHours();
  hours.style.transform = `rotate(${currentHours * 15 + 90}deg)`;
}, 1000);
