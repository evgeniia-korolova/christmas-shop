const sliderWindow = document.querySelector('.slider__window');
const sliderLine = document.querySelector('.slider__line');
const btnRight = document.querySelector('.arrow-right');
const btnLeft = document.querySelector('.arrow-left');

// Определяем параметры для разных разрешений
const marginLeft = window.innerWidth > 768 ? 84 : 0; // margin-left для 1440px
console.log(`margingLeft : ${marginLeft}`);

// Ширина видимой области с учетом padding/margin
const visibleWidth = sliderWindow.clientWidth - marginLeft;
console.log(`visibleWidth : ${visibleWidth}`);

// Полная ширина контента
const totalWidth = 1990;
console.log(`totalWidth : ${totalWidth}`);

const maxOffset = totalWidth - visibleWidth;
console.log(`maxOffset : ${maxOffset}`);

// Рассчитываем шаг с учетом количества кликов, которое требуется
const stepsCount = window.innerWidth >= 1440 ? 3 : 6;
const stepWidth = maxOffset / stepsCount; // на 3 или 6 кликов
console.log(`stepWidth : ${stepWidth} - stepCount : ${stepsCount}`);

console.log(stepWidth);

let currentOffset = 0;

// Функция для сдвига вправо
const slideRight = () => {
	if (currentOffset < maxOffset) {
		currentOffset += stepWidth;
		btnLeft.classList.remove('btn-disabled');
		console.log(`currentOffset : ${currentOffset}`);

		sliderLine.style.transform = `translateX(-${currentOffset}px)`;
	} else if (currentOffset < maxOffset + stepWidth) {
		btnRight.classList.add('btn-disabled');
	}
};

// Функция для сдвига влево
const slideLeft = () => {
	if (currentOffset > 0) {
		currentOffset -= stepWidth;
		btnRight.classList.remove('btn-disabled');
		if (currentOffset < 0) currentOffset = 0; // не выходим за пределы
		sliderLine.style.transform = `translateX(-${currentOffset}px)`;
	} else if (currentOffset < maxOffset + stepWidth) {
		btnLeft.classList.add('btn-disabled');
	}
};

document.querySelector('.arrow-right').addEventListener('click', slideRight);
document.querySelector('.arrow-left').addEventListener('click', slideLeft);

function updateSliderPosition() {
	sliderLine.style.transform = `translateX(-${currentOffset}px)`;

	// Блокируем кнопку "вправо", если достигнут конец слайдера
	if (currentOffset >= maxOffset) {
		btnRight.disabled = true;
	} else {
		btnRight.disabled = false;
	}

	// Блокируем кнопку "влево", если находимся в начале слайдера
	if (currentOffset <= 0) {
		btnLeft.disabled = true;
	} else {
		btnLeft.disabled = false;
	}
}
