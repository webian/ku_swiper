<?php

/*
 * This file is part of the package ku_semi_collapsible_accordion.
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 * Sep 2022 Nanna Ellegaard, University of Copenhagen.
 */

$EM_CONF[$_EXTKEY] = [
    'title' => 'KU SwiperJs slideshow',
    'description' => 'Swiper slideshow',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'bootstrap_package' => '*',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'UniversityOfCopenhagen\\KuSemiCollapsibleAccordion\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Nanna Ellegaard',
    'author_email' => 'nel@adm.ku.dk',
    'author_company' => 'University of Copenhagen',
    'version' => '1.0.0',
];
