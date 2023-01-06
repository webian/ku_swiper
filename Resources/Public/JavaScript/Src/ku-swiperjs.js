/**
 * Check for accessibility settings
 */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/**
 * Toggle SwiperJs play/pause button
 */
const toggleBtnState = (swiper, el) => {
    let isActive = el.classList.contains('paused');
    let icon = el.querySelector('.bi');
    if (!isActive || reduceMotion.matches) {
        swiper.autoplay.stop();
        el.setAttribute('aria-pressed', 'true');
        el.setAttribute('aria-label', translations.play);
        el.classList.add('paused');
        icon.classList.replace('bi-pause-fill', 'bi-play-fill');
        isActive = false;
    } else {
        swiper.autoplay.start();
        el.setAttribute('aria-pressed', 'false');
        el.setAttribute('aria-label', translations.pause);
        el.classList.remove('paused');
        icon.classList.replace('bi-play-fill', 'bi-pause-fill');
        isActive = true;
    }
}
