const track = document.querySelector('.carousel__track')
const slides = Array.from(track.children)

const prevButton = document.querySelector('.carousel__button--left') 
const nextButton = document.querySelector('.carousel__button--right') 

const carouselNav = document.querySelector('.carousel__nav');
const dots = Array.from(carouselNav.children)

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidesPosition = (slide, index) => {
	slide.style.left = `${slideWidth * index} px`
}

slides.forEach(setSlidePosition);

nextButton.addEventListener('click', e => {
	const currentSlide = track.document.querySelector('.current-slide')
	const 
}