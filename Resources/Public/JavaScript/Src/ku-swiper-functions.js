/**
 * Init Swiper plugin.
 * @author NEL
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Swiper play/pause classes
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

            // Declare custom Swiper settings from html data-* attributes
            this.id = this.swiper.dataset.id;
            this.count = this.swiper.dataset.count;
            this.data = this.swiper.dataset.slides || {};
            if (this.data) {
                this.dataOptions = JSON.parse(this.data);
            }

            // Default settings which cannot be changed by user
            this.defaultOptions = {
                loopPreventsSliding: false,
                spaceBetween: 20,
                initialSlide: this.getRandomSlide(),
                pagination: {
                    el: swiper.parentNode.querySelector('.swiper-pagination'),
                    clickable: true
                },
                navigation: {
                    nextEl: swiper.parentNode.querySelector('.swiper-button-next'),
                    prevEl: swiper.parentNode.querySelector('.swiper-button-prev'),
                }
            };
            // Merge default settings with custom settings
            this.settings = Object.assign({}, this.dataOptions, this.defaultOptions);

            this.initSwiper();
            this.prefersReducedMotion();
            if (this.btn) {
                this.addEventListeners();
            }
        }

        getRandomSlide() {
            /**
             * If set to 1, display random number out of total amount of slides.
             * Set to 0 to use default.
             * @returns initial slide  
             */
            return this.dataOptions.initialSlide === 1 ? Math.floor(Math.random() * (this.count - 0 + 1) + 0) : 0;
        }

        initSwiper() {
            // Check if Swiper plugin exist and init Swiper
            if (typeof Swiper !== 'undefined') {
                this.swiper = new Swiper(this.swiper, this.settings);
            }
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

    if (slideshows) {
        /**
         * Assign Swiper to swiper elements
        */
        Array.from(slideshows).forEach((slideshow) => {
            const swiperEl = new SwiperState(slideshow);
        });
    }
});