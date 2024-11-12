const sliderWindow = document.querySelector('.slider__window');
const sliderLine = document.querySelector('.slider__line');
const btnRight = document.querySelector('.arrow-right');
const btnLeft = document.querySelector('.arrow-left');

const stepWidth = 
		(1990 - sliderWindow.offsetWidth) /
		(window.innerWidth >= 768 ? 3 : 6)
	
console.log('step:', stepWidth);

 // Текущее смещение слайдера
let currentOffset = 0; // Текущее смещение слайдера
const maxOffset =
	sliderLine.scrollWidth - sliderWindow.clientWidth + 38;
    console.log(maxOffset)

const paddingOffset = 8 * 2; // Сумма левого и правого padding (если padding по 8px)
// const maxOffset =
// 	sliderLine.scrollWidth - (sliderWindow.clientWidth - paddingOffset);

// Функция для обновления смещения слайдера
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

btnRight.addEventListener('click', () => {
	if (currentOffset + stepWidth >= maxOffset) {
		currentOffset = maxOffset; // Ставим на точный конец
        console.log(`currentOffset : ${currentOffset}`);
	} else {
		currentOffset += stepWidth;
        console.log(`currentOffset : ${currentOffset}`);
	}
	updateSliderPosition();
});



btnLeft.addEventListener('click', () => {
	if (currentOffset - stepWidth >= 0) {
		currentOffset -= stepWidth;
	} else {
		currentOffset = 0; // Устанавливаем смещение на 0, если меньше нуля
	}
	updateSliderPosition();
});

// Первоначальная настройка
updateSliderPosition();

console.log( 'sliderWindow offsetWidth', sliderWindow.offsetWidth);
console.log('sliderWindow clientWidth', sliderWindow.clientWidth);
console.log('sliderWindow innertWidth', sliderWindow.innerWidth);
console.log('window innerWidth', window.innerWidth);
console.log('sliderLine scrollWidth', sliderLine.scrollWidth)
console.log(`sliderLine offsetWidth : ${sliderLine.offsetWidth}`);
console.log(`sliderLine contentWidth : ${sliderLine.contentWidth}`);
console.log(`maxOffset : ${maxOffset}`)
console.log(`currentOffset : ${currentOffset}`)



