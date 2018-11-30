const hoursHand = document.querySelector('.hour-hand');
const minsHand = document.querySelector('.min-hand');
const secondsHand = document.querySelector('.second-hand');

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  const secondsDegres = ((seconds / 60) * 360) + 90;
  const minsDegres = ((mins / 60) * 360) + 90;
  const hoursDegres = ((hours / 12) * 360) + 90;

  secondsHand.style.transform = `rotate(${secondsDegres}deg)`;
  minsHand.style.transform = `rotate(${minsDegres}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegres}deg)`;
};

setInterval(setDate,1000);