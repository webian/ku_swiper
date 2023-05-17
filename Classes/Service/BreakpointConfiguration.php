<?php

declare(strict_types=1);

/**
* Process backend Swiper configuration
**/

namespace UniversityOfCopenhagen\KuSwiper\Service;

enum Breakpoint {
    case MOBILE;
    case TABLET;
    case DESKTOP;
    case WIDESCREEN;
}  

class BreakpointConfigration implements \JsonSerializable
{
    public Breakpoint $breakpoint;
    public int $slidesPerView = 1;
    public int $slidesPerGroup = 1;
    
    public function jsonSerialize(): array
    {
        return [
          'slidesPerView' => $this->slidesPerView,
          'slidesPerGroup' => $this->slidesPerGroup
        ];
    }
}
