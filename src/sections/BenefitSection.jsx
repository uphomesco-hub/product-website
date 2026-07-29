import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";

const BenefitSection = () => {
  useGSAP(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });

  return (
    <section className="benefit-section">
      <div className="benefit-content">
        <div className="col-center">
          <p>One collection. Six distinct ways to enter a room.</p>

          <div className="benefit-title-stack col-center">
            <ClipPathTitle
              title={"Clean structure"}
              color={"#f1eff0"}
              bg={"#a63b5c"}
              className={"first-title"}
              borderColor={"#171719"}
            />
            <ClipPathTitle
              title={"Fluid movement"}
              color={"#171719"}
              bg={"#d4d5d9"}
              className={"second-title"}
              borderColor={"#171719"}
            />
            <ClipPathTitle
              title={"Confident colour"}
              color={"#f1eff0"}
              bg={"#a63b5c"}
              className={"third-title"}
              borderColor={"#171719"}
            />
            <ClipPathTitle
              title={"Your own rhythm"}
              color={"#171719"}
              bg={"#d4d5d9"}
              className={"fourth-title"}
              borderColor={"#171719"}
            />
          </div>
        </div>
      </div>

      <div className="overlay-box">
        <VideoPinSection />
      </div>
    </section>
  );
};

export default BenefitSection;
