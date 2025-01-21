import DotButton from "@/components/DotButton";
import { productImages } from "@/constants";
import { useDotButton, usePrevNextButtons } from "@/hooks/carousel";
import useEmblaCarousel from "embla-carousel-react";

const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="pt-12">
      <div className="relative embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {productImages.map((image) => (
              <div key={image.id} className={`embla__slide w-full`}>
                <img src={image.src} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
        <div className="embla__controls top-1/2">
          <div className="flex items-center justify-between bg-red-300 embla__buttons">
            <button
              className="absolute flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white rounded-full left-4 top-1/2 embla__prev"
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}>
              <img src="/images/icon-previous.svg" width={12} height={18}  className="w-3 h-4"/>
            </button>
            <button
              className="absolute flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white rounded-full right-4 top-1/2 embla__next"
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}>
              <img src="/images/icon-next.svg" width={13} height={18} className="w-3 h-4" />
            </button>
          </div>
          <div className="hidden embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}>
                <div>
                  <img
                    src={productImages[index].thumbnail}
                    className="w-full h-auto"
                  />
                </div>
              </DotButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
