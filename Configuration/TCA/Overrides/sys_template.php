<?php

defined('TYPO3') or die('Access denied.');

call_user_func(function () {
    /**
     * Temporary variables
     */
    $extensionKey = 'ku_swiper';

    /**
     * Default TypoScript for ku_swiper
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
        $extensionKey,
        'Configuration/TypoScript',
        'LLL:EXT:ku_swiper/Resources/Private/Language/locallang_be.xlf:swiper_title'
    );
});
