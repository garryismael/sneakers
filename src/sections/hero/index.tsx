import React, { useContext } from "react";
import DotButton from "@/components/DotButton";
import { productImages } from "@/constants";
import { useDotButton, usePrevNextButtons } from "@/hooks/carousel";
import useEmblaCarousel from "embla-carousel-react";
import { StoreContext } from "../../context";

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

  const {counter, increment, decrement} = useContext(StoreContext);

  return (
    <section className="pt-16 pb-10">
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
              <img
                src="/images/icon-previous.svg"
                width={12}
                height={18}
                className="w-3 h-4"
              />
            </button>
            <button
              className="absolute flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white rounded-full right-4 top-1/2 embla__next"
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}>
              <img
                src="/images/icon-next.svg"
                width={13}
                height={18}
                className="w-3 h-4"
              />
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
      <div className="px-6 pt-5">
        <h2 className="text-sm font-semibold uppercase text-dark-grayish-blue">
          Sneaker Company
        </h2>
        <h1 className="mt-3 text-3xl font-bold text-black">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-[15px] leading-6 text-dark-grayish-blue mt-4">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="flex items-center mt-4">
          <p className="text-3xl font-bold text-black">$125.00</p>
          <p className="px-4 py-1 ml-4 text-base font-bold text-white bg-black rounded-md">
            50%
          </p>
          <p className="ml-auto text-base font-bold line-through text-dark-grayish-blue">
            $250.00
          </p>
        </div>
        <div className="flex items-center justify-between px-2 py-2 mt-5 rounded-md bg-light-grayish-blue">
          <button className="p-2" onClick={decrement}>
            <img src="/images/icon-minus.svg" width={12} height={4} />
          </button>
          <span className="text-lg font-semibold">{counter}</span>
          <button className="p-2" onClick={increment}>
            <img src="/images/icon-plus.svg" width={12} height={4} />
          </button>
        </div>
        <button className="flex items-center justify-center w-full px-4 py-4 mt-4 rounded-lg bg-orange">
          <img
            src="/images/icon-cart.svg"
            width={22}
            height={20}
            className="mr-2"
          />
          <span className="text-base font-bold">Add to cart</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
