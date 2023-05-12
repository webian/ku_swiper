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
        constructor(swiper, btn) {
            this.swiper = swiper;
            this.btn = btn;
            this.icon = this.btn.querySelector('.bi');


            // Declare Swiper settings
            this.swiperid = this.swiper.dataset.id;
            this.totalcount = parseInt(this.swiper.dataset.totalcount, 10);
            this.autoplaying = parseInt(this.swiper.dataset.autoplay, 10);
            this.loop = parseInt(this.swiper.dataset.loop, 10);
            this.fade = parseInt(this.swiper.dataset.fade, 10);
            this.centeredslides = parseInt(this.swiper.dataset.centeredslides, 10);
            this.random = parseInt(this.swiper.dataset.random, 10);
            this.reachend = parseInt(this.swiper.dataset.reachend, 10);
            this.slidespeed = parseInt(this.swiper.dataset.slidespeed, 10);
            this.breakpoints = this.swiper.dataset.breakpoints;
            this.data = JSON.stringify(this.breakpoints);

            this.initSwiper();
            this.prefersReducedMotion();
            this.addEventListeners();
        }

        setAutoplay() {
            if (this.totalcount > 1 && this.autoplaying === 1) {
                return `{delay: ${this.slidespeed}, disableOnInteraction: false}`;
            } else {
                return 0;
            }
        }

        setLoop() {
            if (this.loop === 1) {
                return 1;
            }
            else if (this.loop === 1 && this.totalcount < 2 && this.autoplaying === 1) {
                return 0
            }
            else {
                return 0;
            }
        }
        setEffect() {
            if (this.fade === 1) {
                return 'fade, fadeEffect: { crossFade: true },';
            } else {
                return 0;
            }
        }

        reachEnd() {
            if (this.reachend === 1) {

            }
        }

        addEventListeners() {
            this.btn.addEventListener('click', () => {
                this.togglePlayPause();
            });
        }

        initSwiper() {
            /**
               * Check if Swiper plugin exist
               */
            if (typeof Swiper === 'undefined') {
                return;
            }

            /**
             * Init Swiper
             */
            this.swiper = new Swiper(this.swiper, {
                autoplay: this.setAutoplay(),
                loop: this.setLoop(),
                slidesPerView: 1,
                slidesPerGroup: 1,
                effect: this.setEffect(),
                loopPreventsSliding: false,
                spaceBetween: 20,
                pagination: {
                    el: `.${this.swiperid}-dots`,
                    clickable: true,
                },
                navigation: {
                    nextEl: `.${this.swiperid}-next`,
                    prevEl: `.${this.swiperid}-prev`,
                },
                centeredSlides: this.centeredslides,
                initialSlide: this.random === 1 ? Math.floor(Math.random() * (this.totalcount - 0 + 1) + 0) : 0,
                on: {

                },
                breakpoints: this.data
            });
            console.log(this.data);
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

    // if (slideshows) {
    //     Array.from(slideshows).forEach((slideshow) => {
    //         const swiperEl = new SwiperState(slideshow, slideshow.parentNode.querySelector('.btn'));
    //     });
    // }
});