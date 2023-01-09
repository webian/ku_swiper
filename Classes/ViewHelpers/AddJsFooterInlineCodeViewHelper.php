<?php

declare(strict_types=1);

namespace UniversityOfCopenhagen\KuSwiperjs\ViewHelpers;

/**
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */


use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractTagBasedViewHelper;

/**
 *
 * A view helper for adding inline JS Code to footer
 *
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 */
class AddJsFooterInlineCodeViewHelper extends AbstractTagBasedViewHelper
{
    /**
     *
     * @var \TYPO3\CMS\Core\Page\PageRenderer
     */
    protected $pageRenderer;

    /**
     *
     * @param \TYPO3\CMS\Core\Page\PageRenderer $pageRenderer
     */
    public function injectPageRenderer(\TYPO3\CMS\Core\Page\PageRenderer $pageRenderer)
    {
        $this->pageRenderer = $pageRenderer;
    }

    public function initializeArguments()
    {
        parent::initializeArguments();
        $this->registerArgument('name', 'string', '', false);
        $this->registerArgument('compress', 'boolean', '');
        $this->registerArgument('forceOnTop', 'boolean', '');
        $this->registerArgument('excludeFromConcatenation', 'boolean', '');
    }

    public function render()
    {
        $block = $this->renderChildren();

        $this->pageRenderer->addJsFooterInlineCode(
            $this->arguments['name'],
            $block,
            $this->arguments['compress'],
            $this->arguments['forceOnTop']
        );
        return null;
    }
}
