/**
 * Init Swiper.
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';


    // Swiper play/pause functions
    const play = 'bi-play-fill';
    const pause = 'bi-pause-fill';
    const slideshows = document.querySelectorAll('.swiper');

    class SwiperState {
        constructor(swiper) {
            this.swiper = swiper;
            this.btn = swiper.parentNode.querySelector('.btn');
            if (this.btn) {
                this.icon = this.btn.querySelector('.bi');
            }

            // Declare custom Swiper settings
            this.id = this.swiper.dataset.id;
            this.count = this.swiper.dataset.count;
            this.data = this.swiper.dataset.slides || {};
            if (this.data) {
                this.dataOptions = JSON.parse(this.data);
            }

            // Default options which cannot be changed by user
            this.defaultOptions = {
                loopPreventsSliding: false,
                spaceBetween: 20,
                initialSlide: this.getRandomSlide(),
                pagination: {
                    el: `.${this.id}-dots`,
                    clickable: true
                },
                navigation: {
                    nextEl: `.${this.id}-next`,
                    prevEl: `.${this.id}-prev`,
                }
            };

            this.initSwiper();
            this.prefersReducedMotion();
            if (this.btn) {
                this.addEventListeners();
            }
        }

        getRandomSlide() {
            /**
             * If set to 1, display random number between total amount of slides,
             * else sets 0 to disable
             */
            const initialSllide = this.dataOptions.initialSlide === 1 ? Math.floor(Math.random() * (this.count - 0 + 1) + 0) : 0;
            return initialSllide;
        }

        initSwiper() {
            /**
             * Check if Swiper plugin exist
             */
            if (typeof Swiper === 'undefined') {
                return;
            }

            /**
             * Merge default settings with custom values
             */
            const settings = Object.assign({}, this.dataOptions, this.defaultOptions);

            /**
             * Init Swiper
             */
            this.swiper = new Swiper(this.swiper, settings);
        }

        addEventListeners() {
            this.btn.addEventListener('click', () => {
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
            this.btn.setAttribute('aria-label', translate.pause);
        }

        pauseSwiper() {
            this.swiper.autoplay.stop();
            this.icon.classList.replace(pause, play);
            this.btn.setAttribute('aria-label', translate.play);
        }

        prefersReducedMotion() {
            if (this.swiper.autoplay.running && matchMedia('(prefers-reduced-motion)').matches) {
                this.pauseSwiper();
            }
        }
    }

    /**
     * Assign Swiper to swiper elements
     */

    if (slideshows) {
        Array.from(slideshows).forEach((slideshow) => {
            const swiperEl = new SwiperState(slideshow);
        });
    }
});