/**
 * Check for accessibility settings
 */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/**
 * Toggle SwiperJs play/pause button
 */
const toggleBtnState = (swiperID, el) => {
    console.log(el);
    if (isSliderActive || reduceMotion.matches) {
        swiperID.autoplay.stop();
        el.classList.add('paused');
        el.setAttribute('aria-pressed', 'true');
        el.setAttribute('aria-label', translations.play);
        isSliderActive = false;
    } else {
        swiperID.autoplay.start();
        el.classList.remove('paused');
        el.setAttribute('aria-pressed', 'false');
        el.setAttribute('aria-label', translations.pause);
        isSliderActive = true;
    }
}