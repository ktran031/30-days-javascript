const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const currentTime = document.querySelector('#current-time span');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) *360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // console.log(`${hours}:${mins}:${seconds }`);
    currentTime.innerHTML = `${hours}:${mins}:${seconds }`;
}

setInterval(setDate, 1000);

