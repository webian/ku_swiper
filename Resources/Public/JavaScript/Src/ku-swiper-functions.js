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
            // this.swiperid = this.swiper.dataset.id;
            // this.totalcount = parseInt(this.swiper.dataset.totalcount, 10);
            // this.autoplaying = parseInt(this.swiper.dataset.autoplay, 10);
            // this.loop = parseInt(this.swiper.dataset.loop, 10);
            // this.fade = parseInt(this.swiper.dataset.fade, 10);
            // this.centeredslides = parseInt(this.swiper.dataset.centeredslides, 10);
            // this.random = parseInt(this.swiper.dataset.random, 10);
            // this.reachend = parseInt(this.swiper.dataset.reachend, 10);
            // this.slidespeed = parseInt(this.swiper.dataset.slidespeed, 10);
            // this.breakpoint = this.swiper.dataset.breakpoints;
            // this.data = JSON.parse(this.breakpoint);
            this.data = this.swiper.dataset.swiper || {};
            if (this.data) {
                this.dataOptions = JSON.parse(this.data);
            }

            this.defaultOptions = {
                loopPreventsSliding: false,
                spaceBetween: 20,
                pagination: {
                    el: '.swiper-pagination', 
                    clickable: true
                }, 
                navigation: {
                    nextEl: '.swiper-button-next', 
                    prevEl: '.swiper-button-prev'
                }
            };

            this.initSwiper();
            this.prefersReducedMotion();
            this.addEventListeners();
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
        
            const settings = Object.assign({}, this.defaultOptions, this.dataOptions);

            /**
             * Init Swiper - merge local settings
             */
            this.swiper = new Swiper(this.swiper, settings);
            console.log(settings);
            
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
            const swiperEl = new SwiperState(slideshow, slideshow.parentNode.querySelector('.btn'));
        });
    }
});