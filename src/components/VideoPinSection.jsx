import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isMobile && !reduceMotion) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "top top",
          end: "+=180%",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });

  return (
    <section className="vd-pin-section">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <img
          src={`${import.meta.env.BASE_URL}fashion/05-cropped-rose-jacket.jpg`}
          alt="Model wearing the deep-rose Shift Cropped Jacket"
          className="reveal-image"
          width="864"
          height="1821"
          loading="lazy"
        />
        <div className="reveal-copy">
          <p>ROSA SHIFT</p>
          <h2>Hold the shape. Change the direction.</h2>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
