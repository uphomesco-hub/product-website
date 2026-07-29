import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TestimonialSection = () => {
  useGSAP(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    gsap.set(".testimonials-section", {
      marginTop: "-100vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "160% top",
        scrub: true,
      },
    });

    tl.to(".testimonials-section .first-title", {
      xPercent: 70,
    })
      .to(
        ".testimonials-section .sec-title",
        {
          xPercent: 25,
        },
        "<"
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: -50,
        },
        "<"
      );

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top top",
        end: "+=180%",
        scrub: 1.5,
        pin: true,
      },
    });

    pinTl.from(".vd-card", {
      yPercent: 150,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="testimonials-section" id="lookbook">
      <div className="lookbook-title">
        <h1 className="first-title">Wear</h1>
        <h1 className="sec-title">the</h1>
        <h1 className="third-title">shift</h1>
      </div>

      <div className="pin-box">
        {cards.map((card) => (
          <figure
            key={card.name}
            className={`vd-card ${card.translation} ${card.rotation}`}
          >
            <img
              src={card.image}
              alt={`Lookbook view of the ${card.name}`}
              width="900"
              height="1500"
              loading="lazy"
            />
            <figcaption>{card.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
