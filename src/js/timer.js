export default function setTimer() {
	const deadline = '2026-01-01T00:00:00';

	function getTimeRemaining(endtime) {
		const total = Date.parse(endtime) - Date.parse(new Date());
		const days = Math.floor(total / (1000 * 60 * 60 * 24));
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const seconds = Math.floor((total / 1000) % 60);

		return {
			total,
			days,
			hours,
			minutes,
			seconds,
		};
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector);
		const days = timer.querySelector('.timer__item .days');
		const hours = timer.querySelector('.timer__item .hours');
		const minutes = timer.querySelector('.timer__item .minutes');
		const seconds = timer.querySelector('.timer__item .seconds');
		const timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.textContent = t.days;
			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock('.timer', deadline);
}
