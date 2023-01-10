/**
 * Check for accessibility settings
 */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/**
 * Toggle Swiper play/pause button
 * @param swiper = Swiper object
 * @param el = the toggle button
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

/**
 * Get int for random initial slide
 * @param max: total number of slides
 */
const getRandomInt = (max) => {
    min = 0;
    max = Math.floor(max);
    // The maximum is inclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min + 1) + min);
}