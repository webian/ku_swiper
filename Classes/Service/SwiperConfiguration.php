<?php

declare(strict_types=1);

/**
* Process backend Swiper configuration
**/

namespace UniversityOfCopenhagen\KuSwiper\Service;

class SwiperConfiguration implements \JsonSerializable
{
    // Default
    public int $loopPreventsSliding = 0;
    public int $spaceBetween = 20;
    // Costumizable
    public int $autoplay = 0;
    public int $loop = 0;
    public int $slideSpeed = 4000;
    public int $initialSlide = 0;
    public int $centeredSlides = 0;
    
    public function jsonSerialize(): array
    {
        return [
            'loopPreventsSliding' => $this->loopPreventsSliding,
            'spaceBetween' => $this->spaceBetween,
            'autoplay' => $this->autoplay,
            'loop' => $this->loop,
            'slideSpeed' => $this->slideSpeed,
            'initialSlide' => $this->initialSlide,
            'centeredSlides' => $this->centeredSlides,
        ];
    }
}
