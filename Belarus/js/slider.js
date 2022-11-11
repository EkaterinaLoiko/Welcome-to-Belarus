import container from './index.js';
import {upBtn} from './index.js';
import downBtn from './index.js';
import sidebar from './index.js';
import mainSlide from './index.js';
import slidesCount from './index.js';

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up')
});

downBtn.addEventListener('click', () => {
    changeSlide('down')
});

function changeSlide(direction) {
    if (direction ==='up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

console.log(upBtn);