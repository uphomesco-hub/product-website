import { useMediaQuery } from "react-responsive";
import { nutrientLists } from "../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const NutritionSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const lists = isMobile ? nutrientLists.slice(0, 2) : nutrientLists;

  useGSAP(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const titleSplit = SplitText.create(".nutrition-title", {
      type: "chars",
    });
    const paragraphSplit = SplitText.create(".nutrition-section p", {
      type: "words, lines",
      linesClass: "paragraph-line",
      aria: "none",
    });

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top center",
      },
    });
    contentTl
      .from(titleSplit.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: "power2.out",
      })
      .from(paragraphSplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
      });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 80%",
      },
    });

    titleTl.to(".nutrition-text-scroll", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
      ease: "power1.inOut",
    });
  });

  return (
    <section className="nutrition-section">
      <img
        src={`${import.meta.env.BASE_URL}fashion/04-folded-shell-top.jpg`}
        alt="Model in an architectural off-white top and graphite trousers"
        className="big-img"
        width="900"
        height="1500"
        loading="lazy"
      />

      <div className="nutrition-content">
        <div className="nutrition-heading">
          <div className="general-title nutrition-title-stack">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title">Structure that</h1>
            </div>
            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="nutrition-text-scroll place-self-start"
            >
              <div className="nutrition-accent">
                <h2>moves with you</h2>
              </div>
            </div>
          </div>
        </div>

        <p className="nutrition-body">
          Sharp lines meet fluid drape. Every piece is designed as a complete
          look and an easy wardrobe shift.
        </p>

        <div className="nutrition-box">
          <div className="list-wrapper">
            {lists.map((nutrient, index) => (
              <div key={index} className="relative flex-1 col-center">
                <p>{nutrient.label}</p>
                <strong>{nutrient.amount}</strong>

                {index !== lists.length - 1 && (
                  <div className="spacer-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
