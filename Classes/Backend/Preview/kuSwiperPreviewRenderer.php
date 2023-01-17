<?php
declare(strict_types=1);

/*
 * This file is part of the package ku_image_with_overlay.
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

namespace UniversityOfCopenhagen\KuSwiper\Backend\Preview;

use TYPO3\CMS\Backend\Preview\PreviewRendererInterface;
use TYPO3\CMS\Backend\Utility\BackendUtility;
use TYPO3\CMS\Backend\View\BackendLayout\Grid\GridColumnItem;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Database\ConnectionPool;

class kuSwiperPreviewRenderer implements PreviewRendererInterface
{
    
    protected ConnectionPool $connectionPool;

    public function __construct(
        
    ) {
        $this->connectionPool = GeneralUtility::makeInstance(ConnectionPool::class);
    }
    public function renderPageModulePreviewHeader(GridColumnItem $item): string
    {
        return '';
    }

    public function renderPageModulePreviewContent(GridColumnItem $item): string
    {
        $record = $item->getRecord();
        $buttons = $this->getRecords($record['uid']);
        $btn = null;

        foreach ($buttons as $button) {
            //debug($button);

            $btn .= '<a href="' . $button['link'] . '" class="btn btn-' . $button['link_class'] . '">' . $button['link_title'] .'</a>';
        }
        
        return $btn;
    }

    public function renderPageModulePreviewFooter(GridColumnItem $item): string
    {
        return '';
    }

    public function wrapPageModulePreview(string $previewHeader, string $previewContent, GridColumnItem $item): string
    {
        $previewHeader = $previewHeader ? '<div class="content-element-preview-ctype">' . $previewHeader . '</div>' : '';
        $previewContent = $previewContent ? '<div class="content-element-preview-content">' . $previewContent . '</div>' : '';
        $preview = $previewHeader || $previewContent ? '<div class="image-with-overlay-preview">' . $previewHeader . $previewContent . '</div>' : '';
        return $preview;
    }

    /**
     * Create thumbnail code for record/field but not linked
    *
    * @param mixed[] $row Record array
    * @param string $table Table (record is from)
    * @param string $field Field name for which thumbnail are to be rendered.
    * @return string HTML for thumbnails, if any.
    */
    protected function getThumbCodeUnlinked($row, $table, $field): string
    {
        return BackendUtility::thumbCode($row, $table, $field, '', '', null, 0, '', '', false);
    }

    /**
     * Get records
     *
     * @return array
     */
    protected function getRecords(int $uid): array
    {
        return $this->connectionPool
            ->getConnectionForTable('tx_ku_swiper_item')
            ->select(
                ['*'],
                'tx_ku_swiper_item',
                [
                    'tt_content' => $uid
                ]
            )
            ->fetchAllAssociative();
    }
}
