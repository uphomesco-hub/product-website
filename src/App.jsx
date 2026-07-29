import { useEffect, useRef } from "react";

const base = `${import.meta.env.BASE_URL}uphomes/`;

const homes = [
  {
    city: "Gurugram",
    type: "Contemporary city apartment",
    detail: "Concept property preview",
    image: `${base}hero-apartment.avif`,
  },
  {
    city: "Bengaluru",
    type: "Balcony bedroom",
    detail: "Concept property preview",
    image: `${base}property-bedroom.avif`,
  },
  {
    city: "Pune",
    type: "Open-plan rental",
    detail: "Concept property preview",
    image: `${base}property-dining.avif`,
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

const metrics = [
  { value: "56K+", label: "renters onboarded" },
  { value: "30K+", label: "live listings" },
  { value: "4", label: "cities" },
  { value: "3K+", label: "deals closed" },
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

function NavBar() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="UpHomes concept home">
        <img src={`${base}logo.png`} alt="UpHomes" width="507" height="120" />
      </a>

      <div className="nav-links">
        <a href="#compare">Compare</a>
        <a href="#features">Features</a>
        <a href="#metrics">Metrics</a>
        <a href="#how">AI Agent</a>
        <a href="#testimonials">Reviews</a>
        <a href="#faqs">FAQ</a>
        <a href="#blogs">Blogs</a>
      </div>

      <a
        className="nav-cta"
        href="https://uphomes.in/search"
        target="_blank"
        rel="noreferrer"
      >
        Browse Properties
      </a>
    </nav>
  );
}

function App() {
  const pageRef = useRef(null);
  const propertyWrapRef = useRef(null);
  const propertyTrackRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return undefined;

    let cancelled = false;
    let context;
    let media;

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
        gsap.utils.toArray(".reveal").forEach((element) => {
          gsap.from(element, {
            y: 44,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
              once: true,
            },
          });
        });

        gsap.to(".hero-media", {
          scale: 0.94,
          rotate: 2.5,
          transformOrigin: "center bottom",
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".manifesto-muted", {
          color: "var(--text)",
          stagger: 0.18,
          ease: "none",
          scrollTrigger: {
            trigger: ".manifesto",
            start: "top 62%",
            end: "center center",
            scrub: true,
          },
        });

        media = gsap.matchMedia();
        media.add("(min-width: 901px)", () => {
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
        });
      }, pageRef);
    }

    setupScrollStory();

    return () => {
      cancelled = true;
      media?.revert();
      context?.revert();
    };
  }, []);

  return (
    <main ref={pageRef} id="top">
      <NavBar />

      <header className="hero">
        <div className="hero-media">
          <img
            className="hero-image"
            src={`${base}hero-apartment.avif`}
            alt="Contemporary city apartment with a violet lounge chair"
            width="1536"
            height="1024"
            fetchPriority="high"
          />
          <div className="hero-scrim" />
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

        <img
          className="hero-device"
          src={`${base}app-device.avif`}
          alt="UpHomes mobile app property screen"
          width="919"
          height="1300"
          fetchPriority="high"
        />
      </header>

      <section className="manifesto" id="compare">
        <div className="manifesto-copy">
          <h2>
            <span className="manifesto-muted">A rental hunt should give you </span>
            <span className="manifesto-muted">clear details, </span>
            <span className="manifesto-muted">real contacts, </span>
            <strong>and less chase.</strong>
          </h2>
          <p className="reveal">
            UpHomes brings cleaner property information, affordable owner
            contact, and matching support into one focused search.
          </p>
        </div>

        <div className="compare-grid reveal">
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
              Purpose-made concept photography shows how the expressive design
              system can frame real UpHomes inventory.
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
              <img
                src={home.image}
                alt={`${home.type} concept in ${home.city}`}
                width={index === 0 ? "1536" : "1122"}
                height={index === 0 ? "1024" : "1402"}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <figcaption>
                <span>{home.city}</span>
                <h3>{home.type}</h3>
                <p>{home.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="features section-shell" id="features">
        <div className="section-heading reveal">
          <h2>Rent smarter, faster, safer.</h2>
          <p>
            The current UpHomes capabilities stay intact, now expressed through
            a sharper editorial system.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <article className={`feature feature-${index + 1} reveal`} key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
          <figure className="feature-visual reveal">
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

      <section className="metrics section-shell" id="metrics">
        <div className="metrics-heading reveal">
          <h2>Trust, shown in scale.</h2>
          <p>Current homepage metrics, given room to speak.</p>
        </div>
        <div className="metric-grid">
          {metrics.map((metric, index) => (
            <article className={`metric metric-${index + 1} reveal`} key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="agent section-shell" id="how">
        <div className="agent-heading reveal">
          <p>Coming soon</p>
          <h2>Your 24/7 AI property hunter.</h2>
          <span>
            It is designed to search, confirm availability, and bring back
            homes worth your time.
          </span>
        </div>

        <div className="agent-steps">
          {agentSteps.map((step) => (
            <article className="agent-step reveal" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reviews section-shell" id="testimonials">
        <div className="section-heading reveal">
          <h2>What renters and owners say.</h2>
        </div>
        <div className="review-stage">
          {reviews.map((review, index) => (
            <blockquote className={`review review-${index + 1} reveal`} key={review.name}>
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
            <figure className={`screen screen-${index + 1} reveal`} key={image}>
              <img
                src={`${base}${image}`}
                alt={alt}
                width="988"
                height="1400"
                loading="lazy"
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

      <section className="blogs section-shell" id="blogs">
        <div className="section-heading reveal">
          <h2>Rental guides for real decisions.</h2>
        </div>
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <article className={`blog blog-${index + 1} reveal`} key={blog.title}>
              <span>{blog.place}</span>
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
              <a href="https://uphomes.in/blogs" target="_blank" rel="noreferrer">
                Read UpHomes guides
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-media">
          <img
            src={`${base}property-dining.avif`}
            alt="Bright open-plan rental apartment"
            width="1122"
            height="1402"
            loading="lazy"
          />
          <div className="footer-scrim" />
        </div>
        <div className="footer-content">
          <img
            className="footer-logo reveal"
            src={`${base}logo.png`}
            alt="UpHomes"
            width="507"
            height="120"
          />
          <h2 className="reveal">Your next home, without the noise.</h2>
          <div className="footer-actions reveal">
            <a
              className="button button-primary"
              href="https://uphomes.in/search"
              target="_blank"
              rel="noreferrer"
            >
              Browse Properties
            </a>
            <a href="mailto:contact@uphomes.in">contact@uphomes.in</a>
          </div>
          <div className="footer-bottom">
            <p>Separate homepage concept. The live UpHomes website is unchanged.</p>
            <p>© 2026 UpHomes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
