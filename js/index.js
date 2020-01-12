const track = document.querySelector('.carousel__track')
const slides = [...track.children]

const prevButton = document.querySelector('.carousel__button--left') 
const nextButton = document.querySelector('.carousel__button--right') 

const carouselNav = document.querySelector('.carousel__nav')

const dots = [...carouselNav.children]

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
	slide.style.left = `${slideWidth * index}px`
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
	track.style.transform = `translateX(-${targetSlide.style.left})`
	currentSlide.classList.remove('current-slide')
	targetSlide.classList.add('current-slide')
}

prevButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current-slide')
	const prevSlide = currentSlide.previousElementSibling

	moveToSlide(track, currentSlide, prevSlide)
})

nextButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current-slide')
	const nextSlide = currentSlide.nextElementSibling

	moveToSlide(track, currentSlide, nextSlide)
})