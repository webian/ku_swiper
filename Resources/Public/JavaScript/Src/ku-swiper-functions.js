/**
 * Swiper player button states
 */
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
        if (this.swiper.autoplay.paused) {
            this.playSwiper();
        } else {
            this.pauseSwiper();
        }
    }

    playSwiper() {
        this.swiper.autoplay.start();
        this.icon.classList.replace(play, pause);
        this.el.setAttribute('aria-pressed', 'false');
        this.el.setAttribute('aria-label', translations.pause);
    }

    pauseSwiper() {
        this.swiper.autoplay.stop();
        this.icon.classList.replace(pause, play);
        this.el.setAttribute('aria-pressed', 'true');
        this.el.setAttribute('aria-label', translations.play);
    }

    prefersReducedMotion() {
        if (this.swiper.autoplay.running === true && matchMedia('(prefers-reduced-motion)').matches) {
            this.pauseSwiper();
        }
    }
}