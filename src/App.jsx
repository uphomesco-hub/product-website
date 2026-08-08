"use client";
/* global process */

import { useEffect, useRef } from "react";
import {
  FaApple,
  FaEnvelope,
  FaFacebookF,
  FaBookOpen,
  FaGooglePlay,
  FaInstagram,
  FaLinkedinIn,
  FaMobileAlt,
  FaQuestionCircle,
  FaSearch,
} from "react-icons/fa";

const base = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/uphomes/`;

const homes = [
  {
    city: "Gurugram",
    type: "3 BHK in DLF Phase 2",
    detail: "₹85,000/month · Semi furnished · Full house",
    image: `${base}properties/gurugram.jpg`,
    href: "https://uphomes.in/search/property/RMD2brRcUNvS3CL0V0Oj",
    width: 1280,
    height: 960,
  },
  {
    city: "Bengaluru",
    type: "Prestige Lakeside Habitat",
    detail: "₹52,000/month · 2 BHK · Semi furnished",
    image: `${base}properties/bengaluru.jpg`,
    href: "https://uphomes.in/search/property/dakJQwAGiEZDN7A4B42g",
    width: 843,
    height: 1185,
  },
  {
    city: "Pune",
    type: "VTP Leonara, Mahalunge",
    detail: "₹32,000/month · 1 BHK · Semi furnished",
    image: `${base}properties/pune.jpg`,
    href: "https://uphomes.in/search/property/JPGk21Kthd70GLmTy7yQ",
    width: 960,
    height: 1280,
  },
  {
    city: "Mumbai",
    type: "3 BHK in Goregaon West",
    detail: "₹95,000/month · Fully furnished · Full house",
    image: `${base}properties/mumbai.jpg`,
    href: "https://uphomes.in/search/property/v1Ochj0yBbUeIEQCpmju",
    width: 960,
    height: 1280,
  },
];

const citySymbols = [
  {
    city: "Gurugram",
    image: `${base}city-art/gurugram.png`,
    fromX: "-34vw",
    fromY: "-18vh",
    fromRotate: -34,
  },
  {
    city: "Bengaluru",
    image: `${base}city-art/bengaluru.png`,
    fromX: "28vw",
    fromY: "-22vh",
    fromRotate: 28,
  },
  {
    city: "Pune",
    image: `${base}city-art/pune.png`,
    fromX: "-30vw",
    fromY: "28vh",
    fromRotate: 22,
  },
  {
    city: "Mumbai",
    image: `${base}city-art/mumbai.png`,
    fromX: "34vw",
    fromY: "24vh",
    fromRotate: -26,
  },
];

const features = [
  {
    title: "Property match alerts",
    body: "Get an alert when a flat matching your requirement appears.",
  },
  {
    title: "Low-cost direct plans",
    body: "Unlock owner contacts and recommendation support without broker-style fees.",
  },
  {
    title: "Map view flat hunting",
    body: "Shortlist rentals by the area and exact location you prefer.",
  },
  {
    title: "AI verification",
    body: "Property review, profile checks, and feedback safeguards support a cleaner search.",
  },
];

const agentSteps = [
  {
    title: "Share your requirement",
    body: "Set your budget, location, BHK, move date, and must-haves.",
  },
  {
    title: "Searches everywhere",
    body: "The agent scans UpHomes and matching online supply for the right fit.",
  },
  {
    title: "Calls owners first",
    body: "Availability, rent, size, and basic fit are checked before a shortlist.",
  },
  {
    title: "Coordinates visits",
    body: "Visit timing can be arranged around your schedule and preferences.",
  },
];

const reviews = [
  {
    quote:
      "The recommendation plan was helpful for my budget search. The homes shown were not random, and the shortlist was much better.",
    name: "Megha Sinha",
    role: "Tenant, Pune",
  },
  {
    quote:
      "I listed my flat and liked that rent, deposit, and visit time were shown clearly. Owner side felt simple to manage.",
    name: "Kunal Kapoor",
    role: "Property Owner, Bengaluru",
  },
  {
    quote:
      "UpHomes helped us show room rent, deposit, and house rules properly. The people who called were more serious.",
    name: "Sonal Patil",
    role: "Tenant, Bengaluru",
  },
];

const faqs = [
  {
    question: "How does UpHomes help me find verified rental homes?",
    answer:
      "Search cleaner rental details, compare important information, unlock owner contacts, and get recommendations based on your requirement.",
  },
  {
    question: "What is Contact Unlock?",
    answer:
      "Contact Unlock gives you owner contacts in the UpHomes app. You choose which owners you want to call or message.",
  },
  {
    question: "Will UpHomes share my phone number?",
    answer:
      "No. UpHomes does not sell your phone number or send it to random owners. You control whom you contact.",
  },
  {
    question: "Does UpHomes handle rent, deposits, or agreements?",
    answer:
      "UpHomes supports discovery and owner contact. Final rent, deposit, agreement, token, and move-in terms remain between renter and owner.",
  },
];

const blogs = [
  {
    place: "Gurugram",
    title: "Rental Broker Guide for DLF Phase 3",
    body: "Compare owner-direct homes, fees, commute fit, and safer payment checks.",
  },
  {
    place: "Bengaluru",
    title: "A Practical Whitefield Rental Checklist",
    body: "Review metro access, deposit risk, owner authority, and move-in terms.",
  },
  {
    place: "Rental safety",
    title: "Before You Pay a Token",
    body: "Confirm the property, person, paperwork, payee, and written refund terms.",
  },
];

const footerLinks = [
  {
    label: "Browse Properties",
    href: "https://uphomes.in/search",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M11 4a7 7 0 0 1 4.92 11.95"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 20l-3.5-3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Get the App",
    href: "https://uphomes.in/download",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9 5h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 7h8M8 17h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "FAQs",
    href: "https://uphomes.in/faq",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 8v.01"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10.5 11.5c0-1.5 1.1-2.25 2.1-2.7.86-.39 1.5-.78 1.5-1.65a1.6 1.6 0 1 0-3.2 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 18h.01"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
    {
      label: "Guides",
      href: "https://uphomes.in/blogs",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect
            x="4"
            y="5"
            width="16"
            height="14"
            stroke="currentColor"
            strokeWidth="1.5"
            rx="1"
        />
        <path
          d="M8 9h8M8 13h5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Contact Us",
    href: "mailto:contact@uphomes.in",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M4 7l8 6 8-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/uphomes.in/",
    icon: <FaInstagram />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61572085060403",
    icon: <FaFacebookF />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/uphomes/",
    icon: <FaLinkedinIn />,
  },
  {
    label: "Email",
    href: "mailto:contact@uphomes.in",
    icon: <FaEnvelope />,
  },
  {
    label: "App Store",
    href: "https://apps.apple.com/in/app/uphomes/id6737268880",
    icon: <FaApple />,
  },
  {
    label: "Play Store",
    href: "https://play.google.com/store/apps/details?id=com.flutterflow.homeU742786",
    icon: <FaGooglePlay />,
  },
];

const footerIconByLabel = {
  "Browse Properties": <FaSearch />,
  "Get the App": <FaMobileAlt />,
  FAQs: <FaQuestionCircle />,
  Guides: <FaBookOpen />,
  "Contact Us": <FaEnvelope />,
};

function NavBar() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="UpHomes home">
        <img src={`${base}logo.png`} alt="UpHomes" width="507" height="120" />
      </a>

      <div className="nav-links">
        <a href="#compare">Compare</a>
        <a href="#features">Features</a>
        <a href="https://uphomes.in/#metrics">Metrics</a>
        <a href="#upbot">AI Agent</a>
        <a href="#testimonials">Reviews</a>
        <a href="https://uphomes.in/faq">FAQ</a>
        <a href="https://uphomes.in/blogs">Blogs</a>
      </div>

      <a
        className="nav-cta"
        href="https://uphomes.in/search"
        target="_blank"
        rel="noreferrer"
      >
        <FaSearch aria-hidden="true" />
        <span>Browse Properties</span>
      </a>
    </nav>
  );
}

function GuidesSection() {
  const guidesRef = useRef(null);

  useEffect(() => {
    const section = guidesRef.current;
    if (!section) return undefined;

    let media;
    let context;
    let cancelled = false;

    const setup = async () => {
      const [gsapModule, scrollTriggerModule] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      const gsapRuntime = gsapModule.gsap ?? gsapModule.default;
      const scrollTriggerRuntime =
        scrollTriggerModule.ScrollTrigger ?? scrollTriggerModule.default;
      gsapRuntime.registerPlugin(scrollTriggerRuntime);

      context = gsapRuntime.context(() => {
      media = gsapRuntime.matchMedia();
      media.add(
        {
          mobile: "(max-width: 900px)",
          desktop: "(min-width: 901px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        ({ conditions }) => {
          const { mobile, reduceMotion } = conditions;
          const heading = section.querySelector(".section-heading");
          const cards = gsapRuntime.utils.toArray(".blog", section);

          if (reduceMotion) {
            gsapRuntime.set([heading, cards], { clearProps: "all" });
            return;
          }

          gsapRuntime.set(heading, { autoAlpha: 0, y: 52 });
          gsapRuntime.set(cards, {
            autoAlpha: 0,
            y: mobile ? 72 : 110,
            scale: mobile ? 0.96 : 0.93,
            rotate: mobile ? 0 : (index) => [-2.5, 2, -1.5][index],
          });

          const timeline = gsapRuntime.timeline({
            defaults: { ease: "power2.out" },
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.75,
              invalidateOnRefresh: true,
            },
          });

          timeline.to(heading, {
            autoAlpha: 1,
            y: 0,
            duration: 0.24,
          });

          if (mobile) {
            cards.forEach((card, index) => {
              timeline.to(card, {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.42,
              });

              if (index < cards.length - 1) {
                timeline
                  .to({}, { duration: 0.24 })
                  .to(card, {
                    autoAlpha: 0,
                    y: -56,
                    scale: 0.98,
                    duration: 0.28,
                    ease: "power2.in",
                  });
              }
            });
          } else {
            timeline
              .to(
                cards,
                {
                  autoAlpha: 1,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  stagger: 0.09,
                  duration: 0.58,
                },
                0.12,
              )
              .to({}, { duration: 0.22 });
          }
        },
      );
      }, section);
    };

    setup();

    return () => {
      cancelled = true;
      media?.revert();
      context?.revert();
    };
  }, []);

  return (
    <section className="blogs-stage" id="blogs" ref={guidesRef}>
      <div className="blogs section-shell">
        <div className="section-heading">
          <h2>Rental guides for real decisions.</h2>
        </div>
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <article className={`blog blog-${index + 1}`} key={blog.title}>
              <span>{blog.place}</span>
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
              <a href="https://uphomes.in/blogs" target="_blank" rel="noreferrer">
                Read UpHomes guides
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CityArtwork({ city }) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 4,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke",
  };

  return (
    <svg
      className="city-artwork"
      viewBox="0 0 200 160"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M20 132H180"
        {...commonProps}
        strokeWidth="3"
        opacity="0.7"
      />
      {city === "Gurugram" && (
        <g {...commonProps}>
          <path d="M30 132V82L57 66V132M42 91h4M42 105h4M42 119h4" />
          <path d="M76 132V35L117 48V132M90 58h5M90 75h5M90 92h5M90 109h5" />
          <path d="M130 132V68L169 48V132M145 76h5M145 93h5M145 110h5" />
          <circle cx="151" cy="30" r="9" fill="currentColor" stroke="none" opacity="0.28" />
        </g>
      )}
      {city === "Bengaluru" && (
        <g {...commonProps}>
          <path d="M36 132V82H164V132M29 82H171L157 70H43L29 82Z" />
          <path d="M76 70C77 50 87 39 100 39C113 39 123 50 124 70" />
          <path d="M91 39V30H109V39M52 91V122M70 91V122M88 91V122M112 91V122M130 91V122M148 91V122" />
          <path d="M30 132H170M22 132H178" />
        </g>
      )}
      {city === "Pune" && (
        <g {...commonProps}>
          <path d="M38 132V58H65V132M135 132V58H162V132" />
          <path d="M32 58L51 42L70 58M130 58L149 42L168 58" />
          <path d="M65 70H135V132H65Z" />
          <path d="M83 132V102C83 88 91 80 100 80C109 80 117 88 117 102V132" />
          <path d="M44 76h15M141 76h15M44 94h15M141 94h15" />
        </g>
      )}
      {city === "Mumbai" && (
        <g {...commonProps}>
          <path d="M48 132V66H152V132M39 66H161L149 53H51L39 66Z" />
          <path d="M68 132V86H132V132" />
          <path d="M82 132V106C82 92 90 83 100 83C110 83 118 92 118 106V132" />
          <path d="M57 66V46M143 66V46M51 46H63M137 46H149" />
          <path d="M90 53V39H110V53M100 39V28" />
        </g>
      )}
      {city === "Hyderabad" && (
        <g {...commonProps}>
          <path d="M60 132V61H140V132M76 132V97H124V132" />
          <path d="M45 132V50H60M140 50H155V132" />
          <path d="M39 50H66L52 35L39 50ZM134 50H161L148 35L134 50Z" />
          <path d="M52 35V24M148 35V24" />
          <path d="M78 61C79 43 88 33 100 33C112 33 121 43 122 61" />
          <path d="M72 78H128M52 70h8M140 70h8M52 90h8M140 90h8" />
          <circle cx="100" cy="77" r="6" />
        </g>
      )}
    </svg>
  );
}

function App() {
  const pageRef = useRef(null);
  const propertyWrapRef = useRef(null);
  const propertyTrackRef = useRef(null);
  const upbotVideoWrapRef = useRef(null);
  const upbotVideoBoxRef = useRef(null);
  const footerRef = useRef(null);
  const footerContentRef = useRef(null);
  const footerBrandRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return undefined;

    let cancelled = false;
    let context;
    let media;
    let agentObserver;
    let footerRevealFrame;

    const updateFooterReveal = () => {
      const footer = footerRef.current;
      const content = footerContentRef.current;
      const brand = footerBrandRef.current;
      if (!footer || !content || !brand) return;

      const bounds = footer.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - bounds.top) / bounds.height)
      );

      content.style.transform = `translate3d(0, ${-50 + progress * 50}%, 0)`;
      brand.style.opacity = String(progress);
      brand.style.transform = `scale(${0.8 + progress * 0.2})`;
    };

    const queueFooterReveal = () => {
      cancelAnimationFrame(footerRevealFrame);
      footerRevealFrame = requestAnimationFrame(updateFooterReveal);
    };

    window.addEventListener("scroll", queueFooterReveal, { passive: true });
    window.addEventListener("resize", queueFooterReveal);
    queueFooterReveal();

    const agentSection = pageRef.current?.querySelector(".agent");
    if (agentSection) {
      agentSection.classList.add("agent-pending");
      agentObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          agentSection.classList.add("agent-visible");
          agentObserver?.disconnect();
        },
        { threshold: 0.12 }
      );
      agentObserver.observe(agentSection);
    }

    async function setupScrollStory() {
      const [gsapModule, scrollModule] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      const gsap = gsapModule.default || gsapModule.gsap;
      const { ScrollTrigger } = scrollModule;
      gsap.registerPlugin(ScrollTrigger);

      context = gsap.context(() => {
          gsap.utils.toArray(".reveal:not(.agent-reveal)").forEach((element) => {
            gsap.from(element, {
              y: 44,
              opacity: 0,
              immediateRender: false,
              duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
              once: true,
            },
          });

        });

        gsap.from(".city-symbol", {
          opacity: 0,
          duration: 1.15,
          stagger: 0.08,
          delay: 0.12,
          ease: "power2.out",
          clearProps: "opacity",
        });

        gsap.to(".city-symbol", {
          x: (index) => ["-1vw", "1vw", "-0.6vw", "1.2vw", "0.8vw"][index],
          y: (index) => `${[6, 8, 5, 7, 6][index]}vh`,
          rotate: (index) => [-4, 4, 3, -4, 4][index],
          scale: (index) => [0.98, 1.02, 1, 0.98, 1.01][index],
          stagger: 0.025,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        media = gsap.matchMedia();
        media.add("(min-width: 901px)", () => {
          const huntTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".manifesto",
              start: "top top",
              end: "+=1250",
              pin: true,
              scrub: 1,
            },
          });

          huntTimeline
            .to(".manifesto-word", {
              color: "var(--text)",
              stagger: 0.09,
              ease: "power1.inOut",
            })
            .fromTo(
              ".manifesto-highlight",
              { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
              {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                ease: "circ.inOut",
              },
              "-=0.35"
            )
            .from(
              ".compare-grid article",
              {
                yPercent: 38,
                opacity: 0,
                rotate: (index) => (index === 0 ? -2 : 2),
                stagger: 0.2,
                ease: "power2.out",
              },
              "-=0.1"
            );

          const wrap = propertyWrapRef.current;
          const track = propertyTrackRef.current;
          const distance = () =>
            Math.max(0, track.scrollWidth - window.innerWidth);

          gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top top",
              end: () => `+=${distance()}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          const upbotVideoTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: upbotVideoWrapRef.current,
              start: "top top",
              end: "200% top",
              pin: true,
              scrub: 1.5,
              anticipatePin: 1,
            },
          });

          upbotVideoTimeline.to(upbotVideoBoxRef.current, {
            clipPath: "circle(100% at 50% 50%)",
            ease: "power1.inOut",
          });

          const reviewTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".reviews",
              start: "top top",
              end: "+=1200",
              pin: true,
              scrub: 1,
            },
          });

          reviewTimeline
            .from(".reviews-title span:first-child", {
              xPercent: -34,
              ease: "power1.out",
            })
            .from(
              ".reviews-title span:last-child",
              {
                xPercent: 34,
                ease: "power1.out",
              },
              "<"
            )
            .from(
              ".review",
              {
                yPercent: 135,
                rotate: (index) => [-5, 2, 5][index],
                stagger: 0.18,
                ease: "power2.out",
              },
              "-=0.15"
            );

          const featureTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".features",
              start: "top 72%",
              end: "top 18%",
              scrub: 1,
            },
          });

          featureTimeline
            .from(".features .section-heading h2", {
              yPercent: 54,
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
              ease: "circ.out",
            })
            .from(
              ".features .section-heading p",
              { y: 22, opacity: 0, ease: "power2.out" },
              "-=0.4"
            )
            .from(
              ".feature-grid > *",
              {
                yPercent: 34,
                opacity: 0,
                stagger: 0.08,
                ease: "power2.out",
              },
              "-=0.25"
            );

        });

        media.add("(max-width: 900px)", () => {
          gsap.to(".manifesto-word", {
            color: "var(--text)",
            stagger: 0.09,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: ".manifesto",
              start: "top 76%",
              end: "bottom 44%",
              scrub: 1,
            },
          });

          gsap.fromTo(
            ".manifesto-highlight",
            { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              ease: "circ.inOut",
              scrollTrigger: {
                trigger: ".manifesto-highlight",
                start: "top 82%",
                end: "bottom 58%",
                scrub: 1,
              },
            }
          );
        });
      }, pageRef);

      requestAnimationFrame(() => {
        if (!cancelled) {
          ScrollTrigger.refresh();
          queueFooterReveal();
        }
      });
    }

    setupScrollStory();

    return () => {
      cancelled = true;
      agentObserver?.disconnect();
      window.removeEventListener("scroll", queueFooterReveal);
      window.removeEventListener("resize", queueFooterReveal);
      cancelAnimationFrame(footerRevealFrame);
      media?.revert();
      context?.revert();
    };
  }, []);

  return (
    <main ref={pageRef} id="top">
      <NavBar />

      <header className="hero">
        <div className="city-symbols">
          {citySymbols.map((symbol, index) => (
            <figure
              className={`city-symbol city-symbol-${index + 1}`}
              data-from-x={symbol.fromX}
              data-from-y={symbol.fromY}
              data-from-rotate={symbol.fromRotate}
              key={symbol.city}
            >
              <img
                className="city-artwork"
                src={symbol.image}
                alt={`${symbol.city} city landmark illustration`}
                width="1254"
                height="1254"
                loading={index < 3 ? "eager" : "lazy"}
                fetchPriority={index < 3 ? "high" : "auto"}
              />
              <figcaption>{symbol.city}</figcaption>
            </figure>
          ))}
        </div>

        <div className="hero-content">
          <p className="hero-kicker hero-reveal">Community-driven rentals</p>
          <h1 className="hero-reveal">
            Verified rentals.
            <span>Direct contacts.</span>
          </h1>
          <p className="hero-copy hero-reveal">
            Browse verified rentals, unlock owner contacts, and move with trust,
            tech, and AI.
          </p>
          <div className="hero-actions hero-reveal">
            <a
              className="button button-primary"
              href="https://uphomes.in/search"
              target="_blank"
              rel="noreferrer"
            >
              Browse Properties
            </a>
            <a
              className="button button-ghost"
              href="https://uphomes.in/download"
              target="_blank"
              rel="noreferrer"
            >
              Get the App
            </a>
          </div>
        </div>
      </header>

      <section className="manifesto" id="compare">
        <div className="manifesto-copy">
          <h2>
            {"A rental hunt should give you clear details, real contacts,"
              .split(" ")
              .map((word, index) => (
                <span className="manifesto-word" key={`${word}-${index}`}>
                  {word}
                </span>
              ))}
            <strong className="manifesto-highlight">and less chase.</strong>
          </h2>
          <p>
            UpHomes brings cleaner property information, affordable owner
            contact, and matching support into one focused search.
          </p>
        </div>

        <div className="compare-grid">
          <article>
            <p className="compare-label">The usual hunt</p>
            <h3>Repeated calls. Unclear details. Broker-style fees.</h3>
          </article>
          <article className="compare-uphomes">
            <p className="compare-label">The UpHomes route</p>
            <h3>Browse first. Unlock the contacts you choose. Move directly.</h3>
          </article>
        </div>
      </section>

      <section className="properties" ref={propertyWrapRef}>
        <div className="property-track" ref={propertyTrackRef}>
          <div className="property-intro">
            <h2>Homes worth the call.</h2>
            <p>
              Explore a current UpHomes rental from every city we serve, with
              real property photos and a direct path to the full listing.
            </p>
            <a
              href="https://uphomes.in/search"
              target="_blank"
              rel="noreferrer"
            >
              See live properties
            </a>
          </div>

          {homes.map((home, index) => (
            <figure className={`property-card property-card-${index + 1}`} key={home.type}>
              <a
                className="property-card-link"
                href={home.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${home.type} in ${home.city}`}
              >
                <img
                  src={home.image}
                  alt={`${home.type} rental property in ${home.city}`}
                  width={home.width}
                  height={home.height}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <figcaption>
                  <span>{home.city}</span>
                  <h3>{home.type}</h3>
                  <p>{home.detail}</p>
                </figcaption>
              </a>
            </figure>
          ))}
        </div>
      </section>

      <section className="features section-shell" id="features">
        <div className="section-heading">
          <h2>Rent smarter, faster, safer.</h2>
          <p>
            Find matching homes, compare cleaner details, and choose the
            contacts worth unlocking.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <article className={`feature feature-${index + 1}`} key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
          <figure className="feature-visual">
            <img
              src={`${base}property-bedroom.avif`}
              alt="Cool grey rental bedroom with a balcony"
              width="1122"
              height="1402"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section
        className="upbot-video-reveal"
        id="upbot"
        ref={upbotVideoWrapRef}
        aria-label="UpBot introduction video"
      >
        <div className="upbot-video-box" ref={upbotVideoBoxRef}>
          <video
            src={`${base}upbot-video.mp4`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="UpBot finds and verifies rental properties from a simple request"
          />
        </div>
      </section>

      <section className="agent section-shell" id="how">
        <div className="agent-heading reveal agent-reveal">
          <div className="upbot-logo-frame">
            <img
              src={`${base}upbot-logo.png`}
              alt="UpBot"
              width="3600"
              height="1875"
              loading="lazy"
            />
          </div>
          <h2>Your 24/7 AI property hunter.</h2>
          <span>
            UpBot searches, confirms availability, and brings back homes worth
            your time.
          </span>
        </div>

        <div className="agent-steps">
          {agentSteps.map((step) => (
            <article className="agent-step reveal agent-reveal" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reviews section-shell" id="testimonials">
        <div className="section-heading">
          <h2 className="reviews-title">
            <span>What renters</span>
            <span>and owners say.</span>
          </h2>
        </div>
        <div className="review-stage">
          {reviews.map((review, index) => (
            <blockquote className={`review review-${index + 1}`} key={review.name}>
              <p>“{review.quote}”</p>
              <footer>
                <strong>{review.name}</strong>
                <span>{review.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="app-story section-shell">
        <div className="app-copy reveal">
          <h2>Search in your own rhythm.</h2>
          <p>
            Browse the feed, narrow the requirement, and see homes by location.
          </p>
          <a
            className="button button-primary"
            href="https://uphomes.in/download"
            target="_blank"
            rel="noreferrer"
          >
            Get the App
          </a>
        </div>
        <div className="screen-stack">
          {[
            ["app-home.png", "UpHomes app home screen"],
            ["app-search.png", "UpHomes app search screen"],
            ["app-map.png", "UpHomes app map screen"],
          ].map(([image, alt], index) => (
            <figure
              className={`screen screen-${index + 1} reveal`}
              key={image}
              style={{
                background: "transparent",
                boxShadow: "none",
                border: "none",
                padding: "0",
                margin: "0",
              }}
            >
              <img
                src={`${base}${image}`}
                alt={alt}
                width="988"
                height="1400"
                loading="lazy"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                  objectFit: "contain",
                }}
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="faq section-shell" id="faqs">
        <div className="faq-heading reveal">
          <h2>Answers before the move.</h2>
          <a href="https://uphomes.in/faq" target="_blank" rel="noreferrer">
            Full help center
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="reveal" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <GuidesSection />

      <footer className="footer" ref={footerRef}>
        <div className="footer-content" ref={footerContentRef}>
          <div className="footer-meta">
            <div className="footer-meta-column">
              <h3>Identification</h3>
              <p>UpHomes</p>
              <p>Community-driven rentals</p>
              <p>India</p>
            </div>
            <div className="footer-meta-column footer-link-column">
              <h3>Explore</h3>
              {footerLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="footer-link-item"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="footer-link-icon" aria-hidden="true">
                    {footerIconByLabel[item.label] ?? item.icon}
                  </span>
                  <span>{item.label}</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              ))}
            </div>
            <div className="footer-meta-column footer-link-column">
              <h3>Social &amp; apps</h3>
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="footer-link-item"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="footer-link-icon" aria-hidden="true">
                    {footerIconByLabel[item.label] ?? item.icon}
                  </span>
                  <span>{item.label}</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              ))}
              <p className="footer-year">2026</p>
            </div>
          </div>
          <div className="footer-brand-block">
            <p className="footer-brand-title" ref={footerBrandRef}>UPHOMES</p>
          </div>
          <div className="footer-bottom">
            <p>© 2026 UpHomes. All rights reserved.</p>
            <div>
              <a href="https://uphomes.in/privacy-policy" target="_blank" rel="noreferrer">
                Privacy
              </a>
              <a href="https://uphomes.in/terms-and-conditions" target="_blank" rel="noreferrer">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
