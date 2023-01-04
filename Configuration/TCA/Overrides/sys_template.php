<?php

defined('TYPO3') or die('Access denied.');

call_user_func(function()
{
    /**
     * Temporary variables
     */
    $extensionKey = 'ku_swiperjs';

    /**
     * Default TypoScript for ku_swiperjs
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
        $extensionKey,
        'Configuration/TypoScript',
        'LLL:EXT:ku_swiperjs/Resources/Private/Language/locallang_be.xlf:swiperjs_title'
    );
});