import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import logo from "../assets/logo.png";
import heroBg from "../assets/Hero.jpeg";
import netanel from "../assets/Netanel.jpeg";
import tzvi from "../assets/Tzvi.jpeg";
import yonit from "../assets/Yonit.jpeg";
import leonLevy from "../assets/partner-logos/Leon_Levy.png";
import nationalLibrary from "../assets/partner-logos/national-library.png";
import snc from "../assets/partner-logos/snc.png";
import ministry from "../assets/partner-logos/Ministry_of_Aliyah_and_Integration.svg.png";
import beshvil from "../assets/partner-logos/beshvil-hamachar.png";
import allIn from "../assets/partner-logos/all-in.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Life on the Frontlines — Honoring Service. Preserving Stories. Building Memory." },
      {
        name: "description",
        content:
          "Life on the Frontlines preserves the oral histories of Israeli reservists through long-form interviews, building the largest digital archive of its kind.",
      },
      { property: "og:title", content: "Life on the Frontlines" },
      {
        property: "og:description",
        content:
          "Honoring Service. Preserving Stories. Building Memory. The first global digital archive of Israeli reservist testimonies.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://frontlinesstories.org.il/english/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Life on the Frontlines" },
      {
        name: "twitter:description",
        content: "The first global digital archive of Israeli reservist testimonies.",
      },
    ],
  }),
  component: HomePage,
});

const VIDEO_IDS = [
  "SIcE_5-YyRU",
  "eTHkGDRMRbk",
  "EvblU_93mGg",
  "o6NixLNOWZ0",
  "bZbSXvs_mhM",
  "kIQKoYW0O9I",
];

const FOUNDERS = [
  {
    name: "Netanel Ben Shushan",
    role: "CEO & Co-Founder",
    photo: netanel,
    linkedin: "https://www.linkedin.com/in/netanel-benshushan-119966238",
  },
  {
    name: "Tzvi Stern",
    role: "Co-Founder & Chairman",
    photo: tzvi,
    linkedin: "https://www.linkedin.com/in/tzvi-stern-87a26226a",
  },
  {
    name: "Yonit Serkin",
    role: "Co-Founder",
    photo: yonit,
    linkedin: "https://www.linkedin.com/in/yonitserkin",
  },
];

const PARTNERS = [
  { src: leonLevy, alt: "Leon Levy Foundation" },
  { src: nationalLibrary, alt: "National Library of Israel" },
  { src: snc, alt: "Start-Up Nation Central" },
  { src: ministry, alt: "Ministry of Aliyah and Integration" },
  { src: beshvil, alt: "Beshvil HaMachar" },
  { src: allIn, alt: "All In Podcast" },
];

const NEWS_ARTICLES = [
  {
    title: "Placeholder Article Title One — replace with real headline",
    publication: "The Times of Israel",
    url: "https://example.com/article-1",
    thumbnail: "https://placehold.co/640x360/1a3a52/ffffff?text=Article+1",
  },
  {
    title: "Placeholder Article Title Two — replace with real headline",
    publication: "The Jerusalem Post",
    url: "https://example.com/article-2",
    thumbnail: "https://placehold.co/640x360/c8a24b/ffffff?text=Article+2",
  },
  {
    title: "Placeholder Article Title Three — replace with real headline",
    publication: "Ynet News",
    url: "https://example.com/article-3",
    thumbnail: "https://placehold.co/640x360/5a9eb0/ffffff?text=Article+3",
  },
  {
    title: "Placeholder Article Title Four — replace with real headline",
    publication: "Haaretz",
    url: "https://example.com/article-4",
    thumbnail: "https://placehold.co/640x360/2a2a2a/ffffff?text=Article+4",
  },
];

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 68 48" width="68" height="48" aria-hidden="true">
    <path
      d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.64 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
      fill="red"
    />
    <path d="M45 24 27 14v20" fill="white" />
  </svg>
);

function ShortCard({ videoId, index }: { videoId: string; index: number }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="shorts__card">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=0&loop=1&playlist=${videoId}&rel=0&modestbranding=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={`Reservist story video ${index + 1}`}
        />
      ) : (
        <div className="shorts__thumbnail" onClick={() => setPlaying(true)}>
          <img src={`https://img.youtube.com/vi/${videoId}/0.jpg`} alt={`Reservist story video ${index + 1}`} loading="lazy" />
          <button className="shorts__play" aria-label="Play video" onClick={() => setPlaying(true)}>
            <PlayIcon />
          </button>
        </div>
      )}
    </div>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const els = rootRef.current.querySelectorAll(".animate-on-scroll");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      ref={rootRef}
      className="lof"
      style={{ ["--hero-bg" as string]: `url(${heroBg})` }}
    >
      <header className="site-header">
        <nav className="nav-container">
          <a href="#hero" className="nav-logo" onClick={closeMenu}>
            <img src={logo} alt="Life on the Frontlines" className="nav-logo-img" />
          </a>

          <div className="nav-socials">
            <a href="https://open.spotify.com/show/37AMSoV6JPRMqaqNdIDKzv" target="_blank" rel="noopener noreferrer" aria-label="Listen on Spotify">
              <SpotifyIcon />
            </a>
            <a href="https://www.instagram.com/life.on.the.frontline" target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram">
              <InstagramIcon />
            </a>
          </div>

          <button
            className={`hamburger${menuOpen ? " is-active" : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links${menuOpen ? " is-open" : ""}`}>
            <li><a href="#stories" onClick={closeMenu}>Stories</a></li>
            <li><a href="#news" onClick={closeMenu}>News</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#partners" onClick={closeMenu}>Partners</a></li>
            <li><a href="#founders" onClick={closeMenu}>Founders</a></li>
            <li><a href="#donate" className="nav-donate" onClick={closeMenu}>Support Us</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="section section--dark hero">
          <div className="container">
            <div className="hero__logo-wrapper">
              <img src={logo} alt="Life on the Frontlines" className="hero__logo-img" />
            </div>
          </div>
        </section>

        <section id="stories" className="section section--light shorts">
          <div className="container">
            <div className="shorts__carousel" role="region" aria-label="Video stories carousel">
              <div className="shorts__track">
                {VIDEO_IDS.map((id, i) => (
                  <ShortCard key={id} videoId={id} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="news" className="section news">
          <div className="container">
            <div className="news__header animate-on-scroll">
              <h2 className="section__title">In the News</h2>
            </div>
            <div className="news__track" role="region" aria-label="News articles carousel">
              {NEWS_ARTICLES.map((article) => (
                <a
                  key={article.url}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news__card"
                >
                  <div className="news__thumb">
                    <img src={article.thumbnail} alt={article.title} loading="lazy" />
                  </div>
                  <div className="news__body">
                    <div className="news__title">{article.title}</div>
                    <div className="news__publication">{article.publication}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>


        <section id="about" className="section section--dark mission">
          <div className="container container--narrow animate-on-scroll">
            <h2 className="section__title">Honoring Service. Preserving Stories. Building Memory.</h2>
            <p>
              On October 7th, as the worst attacks on the country were still underway, 300,000 reservists answered the call and reported for duty. They lost friends. They made impossible choices. And then they came home — to work, to family, to school pickup. And then again, back to the front. Back and forth, neither here nor there.
            </p>
            <p className="mission__emphasis">Our mission: To preserve their story.</p>
          </div>
        </section>

        <section className="section section--light what-we-do">
          <div className="container container--narrow animate-on-scroll">
            <h2 className="section__title">What We Do</h2>
            <p>
              Life on the Frontlines has launched the first-of-its-kind global digital archive to record, preserve, and share the unfiltered testimonies of Israeli reservists, building bridges of understanding, healing, and remembrance across generations, communities, and humanity.
            </p>
            <p>
              Using long-form podcast-setting conversations with professional interviewers, we aim to create the largest oral history archive of Israeli reservists at battle.
            </p>
          </div>
        </section>

        <section id="partners" className="section section--light partners">
          <div className="container animate-on-scroll">
            <h2 className="section__title">Our Partners</h2>
            <p className="partners__subtitle">
              Life on the Frontlines is a non-profit founded by reservists, for reservists, in collaboration with leading foundations, tech companies, and public sector institutions.
            </p>
            <div className="partners__logos">
              {PARTNERS.map((p) => (
                <div key={p.alt} className="partners__logo-item">
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="founders" className="section section--light founders">
          <div className="container animate-on-scroll">
            <h2 className="section__title">Our Founders</h2>
            <div className="founders__grid">
              {FOUNDERS.map((f) => (
                <div key={f.name} className="founders__card">
                  <div className="founders__photo">
                    <img src={f.photo} alt={f.name} />
                  </div>
                  <h3 className="founders__name">{f.name}</h3>
                  <p className="founders__role">{f.role}</p>
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="founders__linkedin"
                    aria-label={`${f.name} on LinkedIn`}
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="donate" className="section section--dark donate">
          <div className="container animate-on-scroll">
            <h2 className="donate__title">Give Reservists the Opportunity to Tell Their Story</h2>
            <a
              href="https://pefisrael.org/charity/life-on-the-frontline"
              target="_blank"
              rel="noopener noreferrer"
              className="donate__button"
            >
              Support Us
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer__socials">
            <a href="https://open.spotify.com/show/37AMSoV6JPRMqaqNdIDKzv" target="_blank" rel="noopener noreferrer" aria-label="Listen on Spotify">
              <SpotifyIcon />
            </a>
            <a href="https://www.instagram.com/life.on.the.frontline" target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram">
              <InstagramIcon />
            </a>
          </div>
          <p className="footer__copy">© 2025 Life on the Frontlines. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
