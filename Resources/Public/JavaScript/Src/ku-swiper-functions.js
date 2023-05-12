// Swiper play/pause functions
const play = 'bi-play-fill';
const pause = 'bi-pause-fill';

class SwiperState {
    constructor(swiper, btn) {
        this.swiper = swiper;
        this.el = document.querySelector(btn);
        this.icon = this.el.querySelector('.bi');
        this.prefersReducedMotion();
        this.addEventListeners();
    }

    addEventListeners() {
        this.el.addEventListener('click', () => {
            this.togglePlayPause();
        });
    }

    togglePlayPause() {
        if (this.swiper.autoplay.running) {
            this.pauseSwiper();
        } else {
            this.playSwiper();
        }
    }

    playSwiper() {
        this.swiper.autoplay.start();
        this.icon.classList.replace(play, pause);
        this.el.setAttribute('aria-label', translate.pause);
    }

    pauseSwiper() {
        this.swiper.autoplay.stop();
        this.icon.classList.replace(pause, play);
        this.el.setAttribute('aria-label', translate.play);
    }

    prefersReducedMotion() {
        if (this.swiper.autoplay.running && matchMedia('(prefers-reduced-motion)').matches) {
            this.pauseSwiper();
        }
    }
}