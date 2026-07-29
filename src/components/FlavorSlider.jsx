import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const getScrollAmount = () =>
      Math.max(
        0,
        sliderRef.current.firstElementChild.scrollWidth -
          sliderRef.current.clientWidth
      );
    const scrollAmount = getScrollAmount();

    if (!isTablet && !reduceMotion && scrollAmount > 0) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top top",
          end: () => `+=${getScrollAmount()}px`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(".flavors", {
        x: () => -getScrollAmount(),
        ease: "none",
      });
    }

    if (reduceMotion) return;

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );
  }, { dependencies: [isTablet], revertOnUpdate: true });

  return (
    <div ref={sliderRef} className="slider-wrapper" id="collection">
      <div className="flavors">
        {flavorlists.map((flavor, index) => (
          <article key={flavor.name} className={`product-panel ${flavor.rotation}`}>
            <img
              src={flavor.image}
              alt={`Model wearing the ${flavor.name}`}
              width="900"
              height="1500"
              loading={index < 2 ? "eager" : "lazy"}
            />
            <div className="product-copy">
              <p>{flavor.detail}</p>
              <h2>{flavor.name}</h2>
              <span>{flavor.price}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
