const secHand = document.querySelector(".secHand");
const minHand = document.querySelector(".minHand");
const hourHand = document.querySelector(".hourHand");

function setDate() {
	const date = new Date();

	const seconds = date.getSeconds();
	const secondDegrees = (seconds / 60) * 360 + 90;
	secHand.style.transform = ` translateY(-50%) rotate(${secondDegrees}deg)`;

	const minutes = date.getMinutes();
	const minuteDegrees = (minutes / 60) * 360 + 90;
	minHand.style.transform = ` translateY(-50%) rotate(${minuteDegrees}deg)`;

	const hours = date.getHours();
	const hourDegrees = (hours / 12) * 360 + 90;
	hourHand.style.transform = ` translateY(-50%) rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
