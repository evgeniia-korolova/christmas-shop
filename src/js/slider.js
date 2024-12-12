export default function handleSlider() {
	const sliderWindow = document.querySelector('.slider__window');
	const sliderLine = document.querySelector('.slider__line');
	const btnRight = document.querySelector('.arrow-right');
	const btnLeft = document.querySelector('.arrow-left');

	const marginLeft = window.innerWidth > 768 ? 84 : 0;

	const visibleWidth = sliderWindow.clientWidth - marginLeft;
	const totalWidth = 1990;

	const maxOffset = totalWidth - visibleWidth;
	const stepsCount = window.innerWidth >= 768 ? 3 : 6;
	const stepWidth = maxOffset / stepsCount;
	let count = 0;
	let currentOffset = 0;

	const slideRight = () => {
		if (currentOffset < maxOffset) {
			currentOffset += stepWidth;
			count++;
			btnLeft.classList.remove('btn-disabled');
			sliderLine.style.transform = `translateX(-${currentOffset}px)`;			
		} 
		 if (count === stepsCount) {
			btnRight.classList.add('btn-disabled');
		}
	};

	const slideLeft = () => {
		if (currentOffset > 0) {
			currentOffset -= stepWidth;
			count--;
			btnRight.classList.remove('btn-disabled');
			if (currentOffset < 0) currentOffset = 0; // не выходим за пределы
			sliderLine.style.transform = `translateX(-${currentOffset}px)`;
		} 
		if (count === 0) {
			btnLeft.classList.add('btn-disabled');
		}
	};

	document.querySelector('.arrow-right').addEventListener('click', slideRight);
	document.querySelector('.arrow-left').addEventListener('click', slideLeft);

}
