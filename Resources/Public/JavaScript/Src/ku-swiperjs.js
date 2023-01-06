/**
 * Check for accessibility settings
 */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/**
 * Toggle SwiperJs play/pause button
 */
const toggleBtnState = (swiperID, el) => {
    let icon = el.querySelector('.bi');
    if (isSliderActive || reduceMotion.matches) {
        swiperID.autoplay.stop();
        el.setAttribute('aria-pressed', 'true');
        el.setAttribute('aria-label', translations.play);
        icon.classList.replace('bi-pause-fill', 'bi-play-fill');
        isSliderActive = false;
    } else {
        swiperID.autoplay.start();
        el.setAttribute('aria-pressed', 'false');
        el.setAttribute('aria-label', translations.pause);
        icon.classList.replace('bi-play-fill', 'bi-pause-fill');
        isSliderActive = true;
    }
}
