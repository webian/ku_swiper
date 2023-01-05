/**
 * Check for accessibility settings
 */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
/**
 * Toggle SwiperJs play/pause button
 */
const toggleBtnState = (swiperID) => {
    if (reduceMotion.matches) {
        swiperID.autoplay.stop();
        isSliderActive = false;
    } else if (isSliderActive) {
        swiperID.autoplay.stop();
        isSliderActive = false;
    } else {
        swiperID.autoplay.start();
        isSliderActive = true;
    }
}