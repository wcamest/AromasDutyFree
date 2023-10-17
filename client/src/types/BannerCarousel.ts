import BannerCarouselSlide from "./BannerCarouselSlide";

export default interface BannerCarousel {
    height: number,
    slides: BannerCarouselSlide[],
    slideInterval: number
}