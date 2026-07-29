import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const HeroSection = () => {
  useGSAP(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const titleSplit = SplitText.create(".hero-title", { type: "chars" });

    if (reduceMotion) {
      gsap.set(".hero-content", { opacity: 1, y: 0 });
      gsap.set(".hero-text-scroll", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });
      return;
    }

    const tl = gsap.timeline({ delay: 0.35 });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="hero-stage">
      <div className="hero-container">
        <img
          src={`${import.meta.env.BASE_URL}fashion/hero-rose-tailoring.jpg`}
          alt="Model wearing deep-rose tailoring and a charcoal asymmetric skirt"
          className="hero-image"
          width="758"
          height="1600"
          fetchPriority="high"
        />
        <div className="hero-scrim" />
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Cut for the bold</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h2>Womenswear in motion</h2>
            </div>
          </div>

          <p className="hero-copy">
            Six expressive pieces shaped around movement, structure and confident colour.
          </p>
          <a className="hero-button" href="#collection">
            View collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
