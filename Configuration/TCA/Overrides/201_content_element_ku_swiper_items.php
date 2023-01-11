<?php

/*
 * This file is part of the package UniversityOfCopenhagen\KuSwiper.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

defined('TYPO3') or die('Access denied.');

// Add Content Element
if (!is_array($GLOBALS['TCA']['tt_content']['types']['ku_swiper'] ?? false)) {
    $GLOBALS['TCA']['tt_content']['types']['ku_swiper'] = [];
}

// Add content element PageTSConfig
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    'ku_swiper',
    'Configuration/TsConfig/Page/ku_swiper.tsconfig',
    'LLL:EXT:ku_swiper/Resources/Private/Language/locallang_be.xlf:swiper_title'
);

// Add content element to selector list
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'LLL:EXT:ku_swiper/Resources/Private/Language/locallang_be.xlf:swiper_title',
        'ku_swiper',
        'ku-swiperjs-icon',
        'ku_swiper'
    ]
);

// Assign Icon
$GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['ku_swiper'] = 'ku-swiperjs-icon';

// Configure element type
$GLOBALS['TCA']['tt_content']['types']['ku_swiper'] = array_replace_recursive(
    $GLOBALS['TCA']['tt_content']['types']['ku_swiper'],
    [
        'showitem' => '
            --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
                --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general,
                --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.headers;headers,
                tx_ku_swiper_item,
            --div--;LLL:EXT:ku_swiper/Resources/Private/Language/locallang_be.xlf:settings,
                pi_flexform;LLL:EXT:ku_swiper/Resources/Private/Language/locallang_be.xlf:settings,
            --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.appearance,
                --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.frames;frames,
                --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.appearanceLinks;appearanceLinks,
            --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language,
                --palette--;;language,
            --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access,
                --palette--;;hidden,
                --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.access;access,
            --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:categories,
                categories,
            --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:notes,
                rowDescription,
            --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:extended,
        '
    ]
);

// Register fields
$GLOBALS['TCA']['tt_content']['columns'] = array_replace_recursive(
    $GLOBALS['TCA']['tt_content']['columns'],
    [
        'tx_ku_swiper_item' => [
            'exclude' => 1,
            'label' => 'LLL:EXT:ku_swiper/Resources/Private/Language/locallang_be.xlf:swiper_item',
            'config' => [
                'type' => 'inline',
                'foreign_table' => 'tx_ku_swiper_item',
                'foreign_field' => 'tt_content',
                'appearance' => [
                    'useSortable' => true,
                    'showSynchronizationLink' => true,
                    'showAllLocalizationLink' => true,
                    'showPossibleLocalizationRecords' => true,
                    'expandSingle' => true,
                    'enabledControls' => [
                        'localize' => true,
                    ]
                ],
                'behaviour' => [
                    'mode' => 'select',
                ]
            ]
        ]
    ]
);

// Add flexForms for content element configuration
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
    '*',
    'FILE:EXT:ku_swiper/Configuration/Flexforms/default.xml',
    'ku_swiper'
);

$GLOBALS['TCA']['tt_content']['types']['ku_swiper']['previewRenderer'] = \UniversityOfCopenhagen\KuSwiper\Backend\Preview\kuSwiperPreviewRenderer::class;